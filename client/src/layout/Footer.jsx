import LogoGroup from "../components/ui/icons/LogoGroup";

export const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">
            &copy; 2023 Dongli Liu. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <LogoGroup />
        </div>
      </div>
    </footer>
  );
};
