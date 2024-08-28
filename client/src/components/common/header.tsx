interface HeaderProps {
  url: string;
  children?: React.ReactNode;
}

const HeaderComponent: React.FC<HeaderProps> = ({ url, children }) => {
  return (
    <div className="flex flex-row justify-between items-center pl-4 pr-8 pt-3 pb-3 text-white bg-gray-800 ">
      <img src={url} alt="logo" className="bg-gray-800 w-48" />
      {children}
    </div>
  );
};

export default HeaderComponent;
