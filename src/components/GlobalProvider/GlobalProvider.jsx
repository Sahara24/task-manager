import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { persistor, store } from "../../store";
import { Navbar } from "../Navbar";
import { PersistGate } from "redux-persist/integration/react";

export const GlobalProvider = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {<Outlet />}
        </PersistGate>
      </Provider>
    </div>
  );
};
