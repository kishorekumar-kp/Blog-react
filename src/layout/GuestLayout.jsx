import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const GuestLayout = () => {
  return (
    <div>
      <TheNavbar />

        <Outlet/>
      
    </div>
  );
};

export default GuestLayout;
