import React, { useRef, useState } from 'react'
// import { styled } from '@mui/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { Box } from '@mui/system'

import LocationCityRounded from '@mui/icons-material/LocationOn'
import WhatsApp from '@mui/icons-material/WhatsApp'

// import Lightbox from 'react-image-lightbox'

// import getImages from '../../helpers/getImages'

import ContactForm from '../../components/ContactForm/Desktop'
import Header from '../../components/Header/Desktop'
import Marcas from '../../components/Marcas/Desktop'
import SimpleSlider from '../../components/SimpleSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Banner1 from '../../images/banner-1.webp'
import Logo from '../../images/logo.webp'
import Nosotros from '../../images/nosotros.webp'

import getImages from '../../helpers/getImages'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-image-lightbox/style.css'

const Desktop = () => {
  const [brand, setBrand] = useState(null)
  const images = getImages(brand)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  console.log(images)
  console.log(photoIndex)
  console.log(isOpen)
  console.log(setPhotoIndex)

  const inicioRef = useRef(null)
  const modelosRef = useRef(null)
  const nosotrosRef = useRef(null)
  const contactoRef = useRef(null)

  const handleClickMenu = section => {
    if (section === 'inicio') {
      inicioRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (section === 'modelos') {
      modelosRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (section === 'nosotros') {
      nosotrosRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (section === 'contacto') {
      contactoRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
        <Grid direction="column" width="100%" id="inicio" ref={inicioRef}>
            <Header handleClickMenu={handleClickMenu}/>
            <Grid item>
                    <div>
                        <img
                            src={Banner1}
                            alt="banner-1"
                            style={{
                              width: '100%', height: 'auto'
                            }}
                        />
                    </div>
            </Grid>
            <Grid item id="modelos" ref={modelosRef}>
                <Marcas setIsOpen={setIsOpen} setBrand={setBrand}/>
            </Grid>
                <SimpleSlider/>
            <Grid item
                sx={{
                  width: '100%', backgroundColor: '#222222', textAlign: 'center'
                }}
                id="nosotros"
                ref={nosotrosRef}
            >
                <img
                    src={Nosotros}
                    alt="nosotros"
                    style={{
                      height: 'auto', width: '60%', alignSelf: 'center'
                    }}
                />
            </Grid>
            <Grid item id="contacto" ref={contactoRef}>
                <ContactForm/>
                <Grid container mt={2} spacing={4} sx={{ backgroundColor: '#1a1a1a' }} justifyContent="center" alignItems="center" height={300}>
                    <Grid item xs={4} display="flex" justifyContent="center">
                        <img
                            src={Logo}
                            alt="imgNosotros"
                            style={{
                              width: '35%', height: 'auto', alignSelf: 'center', textAlign: 'center'
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography fontFamily="Arial" color= "white" fontWeight="bold" fontSize={15} textAlign="center">
                                CONTACTO:
                            </Typography>
                            <Typography fontFamily="Arial" color="white" fontSize={13}>
                                <Grid container direction="column" mt={2}>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item mr={1} pl={1}>
                                            <WhatsApp/>
                                        </Grid>
                                        <Grid item>
                                            Post venta: 3364023223
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item mr={1.4}>
                                            <WhatsApp/>
                                        </Grid>
                                        <Grid item>
                                            Ventas: 33640223222
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="center" alignItems="center">
                                        <Grid item mr={1} pl={2.5}>
                                        <LocationCityRounded/>
                                        </Grid>
                                        <Grid item>
                                            Av Presidente Peron 2020.<br/>
                                            San Nicolas de los Arroyos
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <a
                href="https://api.whatsapp.com/send?phone=+5493412129143&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20..."
                className="float"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-whatsapp my-float"/>
            </a>
        </Grid>
  )
}

export default Desktop
