import React, { use, useEffect, useState } from "react";
import { Card } from "../components/custom/Card";
import { CardHeader } from "../components/custom/CardHeader";
import { CardBody } from "../components/custom/card/CardBody";
import { LoginForm } from "../components/forms/auth/LoginForm";
import { UserContext } from "../context/UserContext";
import { RegisterForm } from "../components/forms/auth/RegisterForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

export const Auth = () => {
  const { login, toggleForm } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <Card className="">
          <CardHeader className="py-2 px-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {login ? "Iniciar sesion" : "Registrar usuario"}
                </h3>
              </div>
              <div>
                <button
                  className="px-4 py-2 text-white cursor-pointer underline decoration-1"
                  onClick={toggleForm}
                >
                  {login ? "Registrarse" : "Iniciar sesion"}
                </button>
              </div>
            </div>
          </CardHeader>
          <CardBody className="p-2">
            {login ? <LoginForm /> : <RegisterForm toggleForm={toggleForm} />}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
