import {useNavigate} from "react-router-dom";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
}

export function Button({text, onClick, type = "button", variant = "primary"}: ButtonProps) {
    const baseStyle = "px-4 py-2 rounded text-white font-bold transition-all";
    const variantStyles = {
        primary: "bg-blue-600 hover:bg-blue-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
        danger: "bg-red-600 hover:bg-red-700",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]}`}
        >
            {text}
        </button>
    );
}

export function BackToShopBtn() {
    const navigate = useNavigate();
    return (
        <Button text="Back to Shop" onClick={() => navigate("/")} variant="primary"/>
    );
}