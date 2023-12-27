"use client";

import { useReducer } from "react";

const initialState = {
  open: false,
  content: "",
};

const handleModal = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, open: true, content: action.content };
    case "CLOSE":
      return { ...state, open: false };
    default:
      return state;
  }
};

const useModal = () => {
  const [state, dispatch] = useReducer(handleModal, initialState) as any;

  return { ...state, dispatch };
};

export default useModal;
