import { useForm } from "react-hook-form";
import imgTransaction from "../assets/transaction.png";
import HeroForm from "../components/Form/HeroForm";
import SubmitBtn from "../components/Form/SubmitBtn";
import Input from "../components/Form/Input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import getCurrentUser from "../utils/getUser";

const Transaction = ({ title, url }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    toast.loading("Transaction ...");
    data.reqPhone = userData.mobileNumber;
    if (data.amount < 1) {
      toast.dismiss();
      toast.error("Amount must be greater than 0");
      return;
    }
    try {
      const res = await axios.post(`/transaction/${url}`, data);
      if (res.data.success) {
        toast.dismiss();
        toast.success(
          `${res.data.message} transaction id: ${res.data.data._id}`
        );
        const userData = await getCurrentUser();
        if (userData) dispatch(login({ userData }));
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
    <HeroForm title={title} img={imgTransaction}>
      <form
        autoComplete="off"
        className="card-body"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <SubmitBtn title={title} />
      </form>
    </HeroForm>
  );
};

export default Transaction;
