
import React from 'react';

interface buttonProps {
    children: React.ReactNode;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
}
export const Button: React.FC<buttonProps> = ({ children, onClick, type }) => {
    return (
        <button
        onClick={onClick}
        type={type}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        {children}
        </button>
    );
};