export const convertMilliseconds = (ms: number): string => {
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (days >= 1) {
    return `${days.toFixed(2)}d`;
  } else if (hours >= 1) {
    return `${hours.toFixed(2)}h`;
  } else if (minutes >= 1) {
    return `${minutes.toFixed(2)}m`;
  } else {
    return `${seconds.toFixed(2)}s`;
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
    return `${Math.floor(days)}d`;
  } else if (hours >= 1) {
    return `${Math.floor(hours)}h`;
  } else if (minutes >= 1) {
    return `${Math.floor(minutes)}m`;
  } else {
    return `${Math.floor(seconds)}s`;
  }
};
