export const convertMilliseconds = (ms: number): string => {
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (days >= 1) {
    return `${days.toFixed(2)} days`;
  } else if (hours >= 1) {
    return `${hours.toFixed(2)} hours`;
  } else if (minutes >= 1) {
    return `${minutes.toFixed(2)} minutes`;
  } else {
    return `${seconds.toFixed(2)} seconds`;
  }
};

export const timeAgo = (isoDate: string): string => {
  const now = new Date();
  const past = new Date(isoDate);
  const msDifference = now.getTime() - past.getTime();

  const seconds = msDifference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (days >= 1) {
    return `${Math.floor(days)} day${Math.floor(days) > 1 ? "s" : ""}`;
  } else if (hours >= 1) {
    return `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? "s" : ""}`;
  } else if (minutes >= 1) {
    return `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? "s" : ""}`;
  } else {
    return `${Math.floor(seconds)} second${Math.floor(seconds) > 1 ? "s" : ""}`;
  }
};

export const toSentenceCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
