import Avatar from "../../assets/avatar.svg";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-8 bg-blue sticky">
      <div className="font-roboto  text-xl text-white cursor-pointer">
        Real Estate Matching System
      </div>

      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div>
            <img src={Avatar} alt="avatar" className="w-[50px] h-[50px]" />
          </div>

          <span className="text-lightGray">Rainy</span>
        </div>

        <div className="font-bold cursor-pointer transition-colors duration-300 hover:text-red-500">
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Header;
