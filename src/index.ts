import {decryptData, encryptData} from "./components/DataEncryption";
import {
  convertTimestampToDateString,
  createdTS,
  generateExpirationDate,
  getCurrentDateTimeUTC8,
  getCurrentDateUTC8,
  isTimestampExpired,
} from "./components/DateTimeFormatter";
import {
  maskEmail,
  generateRandomString,
  generateSeriesNumber,
  generateSeriesNumberWithPrefix,
  getFullName,
  generateSixDigitCode,
} from "./components/StringFormatter";

export {
  maskEmail,
  generateRandomString,
  generateSeriesNumber,
  generateSeriesNumberWithPrefix,
  getFullName,
  generateSixDigitCode,
  createdTS,
  generateExpirationDate,
  isTimestampExpired,
  convertTimestampToDateString,
  getCurrentDateUTC8,
  getCurrentDateTimeUTC8,
  encryptData,
  decryptData,
};
