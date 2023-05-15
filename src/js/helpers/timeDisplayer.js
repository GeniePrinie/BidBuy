/**
 * Restructures date from ISO to readable
 * @param {string} datetime Date and time in ISO date format
 * @returns {string} Date and time in readable format
 */
export function displayTime(datetime) {
  const year = datetime.substring(0, 4);
  const month = datetime.substring(5, 7);
  const date = datetime.substring(8, 10);
  const time = datetime.substring(11, 19);

  return `${date}.${month}.${year}, at ${time}`;
}
