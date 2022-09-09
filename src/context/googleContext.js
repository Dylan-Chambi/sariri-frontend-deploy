import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import { api } from '../api'
import Cookies from 'js-cookie';

export const GoogleContext = createContext()

// Se carga el script de google como promesa para que la variable "google" se cargue antes de usarla
const loadScript = (src) =>
    new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve()
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    })


const GoogleContextProvider = (props) => {
    const [userGoogle, setUserGoogle] = useState(null)
    const [userSariri, setUserSariri] = useState(null)
    const [showLogin, setShowLogin] = useState(true)
    const navigate = useNavigate();

    // const handleSignOut = (event) => {
    //     setUserGoogle({})
    //     showButton()
    //     setShowLogin(true)
    // }

    // const showButton = () => {
    //     document.getElementById('signInDiv').hidden = false
    // }
    const hideButton = () => {
        document.getElementById('signInDiv').hidden = true
    }

    useEffect(() => {
        const googleToken = Cookies.get('googleToken')
        const saririCookie = JSON.parse(Cookies.get('saririCookie') ?? null)
        
        const googleSrc = 'https://accounts.google.com/gsi/client'

        if (googleToken && saririCookie) {
            const decoded = jwt_decode(googleToken)
            setUserGoogle(decoded)
            setUserSariri(saririCookie)
            setShowLogin(false)
        } else {

            const handleCallbackResponse = async (response) => {
                var userObject = jwt_decode(response.credential)
                setUserGoogle(userObject)

                await api.get('/user-exist/' + userObject.sub).then(async (responseBack) => {
                    const userHasAccount = responseBack.data.userExists;
                    if (userHasAccount) {
                        const userData = await api.get('/user/' + userObject.sub);
                        setUserSariri(userData.data[0])
                        Cookies.set('googleToken', response.credential)
                        Cookies.set('saririCookie', JSON.stringify(userData.data[0]))
                        navigate('/home')
                    } else {
                        navigate('/sign-up')
                    }
                    setShowLogin(false)
                    hideButton()
                }).catch(() => {
                    alert("Error checking in database")
                })
            }

            loadScript(googleSrc).then(() => {
                /*global google*/
                google.accounts.id.initialize({
                    client_id: "154712406455-1f9hr3obijb96tobdrej0sidpjm913nq.apps.googleusercontent.com",
                    callback: handleCallbackResponse
                })

                const signInDiv = document.getElementById('signInDiv')

                if (signInDiv) {
                    google.accounts.id.renderButton(
                        signInDiv,
                        { theme: 'outline', size: 'large' }
                    )

                    google.accounts.id.prompt()
                }

            }).catch((err) => {
                console.log("Error loading google script: " + err)
            });

        }

        return () => {
            const scriptTag = document.querySelector(`script[src="${googleSrc}"]`)
            if (scriptTag) scriptTag.remove()
        }

    }, [navigate])

    return (
        <GoogleContext.Provider value={{ flag: showLogin, userGoogle, userSariri, setUserSariri }}>
            {props.children}
        </GoogleContext.Provider>
    )
}

export default GoogleContextProvider
