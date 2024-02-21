import App from "../App";
import { GlobalProvider } from "../components";
import { AddTask, ViewTask } from "../pages";
import { EditTask } from "../pages/EditTask";

export const Routes = [
  {
    element: <GlobalProvider />,
    path: "",
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "add",
        element: <AddTask />,
      },
      {
        path: "edit",
        element: <EditTask />,
      },
      {
        path: "view",
        element: <ViewTask />,
      },
    ],
  },
];
