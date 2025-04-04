// import {useState} from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import CartSummary from "./CartSummary";

function Header({ title, slogan }) {
    return (
        <header className="relative text-center flex flex-col items-center header">
            <Link to="/" className="relative text-center flex flex-xol items-center header">
                <h2 className="text-[#EBE1D2] pt-5 pb-2 text-3xl font-bold">
                    {title}
                </h2>
            </Link>

            <p className="text-[#EBE1D280] text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
                {slogan}
            </p>

            <div className="absolute right-0 top-8 grid grid-cols-1 gap-0 w-[4rem] md:w-[7rem]">
                <CartSummary />
            </div>

            <div className="flex mt-3 justify-center">
                <hr className="my-[25px] mx-auto w-[200px] border-0 border-t-[10px] border-[#777c76] opacity-100 rounded" />
            </div>

            <Navbar />
        </header>
    );
}

export default Header;