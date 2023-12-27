import { TextLineInput } from "../../components/form/TextLineInput";

export const OriginalUrlInput = ({ originalUrl, setOriginalUrl }) => {
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
