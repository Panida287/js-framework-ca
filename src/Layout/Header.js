import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (_jsx(_Fragment, { children: _jsx("header", { className: "bg-gray-900 text-gray-400", children: _jsx("nav", { className: "navbar flex w-full", children: _jsxs("ul", { className: "flex justify-between w-[50%] mx-auto my-10", children: [_jsx("li", { children: _jsx(NavLink, { to: "/", className: ({ isActive }) => `transition-all ${isActive
                                    ? "font-bold"
                                    : "hover:font-bold"}`, children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/contact", className: ({ isActive }) => `transition-all ${isActive
                                    ? "font-bold"
                                    : "hover:font-bold"}`, children: "Contact" }) }), _jsxs("li", { children: [_jsx(NavLink, { to: "/cart", className: ({ isActive }) => `transition-all ${isActive
                                        ? "font-bold"
                                        : "hover:font-bold"}`, children: "Cart" }), _jsx("span", { className: "absolute bg-gray-400 rounded-full text-gray-900 px-1 -translate-y-1 text-xs ", children: "0" })] })] }) }) }) }));
}
