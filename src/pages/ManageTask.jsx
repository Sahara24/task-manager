import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../reduxSlices/taskSlice";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
});

export const ManageTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(addTask(data));
    navigate("/");
  };
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="addForm">
        <h2>Add a Task</h2>
        <Controller
          render={({ field }) => (
            <TextField {...field} label="Title" variant="outlined" />
          )}
          control={control}
          name="title"
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              multiline
              rows={5}
              variant="outlined"
            />
          )}
          control={control}
          name="description"
        />
        <Controller
          render={({ field }) => (
            <TextField
              InputLabelProps={{ shrink: true }}
              {...field}
              label="Due Date"
              variant="outlined"
              type="date"
            />
          )}
          control={control}
          name="dueDate"
        />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <Button type="submit" variant="contained">
          Add Task
        </Button>
      </form>
    </div>
  );
};
