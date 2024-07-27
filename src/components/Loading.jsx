const Loading = ({ classes = "" }) => {
  return (
    <div className={classes}>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;
