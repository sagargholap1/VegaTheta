import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/Logo.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" ">
      <nav className="h-[8rem] w-[90%] mx-auto  1200:hidden flex items-center justify-between gap-[1rem] ">
        <div className="w-[17.5rem] h-[6rem]">
          <Link href="/"><Image src={Logo} alt="logo" /></Link>
        </div>
        <div>
            <ul className="flex gap-[8rem]">
                <li className="font-6 text-subtitle-2 hover:text-[#007074] hover:scale-110"><Link href="/">Home</Link></li>
                <li className="font-6 text-subtitle-2 hover:text-[#007074] hover:scale-110"><Link href="/">About Us</Link></li>
                <li className="font-6 text-subtitle-2 hover:text-[#007074] hover:scale-110"><Link href="/">Careers</Link></li>
                <li className="font-6 text-subtitle-2 hover:text-[#007074] hover:scale-110"><Link href="/">VegaTheta</Link></li>
                <li className="font-6 text-subtitle-2 hover:text-[#007074] hover:scale-110"><Link href="/">Contact</Link></li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
