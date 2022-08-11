
import React, { createContext, useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'

export const GoogleContext = createContext()

const GoogleContextProvider = (props) => {
    const [ user, setUser ] = useState({})
    const [ flag, setFlag ] = useState(false)

    const handleSignOut = (event) => {
        setUser({})
        showButton()
        setFlag(false)
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
        setFlag(true)
        hideButton()
    }

    useEffect( () => {

            /*global google*/
            google.accounts.id.initialize({
                client_id: "299217830835-j9tjr805mhe6nrlrk51s1f9ptqscc1bf.apps.googleusercontent.com",
                callback: handleCallbackResponse
            })

            google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                { theme: 'outline', size: 'large'}
            )

            google.accounts.id.prompt()

    }, [])

    return (
        <GoogleContext.Provider value={{flag, user}}>
            {props.children}
        </GoogleContext.Provider>
    )
}

export default GoogleContextProvider
