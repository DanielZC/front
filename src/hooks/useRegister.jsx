import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useHelper } from "./useHelper";
import { toast } from "sonner";

export const useRegister = () => {
  const [registered, setRegistered] = useState(false);
  const { handleRegister } = use(UserContext);
  const { setErrorField } = useHelper();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      mode: "onSubmit",
      reValidateMode: "onSubmit",
    },
  });

  const onSubmit = async (data) => {
    const result = await handleRegister(data);

    if (result.status <= 201) {
      toast.success("Usuario registrado");
      setRegistered(true);
      form.reset();
      return;
    }
    const { errors } = result.data;
    setErrorField(form, errors);
    toast.warning("Ha ocurrido un error");
    return;
  };

  return {
    form,
    registered,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
