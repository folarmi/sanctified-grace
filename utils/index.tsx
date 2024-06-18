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

export function formatTime(milliseconds: number) {
  // Convert total milliseconds to seconds
  let totalSeconds = Math.floor(milliseconds / 1000);

  // Calculate hours, minutes and seconds
  let hours: any = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes: any = Math.floor(totalSeconds / 60);
  let seconds: any = totalSeconds % 60;

  // Format hours, minutes and seconds to always display two digits
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  // Return formatted time as hh:mm:ss
  return `${hours}:${minutes}:${seconds}`;
}
