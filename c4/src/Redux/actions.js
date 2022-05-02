// action types
import axios from "axios";
export const USER = "USER";

export const login = (data) => {
  return {
    type: USER,
    payload: data,
  };
};
