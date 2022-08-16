
import React, { createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'

export const GoogleContext = createContext()

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

            /*global google*/
        
            async function fetchGoogle() {

            window.google.accounts.id.initialize({
                client_id: "299217830835-j9tjr805mhe6nrlrk51s1f9ptqscc1bf.apps.googleusercontent.com",
                callback: handleCallbackResponse
            })


            window.google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                { size: 'large', shape: 'rectangular', theme: 'filled_blue', text: 'signin'}
            )

            window.google.accounts.id.prompt()
        }

        fetchGoogle()

    }, [])

    return (
        <GoogleContext.Provider value={{flag: showLogin, user}}>
            {props.children}
        </GoogleContext.Provider>
    )
}

export default GoogleContextProvider
