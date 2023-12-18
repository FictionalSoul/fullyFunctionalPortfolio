import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {


    const preferDarkQuery = "(prefer-color-scheme: dark)";
    // It is a Css media features which is used to detect wheter the user has opted/requested dark or light color theme

    const [mode, setMode] = useState("");
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme"); // storing the preferance in local storage

        const handleChange = () => {
            // We're using if-else because when the first time user comes on our site it'll not contain any local storage value i.e 
            //userPref === false so it'll go to upper else
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light ";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }
        handleChange();

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change",handleChange)
    },[])

    // This useEffect will store the value in local storage
    useEffect(()=> {
        if(mode === "dark"){
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        }if(mode === "light"){
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
    },[mode])

    return (
        [mode,setMode]
    )
}

export default useThemeSwitcher;