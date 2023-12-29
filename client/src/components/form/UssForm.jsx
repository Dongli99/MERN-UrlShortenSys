import PropTypes from "prop-types";

export const UssForm = ({ title, onSubmit, children, divStyle = "" }) => {
  return (
    <div
      className={`w-full space-y-8 border-solid border border-grey-800 
    p-8 rounded-xl shadow-lg ${divStyle}`}
    >
      <div>
        <h2 className="text-center text-2xl font-extrabold">{title}</h2>
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
