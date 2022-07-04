//! IMPORTS & CONSTS:
import { useReducer } from "react";
import { Sub } from "../types";

//! INITIAL STATE:
const INITIAL_STATE = {
  nick: " ",
  subMonths: 0,
  avatar: " ",
  description: " ",
};

//! INTERFACES:
interface FormState {
  inputValues: Sub;
}

//! TYPES:
type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

//! REDUCER:
const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "clear":
      return INITIAL_STATE;
  }
};

const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm;