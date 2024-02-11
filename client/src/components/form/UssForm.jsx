import PropTypes from "prop-types";
import { PrimaryTitle } from "../ui/PrimaryTitle";

/**
 * UssForm component for rendering a form with a title.
 * @module UssForm
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title of the form.
 * @param {Function} props.onSubmit - Function to handle form submission.
 * @param {JSX.Element[]} props.children - The child elements of the form.
 * @param {string} [props.divStyle=""] - Additional styles for the form container.
 * @returns {JSX.Element} The JSX element representing the form.
 */
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
