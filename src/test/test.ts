import {decryptData, encryptData} from "../components/DataEncryption";
import {
  createdTS,
  generateExpirationDate,
  getCurrentDateTimeUTC8,
  getCurrentDateUTC8,
} from "../components/DateTimeFormatter";

console.log(
  decryptData(
    "U2FsdGVkX19K67YDXWxOIOBPQGPguc/CXDaV9ybhi/dfeZ7w46QrAOYkZyrXr3xz",
    "123",
  ),
);
