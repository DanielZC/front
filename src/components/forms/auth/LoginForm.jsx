import { Controller } from "react-hook-form";
import { useLogin } from "../../../hooks/useLogin";
import { InputPassword } from "../../custom/inputs/InputPassword";

export const LoginForm = () => {
  const { form, onSubmit, isSubmitting } = useLogin();

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
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
              {fieldState.invalid ? (
                <small className="text-red-600">
                  {fieldState.error.message}
                </small>
              ) : (
                <small className="text-neutral-500">
                  la contaseña debe contener números, una letra mayúscula, una
                  letra minúscula y un simbolo. ejemplo: Contaseña1*
                </small>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 bg-neutral-800 dark:bg-neutral-700 text-white rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors font-medium"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};
