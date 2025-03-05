import {NavLink} from "react-router-dom";
import {useCartStore} from "../store/cartStore";

export default function Header() {
    const {cart} = useCartStore();
    const cartCount = cart.length;
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
                            <NavLink to="/checkout"
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
                            {cartCount > 0 && (
                                <span
                                    className="absolute flex items-center justify-center bg-gray-400 rounded-full text-gray-900 h-4 w-4 -translate-y-7 translate-x-8 text-xs">
                                {cartCount}
                                </span>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}