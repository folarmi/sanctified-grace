import ThemeContext from "@/app/context/ThemeContext";
import { CustomColor } from "@/components/CustomColor";
import React, { useContext } from "react";
import Svg, { Path } from "react-native-svg";

const UpArrow = (props: any) => {
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 14.2951L7.41 15.7051L12 11.1251L16.59 15.7051L18 14.2951L12 8.29508L6 14.2951Z"
        fill={isDarkMode ? CustomColor.orange : CustomColor.white}
      />
    </Svg>
  );
};

export default UpArrow;
