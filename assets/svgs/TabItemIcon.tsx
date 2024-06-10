import React from "react";
import Svg, { Path } from "react-native-svg";

const TabItemIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.1999 10.8H6.9999V13.2H20.1999V10.8ZM20.1999 6H6.9999V8.4H20.1999V6ZM6.9999 18H20.1999V15.6H6.9999V18Z"
      fill="#216BC4"
    />
    <Path d="M5.7999 6V8.4H3.3999V6H5.7999Z" fill="#216BC4" />
    <Path d="M5.7999 10.8H3.3999V13.2H5.7999V10.8Z" fill="#216BC4" />
    <Path d="M3.3999 15.6H5.7999V18H3.3999V15.6Z" fill="#216BC4" />
  </Svg>
);

export default TabItemIcon;
