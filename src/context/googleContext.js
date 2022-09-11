import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import { api } from '../api'
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

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
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const googleToken = Cookies.get('googleToken')
    const saririCookie = JSON.parse(Cookies.get('saririCookie') ?? null)
    const googleSrc = 'https://accounts.google.com/gsi/client'

    const [userGoogle, setUserGoogle] = useState(googleToken ? jwt_decode(googleToken) : null)
    const [userSariri, setUserSariri] = useState(saririCookie ? saririCookie : null)
    const [showLogin, setShowLogin] = useState(!(googleToken && saririCookie) ? true : false)
    const navigate = useNavigate();

    const hideButton = () => {
        document.getElementById('signInDiv').hidden = true
    }

    useEffect(() => {
        if (!(userGoogle && userSariri)) {
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
                    setOpen(true)
                })
            }

            loadScript(googleSrc).then(() => {
                /*global google*/
                google.accounts.id.initialize({
                    client_id: "154712406455-1f9hr3obijb96tobdrej0sidpjm913nq.apps.googleusercontent.com",
                    callback: handleCallbackResponse
                })

                const signInDiv = document.getElementById('signInDiv')

                if (signInDiv && showLogin) {
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

    }, [navigate, userGoogle, userSariri, showLogin])

    return (
        <GoogleContext.Provider value={{ flag: showLogin, userGoogle, userSariri, setUserSariri, setUserGoogle, setShowLogin }}>
            {props.children}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"No se pudo registrar el usuario correcamente, vuelva a intentarlo."}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </GoogleContext.Provider>
    )
}

export default GoogleContextProvider
