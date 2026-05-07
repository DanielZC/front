import { Controller } from "react-hook-form";
import { useHabitacionForm } from "../../../hooks/useHabitacionForm";
import { useHelper } from "../../../hooks/useHelper";
import { use, useEffect, useState } from "react";
import { includes } from "zod";
import { HotelContext } from "../../../context/HotelContext";
import { HabitacionContext } from "../../../context/HabitacionContext";

export const HabitacionForm = () => {
  const { handleList } = use(HotelContext);
  const { habitacion } = use(HabitacionContext);
  const { tipo_habitacion, acomodacion } = useHelper();
  const { form, onSubmit } = useHabitacionForm();
  const [hoteles, setHoteles] = useState([]);

  const getList = async () => {
    const response = await handleList();

    if (response.data["data"]) {
      setHoteles(response.data["data"]);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        {habitacion && (
          <Controller
            control={form.control}
            name="hotel_id"
            render={({ field, fieldState }) => (
              <div>
                <label
                  htmlFor="hotel_id"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Acomodación
                </label>
                <select
                  {...field}
                  id="hotel_id"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Seleccione un hotel</option>
                  {hoteles?.map((hotel) => (
                    <option key={hotel.id} value={hotel.id}>
                      {hotel.nombre}
                    </option>
                  ))}
                </select>
                {fieldState.invalid && (
                  <small className="text-red-600">
                    {fieldState.error.message}
                  </small>
                )}
              </div>
            )}
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Controller
            control={form.control}
            name="tipo_habitacion"
            render={({ field, fieldState }) => (
              <div>
                <label
                  htmlFor="tipo_habitacion"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Tipo de Habitación
                </label>
                <select
                  {...field}
                  id="tipo_habitacion"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Seleccione un tipo</option>
                  {tipo_habitacion?.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                {fieldState.invalid && (
                  <small className="text-red-600">
                    {fieldState.error.message}
                  </small>
                )}
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="acomodacion"
            render={({ field, fieldState }) => (
              <div>
                <label
                  htmlFor="acomodacion"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Acomodación
                </label>
                <select
                  {...field}
                  id="acomodacion"
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Seleccione una acomodación</option>
                  {acomodacion?.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                {fieldState.invalid && (
                  <small className="text-red-600">
                    {fieldState.error.message}
                  </small>
                )}
              </div>
            )}
          />
        </div>

        <Controller
          control={form.control}
          name="cantidad"
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor="cantidad"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Cantidad
              </label>
              <input
                {...field}
                id="cantidad"
                type="number"
                min="1"
                placeholder="1"
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 focus:border-transparent outline-none transition"
              />
              {fieldState.invalid && (
                <small className="text-red-600">
                  {fieldState.error.message}
                </small>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 bg-neutral-800 dark:bg-neutral-700 text-white rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors font-medium"
        >
          Guardar Habitación
        </button>
      </div>
    </form>
  );
};
