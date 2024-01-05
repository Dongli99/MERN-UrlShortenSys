import PropTypes from "prop-types";
import { PrimaryTitle } from "../ui/PrimaryTitle";

export const UssForm = ({ title, onSubmit, children, divStyle = "" }) => {
  return (
    <div
      className={`w-full space-y-8 border-solid border border-grey-800 
    p-8 rounded-xl shadow-lg ${divStyle}`}
    >
      <div>
        <PrimaryTitle title={title}></PrimaryTitle>
      </div>
      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

UssForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
