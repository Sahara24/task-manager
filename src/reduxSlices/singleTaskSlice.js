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
    setTask: (state, { payload }) => {
      state.task.title = payload.title;
      state.task.description = payload.description;
      state.task.dueDate = payload.dueDate;
      state.task.id = payload.id;
      state.task.status = payload.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
