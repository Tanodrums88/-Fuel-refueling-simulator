import React from "react";
import "./App.scss";
import RefuelingContextProvider from "./store/RefuelingContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GasStation from "./components/gasStation/GasStationHandler.tsx";
import RegisterHandler from "./components/refuelingRegister/RegisterHandler.tsx";
import StorageHandler from "./components/storage/StorageHandler.tsx";
import RootLayot from "./RootLayot.tsx";

function App() {
  return (
    <BrowserRouter>
      <RefuelingContextProvider>
        <Routes>
          <Route
            path="/"
            element={<RootLayot />}>
            <Route
              index={true}
              path="/"
              element={<GasStation />}
            />
            <Route
              path="/register"
              element={<RegisterHandler />}
            />
            <Route
              path="/storage"
              element={<StorageHandler />}
            />
          </Route>
        </Routes>
      </RefuelingContextProvider>
    </BrowserRouter>
  );
}

export default App;
