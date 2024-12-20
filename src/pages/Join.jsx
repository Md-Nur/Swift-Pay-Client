import HeroForm from "../components/Form/HeroForm";
import imgLogin from "../assets/login.png";
import Input from "../components/Form/Input";
import { useForm } from "react-hook-form";
import RouteLabel from "../components/Form/RouteLabel";
import SubmitBtn from "../components/Form/SubmitBtn";
import Select from "../components/Form/Select";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // console.log(axios.defaults.baseURL);

  const onSubmit = async (data) => {
    toast.loading("Please wait...!", { autoClose: 10000 });
    try {
      const res = await axios.post("/users/register", data);
      if (res.data.success) {
        reset();
        toast.dismiss();
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res?.data?.data);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error?.response?.data?.data || error.message);
    }
  };

  return (
    <HeroForm title="Join" img={imgLogin}>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="name"
          type="text"
          error={errors.name}
          register={register}
        />
        <Input
          label="email"
          type="email"
          error={errors.email}
          register={register}
        />
        <Input
          label="Mobile Number"
          field="mobileNumber"
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
        <Select
          label="Account Type"
          type="text"
          options={["User", "Agent"]}
          field="type"
          register={register}
          error={errors.type}
        />
        <SubmitBtn title="Register" />
        <RouteLabel to="/login" label="Already Have an Account?" />
      </form>
    </HeroForm>
  );
};

export default Join;
