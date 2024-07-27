const Select = ({
  label,
  register,
  required,
  options,
  selected,
  field,
  error,
}) => {
  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text capitalize">{label}</span>
        </label>
      )}

      <select
        className="select select-bordered w-full max-w-xs"
        {...register(field || label, { required })}
      >
        <option defaultValue={selected} disabled={!selected}>
          {selected || label.toUpperCase()}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error?.type === "required" && (
        <label className="label text-error justify-start">
          <span className="label-text text-error capitalize">{label}</span>
          is required
        </label>
      )}
    </div>
  );
};

export default Select;
