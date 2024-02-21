import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    title: "",
    description: "",
    dueDate: "",
    id: "",
    status: "",
  },
};

export const counterSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
