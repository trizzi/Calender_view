import React, { useState, useEffect } from "react";

// dark and light objects hold CSS variables, example of usage is in ../../components/profile.css
const themes = {
    dark: {
        primary: "red",
        textColor: "white",
        backgroundColor: "#121212",
        headerBackgroundColor: "rgba(255,255,255,0.05)",
        icon: "white"
    },
    light: {
        primary: "blue",
        textColor: "black",
        backgroundColor: "white",
        headerBackgroundColor: "#f6f6f6",
        icon: "#121212"
    }
};

export const ThemeContext = React.createContext({
    themeName: "light",
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("light");
    const [theme, setTheme] = useState(themes[themeName]);

    // Set the default theme variables on load 
    useEffect(() => {
        setCSSVariables(theme);
    });

    const toggleTheme = () => {
        if (theme === themes.dark) {
            setTheme(themes.light);
            setThemeName("light");
        } else {
            setTheme(themes.dark);
            setThemeName("dark");
        }
    };

    // Select the style variables in the html document and set it to the selected theme object key value pair
    const setCSSVariables = theme => {
        for (const value in theme) {
            document.documentElement.style.setProperty(`--${value}`, theme[value]);
        }
    };

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}