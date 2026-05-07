import { Controller } from "react-hook-form";
import { useHotelForm } from "../../../hooks/useHotelFrom";

export const HotelForm = () => {
  const { form, onSubmit } = useHotelForm();
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <Controller
          control={form.control}
          name="nombre"
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Nombre
              </label>
              <input
                {...field}
                id="nombre"
                type="text"
                placeholder="Nombre del hotel"
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

        <Controller
          control={form.control}
          name="ciudad"
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor="ciudad"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Ciudad
              </label>
              <input
                {...field}
                id="ciudad"
                type="text"
                placeholder="Ciudad"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Controller
            control={form.control}
            name="nit"
            render={({ field, fieldState }) => (
              <div>
                <label
                  htmlFor="nit"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  NIT
                </label>
                <input
                  {...field}
                  id="nit"
                  type="text"
                  placeholder="Nit del hotel"
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

          <Controller
            control={form.control}
            name="numero_habitaciones"
            render={({ field, fieldState }) => (
              <div>
                <label
                  htmlFor="numero_habitaciones"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Número de habitaciones
                </label>
                <input
                  {...field}
                  id="numero_habitaciones"
                  type="number"
                  placeholder="Número de habitaciones del hotel"
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
        </div>

        <Controller
          control={form.control}
          name="direccion"
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor="direccion"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Dirección
              </label>
              <input
                {...field}
                id="direccion"
                type="text"
                placeholder="Dirección del hotel"
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
          Guardar
        </button>
      </div>
    </form>
  );
};
