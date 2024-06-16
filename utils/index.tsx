import { Dimensions } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;

export const elevation = {
  elevation: 10,
};

export const formatDate = (date: Date) => {
  let dateObj: {
    month?: string;
    day?: number;
  } = {};

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let formattedDate = new Date(date);
  dateObj.month = monthNames[formattedDate.getUTCMonth()];
  dateObj.day = formattedDate.getUTCDate();

  return dateObj;
};

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
