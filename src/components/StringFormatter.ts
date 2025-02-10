import {Fullname} from "../types";

export function maskEmail(email: string): string | null {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return null;
  }

  const [localPart, domain] = email.split("@");

  const maskedLocal: string =
    localPart.length > 2
      ? localPart[0] + "*".repeat(localPart.length - 2) + localPart.slice(-1)
      : "*".repeat(localPart.length);

  return `${maskedLocal}@${domain}`;
}

export function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export function generateSeriesNumber(
  zeroLength: number,
  dataLength: number,
): string {
  const nextNumber = dataLength + 1;

  const zeroPaddedNumber = nextNumber.toString().padStart(zeroLength, "0");

  return `${zeroPaddedNumber}`;
}
export function generateSeriesNumberWithPrefix(
  prefix: string,
  zeroLength: number,
  dataLength: number,
): string {
  const nextNumber = dataLength + 1;

  const zeroPaddedNumber = nextNumber.toString().padStart(zeroLength, "0");

  return `${prefix}-${zeroPaddedNumber}`;
}

export function getFullName(name: Fullname): string {
  const {Firstname, Middlename, Lastname} = name;

  return [Firstname, Middlename, Lastname].filter(Boolean).join(" ");
}

export function generateSixDigitCode(): number {
  return Math.floor(100000 + Math.random() * 900000);
}
