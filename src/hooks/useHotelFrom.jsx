import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { use, useState } from "react";
import { useHelper } from "./useHelper";
import { toast } from "sonner";
import { hotelSchema } from "../schemas/resourceSchema";
import { HotelContext } from "../context/HotelContext";

export const useHotelForm = () => {
  const { handleStore, handleUpdate, hotel } = use(HotelContext);
  const { setErrorField } = useHelper();

  const form = useForm({
    resolver: zodResolver(hotelSchema),
    defaultValues: {
      nombre: hotel?.nombre || "",
      ciudad: hotel?.ciudad || "",
      nit: hotel?.nit || "",
      direccion: hotel?.direccion || "",
      numero_habitaciones: hotel?.numero_habitaciones?.toString() ?? "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data) => {
    let result;
    if (!hotel) {
      result = await handleStore(data);
    } else {
      result = await handleUpdate(data, hotel.id);
    }

    if (result.status <= 201) {
      toast.success("Registro completado");
      if (result.status == 201) form.reset();
      return;
    }
    const { errors } = result.data;
    setErrorField(form, errors);
    toast.warning("Ha ocurrido un error");
    return;
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
