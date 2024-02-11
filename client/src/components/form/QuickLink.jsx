/**
 * QuickLink component for providing uniform links style in UI.
 * @module QuickLink
 * @param {object} props - The properties passed to the component.
 * @param {string} props.to - The URL the link should navigate to.
 * @param {string} props.text - The text to be displayed for the link.
 * @returns {JSX.Element} The JSX element representing the quick link.
 */

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
