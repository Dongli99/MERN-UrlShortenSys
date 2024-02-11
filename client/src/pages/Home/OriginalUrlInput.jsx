import { TextLineInput } from "../../components/form/TextLineInput";

/**
 * Original URL input component.
 * @param {Object} props - Component props.
 * @param {string} props.originalUrl - Current original URL value.
 * @param {Function} props.setOriginalUrl - Function to set the original URL value.
 * @returns {JSX.Element} - Rendered OriginalUrlInput component.
 */
export const OriginalUrlInput = ({ originalUrl, setOriginalUrl }) => {
  /**
   * Event handler for original URL input change.
   * @param {Object} e - Event object.
   */
  return (
    <TextLineInput
      lblProps={{ text: "Original URL" }}
      inpProps={{
        id: "original-url",
        type: "text",
        required: true,
        value: originalUrl,
        onChange: (e) => setOriginalUrl(e.target.value),
        placeholder: "Enter Long URL",
      }}
    />
  );
};
