import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./assets/Views/MainPage";
import RegisterPubli from "./assets/Views/RegisterPubli";
import EditPubli from "./assets/Views/EditPubli";
import Login from "./assets/Views/Login";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" name="Home" element={<MainPage />} />
        <Route
          path="registerPubli"
          name="RegisterPubli"
          element={<RegisterPubli />}
        />
        <Route path="EditPubli" name="EditPubli" element={<EditPubli />} />
        <Route path="login" name="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
