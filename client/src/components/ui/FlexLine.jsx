export const FlexLine = ({ children, props = {} }) => {
  return (
    <div
      className={`flex items-center justify-between ${props.className || ""}`}
    >
      {children}
    </div>
  );
};
