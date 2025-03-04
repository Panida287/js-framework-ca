import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (_jsxs("footer", { className: "relative bottom-0 w-full bg-gray-900 text-gray-400 text-center py-6 mt-8", children: [_jsxs("div", { className: "flex justify-center space-x-8 mb-6", children: [_jsx("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(SiFacebook, { className: "w-6 h-6 hover:text-blue-500" }) }), _jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(SiInstagram, { className: "w-6 h-6 hover:text-pink-500" }) }), _jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(SiX, { className: "w-6 h-6 hover:text-blue-400" }) })] }), _jsxs("p", { className: "text-xs mt-2", children: ["\u00A9 ", currentYear, " Noroff Store"] })] }));
}
