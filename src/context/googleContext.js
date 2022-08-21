
import React, { createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'

export const GoogleContext = createContext()

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
    const [ user, setUser ] = useState({})
    const [ showLogin, setShowLogin ] = useState(true)

    const handleSignOut = (event) => {
        setUser({})
        showButton()
        setShowLogin(true)
    }

    const showButton = () => {
        document.getElementById('signInDiv').hidden = false
    }
    const hideButton = () => {
        document.getElementById('signInDiv').hidden = true
    }


    const handleCallbackResponse = (response) => {
        console.log('Encoded JWT ID Token: '+ response.credential)
        var userObject = jwt_decode(response.credential)
        console.log("Este es el userObject: "+userObject.name)
        setUser(userObject)
        setShowLogin(false)
        hideButton()
    }

    useEffect( () => {
        const googleSrc = 'https://accounts.google.com/gsi/client'

        loadScript(googleSrc).then(() => {
            /*global google*/
            google.accounts.id.initialize({
                client_id: "299217830835-j9tjr805mhe6nrlrk51s1f9ptqscc1bf.apps.googleusercontent.com",
                callback: handleCallbackResponse
            })

            const signInDiv = document.getElementById('signInDiv')

            if (signInDiv) {
                google.accounts.id.renderButton(
                    signInDiv,
                    { size: 'large', shape: 'rectangular', theme: 'filled_blue', text: 'signin'}
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
        <GoogleContext.Provider value={{flag: showLogin, user}}>
            {props.children}
        </GoogleContext.Provider>
    )
}

export default GoogleContextProvider
