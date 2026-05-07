import { zodResolver } from "@hookform/resolvers/zod";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { habitacionSchema } from "../schemas/resourceSchema";
import { useHelper } from "./useHelper";
import { HotelContext } from "../context/HotelContext";
import { useParams } from "react-router";
import { HabitacionContext } from "../context/HabitacionContext";
import { toast } from "sonner";

export const useHabitacionForm = () => {
  const params = useParams();
  const { handleStore, handleUpdate, habitacion } = use(HabitacionContext);
  const { setErrorField } = useHelper();
  const form = useForm({
    resolver: zodResolver(habitacionSchema),
    defaultValues: {
      hotel_id: params.id,
      tipo_habitacion: habitacion?.tipo_habitacion || "",
      acomodacion: habitacion?.acomodacion || "",
      cantidad: habitacion?.cantidad?.toString() ?? "",
    },
  });

  const onSubmit = async (data) => {
    let result;
    if (!habitacion) {
      data["hotel_id"] = params.id;
      result = await handleStore(data);
    } else {
      result = await handleUpdate(data, habitacion.id);
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
