import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter";

const GuestLayout = () => {
  return (
    <div>
      <TheNavbar />
      <Outlet />
      <TheFooter />
    </div>
  );
};

export default GuestLayout;
