const Input = ({
  label,
  type,
  classes = "",
  register,
  required = true,
  field,
  error,
  ...props
}) => {
  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text capitalize">{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={label.toUpperCase()}
        className={`input input-bordered ${classes}`}
        {...register(field || label, { required })}
        {...props}
      />
      {error?.type === "required" && (
        <label className="label text-error justify-start gap-1">
          <span className="label-text text-error capitalize">{label}</span>
          is required
        </label>
      )}
    </div>
  );
};

export default Input;
