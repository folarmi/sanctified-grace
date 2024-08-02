import ThemeContext from "@/app/context/ThemeContext";
import { CustomColor } from "@/components/CustomColor";
import React, { useContext } from "react";
import Svg, { Path } from "react-native-svg";

const TabResourcesIcon = (props: any) => {
  const { isDarkMode } = useContext<any>(ThemeContext);

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 17H14V15H7V17ZM7 13H17V11H7V13ZM7 9H17V7H7V9ZM5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5ZM5 19H19V5H5V19Z"
        fill={
          props.focused
            ? CustomColor.orange
            : isDarkMode
            ? CustomColor.gold_highlight
            : CustomColor.blue_300
        }
      />
    </Svg>
  );
};

export default TabResourcesIcon;
