export const QuickLink = ({ to, text }) => {
  // Provide a quick link to help user to redirect to another page.
  return (
    <div className="text-sm">
      <a
        href={to}
        className="font-medium text-indigo-600 hover:text-indigo-500"
      >
        {text}
      </a>
    </div>
  );
};
