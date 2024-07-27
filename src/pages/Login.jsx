import HeroForm from "../components/Form/HeroForm";
import imgLogin from "../assets/login.png";
import Input from "../components/Form/Input";
import { useForm } from "react-hook-form";
import RouteLabel from "../components/Form/RouteLabel";
import SubmitBtn from "../components/Form/SubmitBtn";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/users/login", data);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.data || error.message);
    }
  };

  return (
    <HeroForm title="Login" img={imgLogin}>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Mobile Number or Email"
          field="phoneEmail"
          type="text"
          error={errors.mobileNumber}
          register={register}
        />
        <Input
          label="pin"
          type="number"
          error={errors.pin}
          register={register}
          min={10000}
          max={99999}
        />
        <SubmitBtn title="Login" />
        <RouteLabel to="/join" label="Don't Have any Account?" />
      </form>
    </HeroForm>
  );
};

export default Login;
