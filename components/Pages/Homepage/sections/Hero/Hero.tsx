import Image from "next/image";
import React from "react";
import heroImage from "../../../../../public/hero.png";
import googleIcon from "../../../../../public/Google.png";
import GitIcon from "../../../../../public/GitHub.png";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className=" wrapper  ">
      <div
        className="flex flex-col items-center justify-center gap-[5rem] h-[calc(100vh-8rem)] max-h-[90rem] 1150:h-[90rem] 1150:max-h-max 450:!h-[80rem] overflow-hidden 1100:h-[100%] 1100:py-[5rem] "
        id="hero"
      >
        <div className="flex w-full h-full">
          {/* left */}
          <div className="basis-1/2 items-center justify-center flex  ">
            <div className="w-full h-full relative">
              <Image src={heroImage} alt="Hero" fill />
            </div>
          </div>
          {/* right */}
          <div className="basis-1/2  flex-col gap-[2rem] items-center justify-center flex  ">
            <h1 className="text-[3rem] mb-[4rem]">Welcome to VegaTheta</h1>
            <form
              action=""
              className="bg-[#E3E3E3] flex flex-col p-[4rem] px-[4rem] gap-[2rem] w-[75%] rounded-[2rem] shadow-[25px_20px_40px_5px_rgba(0,0,0,0.3)]"
            >
              <div className="flex flex-col gap-[1rem]">
                <label htmlFor="Email" className="text-[#4D5959]">
                  Email
                </label>
                <input
                  type="Email"
                  placeholder="Enter your Email here"
                  className=" h-[4rem] outline-none  rounded-[.3rem] px-[2rem]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
              <label htmlFor="Email" className="text-[#4D5959]">
                Password
              </label>
              <input
                type="Email"
                placeholder="Enter your Password here"
                className=" h-[4rem] outline-none rounded-[.3rem] px-[2rem]"
              /></div>
              <div className="flex justify-between">
                <div className="flex gap-[1rem]">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-[#007074]"
                  />
                  <label htmlFor="" className="text-[#737777] font-6">
                    Remember Me
                  </label>
                </div>
                <div className="text-[#737777] font-6 underline hover:text-[#007074]">
                  <Link href="/">Forgot Password?</Link>
                </div>
              </div>
              <button className="bg-[#007074] text-white p-[1rem] w-[10rem] rounded-[1rem]">
                Sign in
              </button>
              <div className="text-subtitle-2 font-3">Don’t have an account? <span className="text-[#007074] font-5 hover:underline underline-offset-4 "><Link href="/">Sign Up Here</Link></span></div>
            </form>
            <div className="font-6">OR</div>

            <div className="flex gap-[2rem]">
              <button className="flex p-[1rem] items-center justify-center gap-[1rem] border-[2px]">
                <div className="w-[2rem] h-[2rem]">
                  <Image src={googleIcon} alt="icon" />
                </div>
                <span className="text-[1.2rem] text-[#043133] font-5">
                  Sign Up with Google
                </span>
              </button>
              <button className="flex p-[1rem] items-center justify-center gap-[1rem] border-[2px]">
                <div className="w-[2rem] h-[2rem]">
                  <Image src={GitIcon} alt="icon" />
                </div>
                <span className="text-[1.2rem] text-[#043133] font-5">
                  Sign Up with Github
                </span>
              </button>
            </div>

            <div className=" text-[1.2rem] font-6">
              2023 @ All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
