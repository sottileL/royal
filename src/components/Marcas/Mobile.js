/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

import Grid from '@mui/material/Grid'

import PrimerMoto from '../../images/cuadros/1.webp'
import SegundaMoto from '../../images/cuadros/2.webp'
import TercerMoto from '../../images/cuadros/3.webp'
import CuartaMoto from '../../images/cuadros/4.webp'
import QuintaMoto from '../../images/cuadros/5.webp'
import SextaMoto from '../../images/cuadros/6.webp'

const MarcasMobile = ({ setIsOpen, setBrand }) => (
    <Grid container xs={12} p={3}>
        <Grid
            item
            xs={6}
            sx={{
              cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('classic'); setIsOpen(true) }}
        >
            <img
                src={PrimerMoto}
                alt="classic-350"
                style={{
                  width: '100%'
                }}
            />
        </Grid>
        <Grid
            item
            xs={6}
            sx={{
              cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('scram'); setIsOpen(true) }}
        >
            <img
                src={SegundaMoto}
                alt="scram-411"
                style={{
                  width: '100%'
                }}
            />
        </Grid>
        <Grid
            item
            xs={6}
            sx={{
              cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('himalayan'); setIsOpen(true) }}
        >
            <img
                src={TercerMoto}
                alt="himalayan"
                style={{
                  width: '100%'
                }}
            />
        </Grid>
        <Grid
            item
            xs={6}
            sx={{
              cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('interceptor'); setIsOpen(true) }}
        >
            <img
                src={CuartaMoto}
                alt="interceptor"
                style={{
                  width: '100%'
                }}
            />
        </Grid>
        <Grid
            item
            xs={6}
            sx={{
              cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('continental'); setIsOpen(true) }}
        >
            <img
                src={QuintaMoto}
                alt="continental"
                style={{
                  width: '100%'
                }}
            />
        </Grid>
        <Grid
            item
            xs={6}
            sx={{
              cursor: 'pointer'
            }}
            display="flex"
            justifyContent="center"
            onClick={() => { setBrand('meteor'); setIsOpen(true) }}
        >
            <img
                src={SextaMoto}
                alt="meteor"
                style={{
                  width: '100%'
                }}
            />
        </Grid>
    </Grid>
)

export default MarcasMobile
