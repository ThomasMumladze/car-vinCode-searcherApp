import { useState, useEffect } from "react";
export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(
        localStorage.getItem("Themes") === "true"
    );

    useEffect(() => {
        localStorage.setItem("Themes", isDark.toString());
    }, [isDark]);

    const handleDarkMode = () => {
        setIsDark(!isDark);
    };

    const handleDarkModeOnKeyPress = (e: any) => {
        if (e.key === "F2") {
            setIsDark(!isDark);
        }
    };
    
    useEffect(() => {
        document.addEventListener("keyup", handleDarkModeOnKeyPress);

        return () =>
            document.removeEventListener("keyup", handleDarkModeOnKeyPress);
    }, [isDark]);

    return { isDark, setIsDark, handleDarkMode };
};
