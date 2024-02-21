import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

function randomNumGenerator() {
  return Math.floor(Math.random() * 90000000) + 10000000;
}

export const counterSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const customPayload = {
        ...payload,
        status: "Pending",
        id: randomNumGenerator(),
      };
      state.tasks.push(customPayload);
    },
    updateTask: (state, { payload }) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addTask, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
