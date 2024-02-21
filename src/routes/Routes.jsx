import App from "../App";
import { GlobalProvider } from "../components";
import { ManageTask, ViewTask } from "../pages";

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
        element: <ManageTask />,
      },
      {
        path: "edit",
        element: <ManageTask />,
      },
      {
        path: "view",
        element: <ViewTask />,
      },
    ],
  },
];
