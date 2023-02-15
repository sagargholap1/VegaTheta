import Image from "next/image";
import React from "react";
import Logo from "../../../public/Logo.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" ">
      <nav className="h-[8rem] w-[90%] mx-auto wrapper-2 1450:wrapper 1200:hidden flex items-center justify-between gap-[1rem] ">
        <div className="w-[17.5rem] h-[6rem]">
          <Image src={Logo} alt="logo" />
        </div>
        <div>
            <ul className="flex gap-[8rem]">
                <li className="font-6 text-subtitle-2">Home</li>
                <li className="font-6 text-subtitle-2">About Us</li>
                <li className="font-6 text-subtitle-2">Careers</li>
                <li className="font-6 text-subtitle-2">VegaTheta</li>
                <li className="font-6 text-subtitle-2">Contact</li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
