import { NavLink } from "react-router";
import { useState } from "react";
import HamMenu from "./HamMenu";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navBarContent = [
        { to: "/products/category/classic", label: "Classic" },
        { to: "/products/category/dystopian", label: "Dystopian" },
        { to: "/products/category/adventure", label: "Adventure" },
        { to: "/products/category/youth", label: "Youth" },
    ];

    const NavBarContent = () => (
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-6">
            {navBarContent.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `my-3 md:my-0 text-lg transition-all duration-500 ease-in-out ${isActive ? " opacity-100" : "opacity-60"
                        } hover:opacity-100 hover:text-shadow-lg`
                    }
                >
                    {label}
                </NavLink>
            ))}
        </div>
    );

    return (
        <>
            {/* 桌面導覽 */}
            <div className="hidden md:flex justify-around mt-3 mb-8">
                <NavBarContent />
            </div>

            {/* 手機導覽 */}
            <div className="drawer md:hidden">
                <input id="drawer-toggle" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
                <HamMenu
                    id="drawer-toggle"
                    className="absolute transform -translate-y-37 translate-x-1 drawer-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="drawer-side z-9999">
                    <label htmlFor="drawer-toggle" className="drawer-overlay" onClick={() => setIsOpen(false)}></label>
                    <div className="menu bg-base-100 p-4 w-64 min-h-full drawer-bg">
                        <h2 className="text-gray-200 text-xl font-bold mb-10">CATEGORY</h2>
                        <NavBarContent />
                    </div>
                </div>
            </div>
        </>
    )
}