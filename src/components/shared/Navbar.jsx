import { use } from "react";
import Button from "../custom/Button";
import { NavLink, useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { handleLogut } = use(UserContext);
  return (
    <nav className="w-full bg-neutral-800 dark:bg-black shadow-lg shadow-neutral-700/50">
      <div className="flex justify-center items-center gap-8 p-4">
        <NavLink to="/dashboard">
          <Button className="">Dashboard</Button>
        </NavLink>
        <NavLink
          onClick={async () => {
            await handleLogut();
            navigate("/");
          }}
        >
          <Button className="danger">Cerrar sesion</Button>
        </NavLink>
      </div>
    </nav>
  );
};
