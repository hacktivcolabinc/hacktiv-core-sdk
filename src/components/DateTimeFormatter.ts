import {addMinutes, getUnixTime, isPast} from "date-fns";

export function createdTS(): number {
  return getUnixTime(new Date());
}

export function generateExpirationDate(duration: number): number {
  const newDate = addMinutes(new Date(), duration);
  const expirationtimestamp = Math.floor(newDate.getTime() / 1000); // Convert to Unix timestamp in seconds
  return expirationtimestamp;
}

export function isTimestampExpired(timestamp: number): boolean {
  const nowInSeconds = Math.floor(new Date().getTime() / 1000);
  return isPast(nowInSeconds);
}

export function convertTimestampToDateString(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return formattedDate;
}

export function getCurrentDateUTC8(): string {
  const now = new Date();

  const utc8Offset = 8 * 60 * 60 * 1000;
  const utc8Date = new Date(now.getTime() + utc8Offset);

  const year = utc8Date.getUTCFullYear();
  const month = String(utc8Date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(utc8Date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getCurrentDateTimeUTC8(): string {
  const now = new Date();

  const utc8Offset = 8 * 60 * 60 * 1000;
  const utc8Date = new Date(now.getTime() + utc8Offset);

  const year = utc8Date.getUTCFullYear();
  const month = String(utc8Date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(utc8Date.getUTCDate()).padStart(2, "0");

  const hours = String(utc8Date.getUTCHours()).padStart(2, "0");
  const minutes = String(utc8Date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(utc8Date.getUTCSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
