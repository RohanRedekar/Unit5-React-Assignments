export const ADD_COUNT = "ADD_COUNT";
// Action for reusability
export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};