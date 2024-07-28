import { useForm } from "react-hook-form";
import imgSendMoney from "../assets/login.png";
import HeroForm from "../components/Form/HeroForm";
import SubmitBtn from "../components/Form/SubmitBtn";
import Input from "../components/Form/Input";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SendMoney = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const onSubmit = async (data) => {
    toast.loading("Transaction ...");
    data.reqPhone = userData.mobileNumber;
    try {
      const res = await axios.post("/transaction/send-money", data);
      if (res.data.success) {
        toast.dismiss();
        toast.success(
          `${res.data.message} transaction id: ${res.data.data._id}`
        );

        navigate("/");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(
        error?.response?.data?.data || error?.message || "Something went wrong"
      );
    } finally {
      reset();
    }
  };

  return (
    <HeroForm title="Send Money" img={imgSendMoney}>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Sender Mobile Number"
          field="resPhone"
          type="text"
          error={errors.phone}
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
        <Input
          label="amount"
          type="number"
          error={errors.amount}
          register={register}
        />

        <SubmitBtn title="Send Money" />
      </form>
    </HeroForm>
  );
};

export default SendMoney;
