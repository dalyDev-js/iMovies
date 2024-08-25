export const setType = (newType) => {
  return { type: "SET_TYPE", payload: newType };
};

export const setCategory = (newCategory) => {
  return { type: "SET_CATEGORY", payload: newCategory };
};

export const setTvCategory = (newTvCategory) => {
  return { type: "SET_TV_CATEGORY", payload: newTvCategory };
};
