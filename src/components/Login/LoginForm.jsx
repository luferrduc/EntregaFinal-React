import { useForm } from "react-hook-form";
import { FormErrorsMessage } from "../Cart/FormErrorsMessage";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = handleSubmit(() => {
    console.log("Login form submit")
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">Correo</label>
      <input type="text" />
      <label htmlFor="">Password</label>
      <input type="password" />
    </form>
  );
};
