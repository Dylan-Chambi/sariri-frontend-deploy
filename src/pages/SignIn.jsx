import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function SignIn (){

    const titleStyles = {
        fontSize: "4rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "inline",
        padding: "0.5rem",
        borderRadius: "0.5rem"

    }
    const subtitleStyles = {
        fontSize: "2.6rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        display: "inline",

        borderRadius: "0.5rem"

    }
    const divStyles = {
        boxShadow: '1px 2px 9px #black',
        margin: '2em 6em 0 6em',
        padding: '1em',
        borderRadius: '1em',
        backgroundColor: '#4285f4',
        paddingBottom: '2em',
        paddingTop: '1.5em',
        paddingLeft: '1em',
        textAlign : 'center',
        color: '#FFFFFF',
        fontSize : '40px',
        paddingRight: '1em'

    };
    const imgStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '15em',
        backgroundColor: '#4285f4',
        color: '#6157FE'
    };
    const buttonStyles = {
        borderRadius: '90px',
        backgroundColor: '#FFFFFF',
        paddingLeft: '1em',
        textAlign : 'center',
        color: '#6157FE',
        fontSize : '20px',
        paddingRight: '1em',
        marginTop: '2em'


    };
    const generaltextStyles = {
        fontSize: "1.3rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginBottom: "1rem",
        padding: "0.5rem",
        paddingTop: "2rem",
        borderRadius: "0.5rem"
    };
    const buttonLeftStyles = {
        borderRadius: '90px',
        backgroundColor: '#FFFFFF',
        paddingLeft: '1em',
        textAlign : 'center',
        color: '#6157FE',
        fontSize : '20px',
        paddingRight: '1em',
        marginTop: '2em'


    };


    return (
        <div className="SignIn">
            <div style={titleStyles}>Tu viaje comienza junto a Sariri!</div>
            <div style={divStyles}>
                <div style={subtitleStyles}>Ingresar</div>
                <div></div>
                {/*<button style={buttonStyles} onClick={() => {window.location.reload(false)}}>Intentar Google</button>*/}
                {/*Centrar este div de abajo*/}
                <div id='signInDiv'></div>
                <div>
                </div>
                <button style={buttonLeftStyles}><Link to = "/signup" style={buttonStyles}><b>Aun no tienes una cuenta?</b></Link></button>
                <button style={buttonLeftStyles}><Link to = "/home" style={buttonStyles}><b>Skip</b></Link></button>

            </div>
        </div>
    );
}
export default SignIn;

