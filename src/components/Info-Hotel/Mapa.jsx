import { Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import mapaxd from '../../assets/mapaxd.png';
import Box from '@mui/material/Box';
export default function Mapa() {
    return (
        <Box bgcolor={'#1c74d4'} marginLeft="10" sx={{
            padding: '15px',
            borderRadius: '10px',
            display: 'inline-block', mx: '10px', transform: 'scale(1)'
        }}
        component="span"
    >
        <Typography component="div" style={{ color: '#fff', fontWeight: 'bold', fontSize:30, textAlign:'center'}}>
            UBICACION
        </Typography>
        <img src={mapaxd} width={600} height={500} alt="mapaxd" sx={{
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '2rem',
        }} />
        </ Box>
    );
}

