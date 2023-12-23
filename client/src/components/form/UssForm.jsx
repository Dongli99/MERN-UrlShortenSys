import PropTypes from "prop-types";

export const UssForm = ({ title, onSubmit, children }) => {
  return (
    <div className="max-w-sm w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-2xl font-extrabold">{title}</h2>
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
