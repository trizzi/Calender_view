import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider'
import './profile.css'

export default function Settings() {
    const { themeName, toggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <button className="theme-button" onClick={toggleTheme} >{themeName}</button>
        </div>
    )
}
