import { ImSpinner2 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-4xl mt-5 animate-spin"><ImSpinner2 /></span>
    </div>
  );
};

export default Spinner;
