/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import PrimerMoto from '../../images/cuadros/1.webp'
import SegundaMoto from '../../images/cuadros/2.webp'
import TercerMoto from '../../images/cuadros/3.webp'
import CuartaMoto from '../../images/cuadros/4.webp'
import QuintaMoto from '../../images/cuadros/5.webp'
import SextaMoto from '../../images/cuadros/6.webp'

import Grid from '@mui/material/Grid'

const MarcasDesktop = ({ setIsOpen, setBrand }) => (
    <Grid container md={12} padding={10} justifyContent="center">
        <Grid container md={9} direction="row">
            <Grid item xs={4} sx={{ cursor: 'pointer' }} onClick={() => { setBrand('classic'); setIsOpen(true) }} >
                <img
                    src={PrimerMoto}
                    alt="classic-350"
                    style={{
                      width: '100%', alignSelf: 'center'
                    }}
                />
            </Grid>
            <Grid item xs={4} sx={{ cursor: 'pointer' }} onClick={() => { setBrand('scram'); setIsOpen(true) }} >
                <img
                    src={SegundaMoto}
                    alt="scram-411"
                    style={{
                      width: '100%', alignSelf: 'center'
                    }}
                />
                </Grid>
                <Grid item xs={4} sx={{ cursor: 'pointer' }} onClick={() => { setBrand('himalayan'); setIsOpen(true) }} >
                <img
                    src={TercerMoto}
                    alt="himalayan"
                    style={{
                      width: '100%', alignSelf: 'center'
                    }}
                />
                </Grid>
        </Grid>
        <Grid container md={9} sx={{ marginTop: -1 }}>
            <Grid
                item xs={4} sx={{ cursor: 'pointer' }} onClick={() => { setBrand('interceptor'); setIsOpen(true) }}>
                <img
                    src={CuartaMoto}
                    alt="interceptor"
                    style={{
                      width: '100%', alignSelf: 'center'
                    }}
                />
            </Grid>
            <Grid item xs={4} sx={{ cursor: 'pointer' }} onClick={() => { setBrand('continental'); setIsOpen(true) }}>
                <img
                    src={QuintaMoto}
                    alt="continental"
                    style={{
                      width: '100%', alignSelf: 'center'
                    }}
                />
            </Grid>
            <Grid item xs={4} sx={{ cursor: 'pointer' }} onClick={() => { setBrand('meteor'); setIsOpen(true) }}>
                <img
                    src={SextaMoto}
                    alt="meteor"
                    style={{
                      width: '100%', alignSelf: 'center'
                    }}
                />
            </Grid>
        </Grid>
    </Grid>

)

export default MarcasDesktop
