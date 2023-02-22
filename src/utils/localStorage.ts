export const LS_BEGGINER_TIME = "lsbt";
export const LS_INTERMEDIATE_TIME = "lsit";
export const LS_ADVANCED_TIME = "lsat";

export const setStorageBeginerTime = (time: number[]) => {
  localStorage.setItem(LS_BEGGINER_TIME, JSON.stringify(time));
};

export const getStorageBeginerTime = () => {
  return (
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem(LS_BEGGINER_TIME) ?? "[]")
  );
};
export const setStorageIntermediateTime = (time: number[]) => {
  localStorage.setItem(LS_INTERMEDIATE_TIME, JSON.stringify(time));
};

export const getStorageIntermediateTime = () => {
  return (
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem(LS_INTERMEDIATE_TIME) ?? "[]")
  );
};
export const setStorageAdvancedTime = (time: number[]) => {
  localStorage.setItem(LS_ADVANCED_TIME, JSON.stringify(time));
};

export const getStorageAdvancedTime = () => {
  return (
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem(LS_ADVANCED_TIME) ?? "[]")
  );
};
