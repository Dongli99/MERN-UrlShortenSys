export const PrimaryTitle = ({ title, props }) => {
  return (
    <h2
      {...props}
      className={`text-center text-2xl font-extrabold ${props?.className}`}
    >
      {title}
    </h2>
  );
};
