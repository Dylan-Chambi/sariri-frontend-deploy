import React, { createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import { api } from '../api'

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
    const [ userGoogle, setUserGoogle ] = useState({})
    const [ userSariri, setUserSariri ] = useState({})
    const [ showLogin, setShowLogin ] = useState(true)
    const [ hasAccount, setHasAccount ] = useState(false)
    const navigate = useNavigate();

    const handleSignOut = (event) => {
        setUserGoogle({})
        showButton()
        setShowLogin(true)
    }

    const showButton = () => {
        document.getElementById('signInDiv').hidden = false
    }
    const hideButton = () => {
        document.getElementById('signInDiv').hidden = true
    }


    const handleCallbackResponse = async (response) => {
        //console.log('Encoded JWT ID Token: '+ response.credential)
        var userObject = jwt_decode(response.credential)
        //console.log(userObject)
        setUserGoogle(userObject)
        const checkDB = await api.get('/user-exist/' + userObject.sub);

        const userHasAccount = checkDB.data.userExists;
        if(userHasAccount){
            const userData = await api.get('/user/' + userObject.sub);
            setUserSariri(userData.data[0])
            navigate('/home')
        }else{
            navigate('/sign-up')
        }
        setHasAccount(userHasAccount)
        setShowLogin(false)
        hideButton()
    }

    useEffect( () => {
        const googleSrc = 'https://accounts.google.com/gsi/client'

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
                { theme: 'outline', size: 'large'}
            )

                google.accounts.id.prompt()
            }

        }).catch((err) => {
            console.log("Error loading google script: " + err)
        });

        return () => {
            const scriptTag = document.querySelector(`script[src="${googleSrc}"]`)
            if (scriptTag) scriptTag.remove()
        }
    }, [])

    return (
        <GoogleContext.Provider value={{flag: showLogin, userGoogle, hasAccount, userSariri, setUserSariri}}>
            {props.children}
        </GoogleContext.Provider>
    )
}

export default GoogleContextProvider
