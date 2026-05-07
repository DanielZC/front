import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { use } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useHelper } from "./useHelper";

export const useLogin = () => {
  const { handleLogin } = use(UserContext);
  const { setErrorField } = useHelper();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      mode: "onSubmit",
      reValidateMode: "onSubmit",
    },
  });

  const onSubmit = async (data) => {
    const result = await handleLogin(data);

    if (result.status == 200) {
      const { user, token } = result.data;
      localStorage.setItem("token", token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      form.reset();
      navigate("/dashboard");
      return;
    }
    const { errors } = result.data;
    setErrorField(form, errors);
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
  };
};
