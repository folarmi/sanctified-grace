import { CustomColor } from "@/components/CustomColor";
import React from "react";
import Svg, { Path } from "react-native-svg";

const TabPodcastIcon = (props: any) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M16.8387 17.2C19.1357 15.6943 20.6429 13.189 20.6429 10.3457C20.6429 5.73663 16.6932 2 11.8214 2C6.94962 2 3 5.73663 3 10.3457C3 13.189 4.5072 15.6943 6.80412 17.2M8.25332 13.4C7.42909 12.5925 6.92063 11.5082 6.92063 10.313C6.92063 7.82075 9.11502 5.8 11.8214 5.8C14.5278 5.8 16.7222 7.82075 16.7222 10.313C16.7222 11.509 16.2138 12.5925 15.3895 13.4M11.8214 21C10.7388 21 9.86111 20.1493 9.86111 19.1V17.2C9.86111 16.1507 10.7388 15.3 11.8214 15.3C12.9041 15.3 13.7817 16.1507 13.7817 17.2V19.1C13.7817 20.1493 12.9041 21 11.8214 21ZM12.8016 10.55C12.8016 11.0747 12.3628 11.5 11.8214 11.5C11.2801 11.5 10.8413 11.0747 10.8413 10.55C10.8413 10.0253 11.2801 9.6 11.8214 9.6C12.3628 9.6 12.8016 10.0253 12.8016 10.55Z"
      stroke={props.focused ? CustomColor.orange : CustomColor.blue_300}
      strokeWidth="2.03571"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default TabPodcastIcon;
