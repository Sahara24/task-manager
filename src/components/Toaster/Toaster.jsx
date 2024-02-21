import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const Toaster = ({ open, severity, msg }) => {
  console.log("here");
  return (
    <Snackbar open={open} autoHideDuration={3000}>
      <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
};
