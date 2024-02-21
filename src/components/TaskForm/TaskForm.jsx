import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./taskForm.css";

const schema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string(),
});

export const TaskForm = ({ submitFun, defaultValues }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const handleBack = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    submitFun(data);
    navigate("/");
  };
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="addForm">
        <h2>{defaultValues?.id ? "Edit Task" : "Add a Task"}</h2>
        <Controller
          render={({ field }) => (
            <TextField
              helperText={errors?.title?.message}
              error={"title" in errors}
              {...field}
              label="Title"
              variant="outlined"
            />
          )}
          control={control}
          name="title"
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              helperText={errors?.description?.message}
              error={"description" in errors}
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
              error={"dueDate" in errors}
              helperText={errors?.dueDate?.message}
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

        <div className="formBtnWrapper">
          <Button color="inherit" variant="contained" onClick={handleBack}>
            BACK
          </Button>
          <Button type="submit" variant="contained">
            {defaultValues?.id ? "EDIT TASK" : "ADD TASK"}
          </Button>
        </div>
      </form>
    </div>
  );
};
