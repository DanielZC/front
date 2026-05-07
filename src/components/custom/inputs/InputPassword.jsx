import { Eye, EyeOff, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export const InputPassword = ({ field }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        {...field}
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        className="w-full px-4 py-2 pr-12 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 focus:border-transparent outline-none transition"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
      >
        {showPassword ? <Eye /> : <EyeOffIcon />}
      </button>
    </div>
  );
};
