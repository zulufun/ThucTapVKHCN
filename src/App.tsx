import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
import { RouterLinks } from "./const/RouterLinks";
// import { AppContext, socket } from "./context/appContext";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Layout";
import NotFound from "./pages/not-found/NotFound";
import MTA1 from "./pages/mta-1";
import ErrorPage from "./pages/error-page/ErrorPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MTA2 from "./pages/mta-2";
import VKHQS1 from './pages/vkhqs-1';
import VKHQS2 from './pages/vkhqs-2';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          {/* <AppContext.Provider value={{socket}}> */}
          <div className="MainApp">
            <div className="ContentApp">
              <Routes>
                <Route path="*" element={<NotFound />}></Route>
                <Route
                  path={RouterLinks.LOGIN}
                  element={<Login />}
                  errorElement={<ErrorPage />}
                ></Route>
                <Route
                  path={RouterLinks.REGISTER}
                  element={<Register />}
                  errorElement={<ErrorPage />}
                ></Route>
                <Route
                  path={RouterLinks.HOME_PAGE}
                  element={<MainLayout />}
                  errorElement={<ErrorPage />}
                >
                  <Route
                    path={RouterLinks.MTA_1}
                    element={<MTA1 />}
                    errorElement={<ErrorPage />}
                  ></Route>
                  <Route
                    path={RouterLinks.MTA_2}
                    element={<MTA2 />}
                    errorElement={<ErrorPage />}
                  ></Route>
                  <Route
                    path={RouterLinks.VIENKHQS_1}
                    element={<VKHQS1 />}
                    errorElement={<ErrorPage />}
                  ></Route>
                  <Route
                    path={RouterLinks.VIENKHQS_2}
                    element={<VKHQS2 />}
                    errorElement={<ErrorPage />}
                  ></Route>
                  
                </Route>
              </Routes>
            </div>
          </div>
          {/* </AppContext.Provider> */}
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
