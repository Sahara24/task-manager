import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { persistor, store } from "../../store";
import { Navbar } from "../Navbar";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

export const GlobalProvider = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="bottom-right" />
          {<Outlet />}
        </PersistGate>
      </Provider>
    </div>
  );
};
