import {AnyData} from "../types";
import CryptoJS from "crypto-js";

export function encryptData(data: AnyData, key: string) {
  var encryptCode = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  return encryptCode;
}

export function decryptData(data: string, key: string) {
  var decrypted = CryptoJS.AES.decrypt(data, key);
  var decryptedData = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  return decryptedData;
}
