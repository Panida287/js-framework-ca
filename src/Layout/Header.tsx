import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-gray-900 text-gray-400">
                <nav className="navbar flex w-full">
                    <ul className="flex justify-between w-[50%] mx-auto my-10">
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) =>
                                         `transition-all ${
                                             isActive
                                                 ? "font-bold"
                                                 : "hover:font-bold"
                                         }`
                                     }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                                     className={({isActive}) =>
                                         `transition-all ${
                                             isActive
                                                 ? "font-bold"
                                                 : "hover:font-bold"
                                         }`
                                     }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart"
                                     className={({isActive}) =>
                                         `transition-all ${
                                             isActive
                                                 ? "font-bold"
                                                 : "hover:font-bold"
                                         }`
                                     }
                            >
                                Cart
                            </NavLink>
                            <span className="absolute bg-gray-400 rounded-full text-gray-900 px-1 -translate-y-1 text-xs ">
                            0
                        </span>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}