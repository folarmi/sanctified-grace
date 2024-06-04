import React from "react";
import { TextInput, TextInputProps, Text, View } from "react-native";
import { useController, Control } from "react-hook-form";
import TailwindText from "./TailwindText";

interface CustomInputProps extends TextInputProps {
  name: string;
  placeholder: string;
  label: string;
  control: Control;
  rules?: object;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  rules = {},
  placeholder,
  label,
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

  return (
    <View className="mb-4">
      <TailwindText variant="bodyText2" className="text-navy_blue pb-2">
        {label}
      </TailwindText>

      <TextInput
        className={`border border-blue_100 rounded-lg p-2 text-sm font-MontserratLight ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        {...textInputProps}
        placeholder={placeholder}
      />
      {error && <Text className="text-red-500 mt-1">{error.message}</Text>}
    </View>
  );
};

export default CustomInput;
