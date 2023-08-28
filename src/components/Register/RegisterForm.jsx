import { useForm } from "react-hook-form";
import { FormErrorsMessage } from "../Cart/FormErrorsMessage";
import { BiShowAlt } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const RegisterForm = () => {
  const [shownPassword, setShownPassword] = useState(false);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const showPassword = () => {
    setShownPassword(!shownPassword);
  };

  const onSubmit = handleSubmit(() => {
    console.log("register");
    navigate('/login')
  });
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-center text-3xl font-bold text-white">Register</h3>
      <form
        noValidate
        className="mx-auto w-full sm:w-1/2 md:w-1/3"
        onSubmit={onSubmit}
      >
        <div className="group relative z-0 mb-6 w-full">
          <input
            type="email"
            name="floating_email"
            autoComplete="off"
            aria-autocomplete="off"
            id="email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            {...register("email", {
              required: {
                value: true,
                message: "El correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "El correo no es válido",
              },
            })}
          />
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Email
          </label>
          {errors.email && <FormErrorsMessage message={errors.email.message} />}
        </div>

        <div className="group relative z-0 mb-6 w-full">
          <input
            autoComplete="off"
            aria-autocomplete="off"
            type={shownPassword ? 'text' : 'password'}
            name="floating_password"
            id="password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            {...register("password", {
              required: {
                value: true,
                message: "Password es requerido",
              },
              minLength: {
                value: 8,
                message: "Debe contener al menos 8 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.@*]{8,20}$/,
                message: "La password no es válida",
              },
            })}
          />
          <label
            htmlFor="floating_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Password
          </label>
          <button
            className="absolute right-2 top-2 z-10 origin-[0] text-lg text-slate-400"
            type="button"
            onClick={showPassword}
          >
            <BiShowAlt />
          </button>
          {errors.password && (
            <FormErrorsMessage message={errors.password.message} />
          )}
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            autoComplete="off"
            aria-autocomplete="off"
            type={shownPassword ? 'text' : 'password'}
            name="floating_confirmar_password"
            id="confirmar_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            {...register("confirmarPassword", {
              required: {
                value: true,
                message: "Confirmar password es requerido",
              },
              minLength: {
                value: 8,
                message: "Debe contener al menos 8 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.@*]{8,20}$/,
                message: "La password no es válida",
              },
              validate: (value) => {
                return (
                  value === watch("password") || "Las password no coinciden"
                );
              },
            })}
          />
          <label
            htmlFor="floating_confirmar_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Confirmar Password
          </label>
          <button
            className="absolute right-2 top-2 z-10 origin-[0] text-lg text-slate-400"
            type="button"
            onClick={showPassword}
          >
            <BiShowAlt />
          </button>
          {errors.confirmarPassword && (
            <FormErrorsMessage message={errors.confirmarPassword.message} />
          )}
        </div>
        <button
          type="submit"
          className="w-full self-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 dark:bg-blue-600 sm:w-auto"
        >
          Register
        </button>
      </form>
    </div>
  );
};
