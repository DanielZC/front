import { Controller } from "react-hook-form";
import { InputPassword } from "../../custom/inputs/InputPassword";
import { useRegister } from "../../../hooks/useRegister";
import { useEffect } from "react";

export const RegisterForm = ({ toggleForm }) => {
  const { form, onSubmit, registered } = useRegister();

  useEffect(() => {
    if (registered) {
      toggleForm();
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Nombre
              </label>
              <input
                {...field}
                id="name"
                type="text"
                placeholder="Juan Pérez"
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
          name="email"
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Correo electrónico
              </label>
              <input
                {...field}
                id="email"
                type="email"
                placeholder="usuario@ejemplo.com"
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
            name="password"
            render={({ field, fieldState }) => (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Contraseña
                </label>
                <InputPassword field={field} />
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
            name="password_confirmation"
            render={({ field, fieldState }) => (
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Confirmar contraseña
                </label>
                <InputPassword field={field} />
                {fieldState.invalid && (
                  <small className="text-red-600">
                    {fieldState.error.message}
                  </small>
                )}
              </div>
            )}
          />
        </div>

        {form.formState.errors.password &&
          !form.formState.errors.password_confirmation && (
            <small className="text-neutral-500 -mt-2 block">
              La contraseña debe contener números, una letra mayúscula, una
              letra minúscula y un símbolo. Ejemplo: Contraseña1*
            </small>
          )}

        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 bg-neutral-800 dark:bg-neutral-700 text-white rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors font-medium"
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};
