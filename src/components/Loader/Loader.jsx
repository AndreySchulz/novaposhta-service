import { CirclesWithBar } from "react-loader-spinner";


const Loader = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#de0b0b"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
};

export default Loader;
