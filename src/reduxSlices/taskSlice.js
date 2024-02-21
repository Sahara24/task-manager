import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

function randomNumGenerator() {
  return Math.floor(Math.random() * 90000000) + 10000000;
}

export const tasksSlice = createSlice({
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
    updateTask: (state, { payload }) => {
      const modifiedTasks = payload?.tasks.map((item) => {
        if (item.id === payload?.updatedTask.id) {
          return payload?.updatedTask;
        }
        return item;
      });
      state.tasks = modifiedTasks;
    },
    deleteTask: (state, { payload }) => {
      const modifiedTasks = payload?.tasks?.filter(
        (item) => item.id !== payload?.currentTaskId
      );
      console.log({ modifiedTasks });
      state.tasks = modifiedTasks;
    },
    changeStatus: (state, { payload }) => {
      const modifiedTasks = payload?.tasks?.map((item) => {
        if (item.id === payload?.currentTaskId) {
          return {
            ...item,
            status: payload?.status,
          };
        }
        return item;
      });

      state.tasks = modifiedTasks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, changeStatus, updateTask, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
