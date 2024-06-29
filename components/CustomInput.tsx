import React, { useEffect, useState } from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useController, Control } from "react-hook-form";
import TailwindText from "./TailwindText";
import eyesClosed from "@/assets/images/eyesClosed.png";

interface CustomInputProps extends TextInputProps {
  name: string;
  placeholder: string;
  label: string;
  control: Control;
  rules?: object;
  isSecure?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  rules = {},
  placeholder,
  label,
  isSecure = false,
  ...textInputProps
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const [secureTextEntry, setSecureTextEntry] = useState(isSecure);

  const toggleVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View className="mb-4">
      <TailwindText variant="bodyText2" className="text-navy_blue pb-2">
        {label}
      </TailwindText>

      <View className="flex flex-row">
        <View className="w-full">
          <TextInput
            className={`border border-blue_100 rounded-lg p-2 text-sm font-MontserratLight ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...textInputProps}
            placeholder={placeholder}
            secureTextEntry={isSecure && secureTextEntry}
          />
        </View>
        {isSecure && (
          <Pressable
            className="w-full absolute top-2 left-[90%]"
            onPress={toggleVisibility}
          >
            <Image source={eyesClosed} className="w-6 h-6" />
          </Pressable>
        )}
      </View>
      {error && <Text className="text-red-500 mt-1">{error.message}</Text>}
    </View>
  );
};

export default CustomInput;
