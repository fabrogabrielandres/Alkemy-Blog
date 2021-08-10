/**
 * @param value string as an ISO date string
 * Example: 2021-08-10T15:08:00.510Z
 *
 * Converts the given value to a 24 hours without seconds using localDateString()  
 * Example: 2021-08-10 15:08
*/
export function to24hoursNoSecondsFormat(value = "") {
      const dateFormat = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      return new Date(value).toLocaleString([], dateFormat);
}
