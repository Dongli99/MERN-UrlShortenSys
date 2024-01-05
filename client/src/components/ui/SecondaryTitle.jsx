export const SecondaryTitle = ({ title, props }) => {
  return (
    <h3
      {...props}
      className={`text-center text-xl font-extrabold ${props?.className}`}
    >
      {title}
    </h3>
  );
};
