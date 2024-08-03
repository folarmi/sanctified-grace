import ThemeContext from "@/app/context/ThemeContext";
import { CustomColor } from "@/components/CustomColor";
import React, { useContext } from "react";
import Svg, { Path } from "react-native-svg";

const DownArrow = (props: any) => {
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
        d="M18 9.70492L16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492Z"
        fill={isDarkMode ? CustomColor.orange : CustomColor.navy_blue}
      />
    </Svg>
  );
};

export default DownArrow;
