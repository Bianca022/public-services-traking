import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./assets/Views/MainPage";
import RegisterPubli from "./assets/Views/RegisterPubli";
import EditPubli from "./assets/Views/EditPubli";
import Login from "./assets/Views/Login";
import RegisterUser from "./assets/Views/registerUser";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" name="Home" element={<MainPage />} />
        <Route
          path="registerPubli"
          name="RegisterPubli"
          element={<RegisterPubli />}
        />
        <Route path="EditPubli" name="EditPubli" element={<EditPubli />} />
        <Route path="*" name="login" element={<Login />} />
        <Route
          path="registerUser"
          name="RegisterUser"
          element={<RegisterUser />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
