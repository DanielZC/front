import "./app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/app.route";
import { UserContextProvider } from "./context/UserContext";
import { Toaster } from "sonner";
import { HotelContextProvider } from "./context/HotelContext";
import { HabitacionContextProvider } from "./context/HabitacionContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <HotelContextProvider>
        <HabitacionContextProvider>
          <Toaster richColors={true} />
          <RouterProvider router={router} />
        </HabitacionContextProvider>
      </HotelContextProvider>
    </UserContextProvider>
  </StrictMode>,
);
