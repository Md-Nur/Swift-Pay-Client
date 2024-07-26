import HeroForm from "../components/Form/HeroForm";
import imgLogin from "../assets/login.png";
import Input from "../components/Form/Input";
import { useForm } from "react-hook-form";
import RouteLabel from "../components/Form/RouteLabel";
import SubmitBtn from "../components/Form/SubmitBtn";
import Select from "../components/Form/Select";


const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <HeroForm title="Login" img={imgLogin}>
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
        <SubmitBtn title="Login" />
        <RouteLabel to="/login" label="Already Have an Account?" />
      </form>
    </HeroForm>
  );
};

export default Join;