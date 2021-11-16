import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useHistory } from "react-router";

const Signup = ({ setUser }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras."),
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
        "Precisa de uma letra, um numero e um simbolo."
      ),
    confirmPass: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas nao coincidem."),
  });

  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data) => {
    setUser(data.name);
    history.push("/signed");
  };

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          placeholder="Seu nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          placeholder="Seu email"
          register={register}
          name="email"
          type="email"
          error={errors.email?.message}
        />
        <Input
          placeholder="Sua senha"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message}
        />
        <Input
          placeholder="Confirme sua senha"
          register={register}
          name="confirmPass"
          type="password"
          error={errors.confirmPass?.message}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signup;
