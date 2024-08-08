const Loading = ({
  classes = "",
}) => {
  return (
    <div
      className={`min-h-screen flex justify-center items-center w-full ${classes}`}
    >
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;
