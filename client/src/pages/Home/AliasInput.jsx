import { TextLineInput } from "../../components/form/TextLineInput";

/**
 * Alias input component.
 * @param {Object} props - Component props.
 * @param {string} props.alias - Current alias value.
 * @param {Function} props.setAlias - Function to set the alias value.
 * @returns {JSX.Element} - Rendered AliasInput component.
 */
export const AliasInput = ({ alias, setAlias }) => {
  /**
   * Event handler for alias input change.
   * @param {Object} e - Event object.
   */
  return (
    <TextLineInput
      lblProps={{ text: "Alias" }}
      fullWidth={false}
      inpProps={{
        id: "alias",
        type: "text",
        value: alias,
        onChange: (e) => setAlias(e.target.value),
        placeholder: "at least 4 chars",
      }}
    />
  );
};
