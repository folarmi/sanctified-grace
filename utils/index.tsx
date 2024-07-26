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

export function capitalizeEachWord(sentence: string) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Example usage:
const sentence = "this is an example sentence";
const capitalizedSentence = capitalizeEachWord(sentence);
console.log(capitalizedSentence); // Output: "This Is An Example Sentence"

export const replaceString = (str: string, value: string) => {
  if (!str) return str;
  str.replace(",", value);
};

export function formatTime(milliseconds: number) {
  if (typeof milliseconds !== "number" || isNaN(milliseconds))
    return "00:00:00";
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

export function formatString(input: string) {
  // Use regex to match the pattern and replace it
  // This regex captures the first number, the second number, and the rest of the string
  const formattedString = input.replace(/^(\d+)\s(\d+)\s/, "$1 ($2) ");
  return formattedString;
}
