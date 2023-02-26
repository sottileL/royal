/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Banner1 from '../../images/banner-1.webp'

import React, { Component } from 'react'
import Slider from 'react-slick'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography, styled } from '@mui/material'

import distance from '../../images/specs/distance.svg'
import oil from '../../images/specs/oil.svg'
import enigne from '../../images/specs/engine.svg'
import thunder from '../../images/specs/thunder.svg'

const TitleNavbar = styled(Typography)(() => ({
  fontSize: '1.1rem!important',
  fontWeight: 'bold !important',
  color: 'white',
  paddingLeft: 25,
  letterSpacing: '3px',
  textDecoration: 'none'
}))

const SpecsTypography = styled(Typography)(() => ({
  fontSize: '0.8rem',
  textAlign: 'center',
  color: 'white',
  textDecoration: 'none'
}))

class CustomSlide extends Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const {
      image, showSpecs,
      potencia1, potencia2,
      cilindrada1, cilindrada2,
      capacidad1, capacidad2,
      alturalibre1, alturalibre2
    } = this.props
    return (
      <Box sx={{ width: '100vw' }}>
        <img width="100%" height="auto" src={image}></img>
          {showSpecs && (
            <Box sx={{ backgroundColor: '#201c1c', paddingBottom: 6 }} >
              <TitleNavbar sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 1 }}>ESPECIFICACIONES</TitleNavbar>
              <Grid container direction="row" sx={{ pt: 3 }}>
                <Grid item md={3} display="flex" justifyContent="center">
                  <Box alignContent="center" md={3} xs={3}>
                    <img src={thunder} style={{ width: '80px', height: 'auto', backgroundColor: 'white', borderRadius: '50%', marginBottom: 10 }}/>
                    <SpecsTypography>
                        POTENCIA <br></br>
                        {potencia1}<br></br>
                        {potencia2}
                      </SpecsTypography>
                  </Box>
                </Grid>
                <Grid item md={3} display="flex" justifyContent="center">
                  <Box alignContent="center" md={3} xs={3}>
                    <img src={enigne} style={{ width: '80px', height: 'auto', backgroundColor: 'white', borderRadius: '50%', marginBottom: 10 }}/>
                    <SpecsTypography>
                        CILINDRADA <br></br>
                        {cilindrada1}<br></br>
                        {cilindrada2}
                      </SpecsTypography>
                  </Box>
                </Grid>
                <Grid item md={3} display="flex" justifyContent="center">
                  <Box alignContent="center" md={3} xs={3}>
                    <img src={oil} style={{ width: '80px', height: 'auto', backgroundColor: 'white', borderRadius: '50%', marginBottom: 10 }}/>
                    <SpecsTypography>
                        CAPACIDAD <br></br>
                        {capacidad1}<br></br>
                        {capacidad2}
                      </SpecsTypography>
                  </Box>
                </Grid>
                <Grid item md={3} display="flex" justifyContent="center">
                  <Box alignContent="center" md={3} xs={3}>
                    <img src={distance} style={{ width: '80px', height: 'auto', backgroundColor: 'white', borderRadius: '50%', marginBottom: 10 }}/>
                    <SpecsTypography>
                        ALTURA LIBRE <br></br>
                        {alturalibre1}<br></br>
                        {alturalibre2}
                      </SpecsTypography>
                  </Box>
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="center" sx={{ paddingTop: 4 }}>
                <Button sx={{ backgroundColor: 'white', color: 'black', padding: 1, fontSize: 10 }}>
                  DESCARGAR FICHA TÉCNICA
                </Button>
              </Box>
            </Box>
          )}
      </Box>
    )
  }
}

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <Slider {...settings}>
          <CustomSlide index={'1'} />
          <CustomSlide index={'2'} />
        </Slider>
      </div>
    )
  }
}
