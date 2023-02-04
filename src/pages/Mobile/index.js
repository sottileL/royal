import React, { useRef, useState } from 'react'
import { scrollIntoView } from 'seamless-scroll-polyfill'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { Box } from '@mui/system'

import LocationCityRounded from '@mui/icons-material/LocationOn'
import WhatsApp from '@mui/icons-material/WhatsApp'

import Lightbox from 'react-image-lightbox'

import getImages from '../../helpers/getImages'

import ContactForm from '../../components/ContactForm/Mobile'
import Header from '../../components/Header/Mobile'
import Marcas from '../../components/Marcas/Mobile'

import Banner1 from '../../images/banner-mobile-1.webp'
import Nosotros from '../../images/nosotros.webp'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-image-lightbox/style.css'
import './style.css'

const Mobile = () => {
  const [brand, setBrand] = useState(null)
  const images = getImages(brand)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const inicioRef = useRef(null)
  const modelosRef = useRef(null)
  const nosotrosRef = useRef(null)
  const contactoRef = useRef(null)

  const handleClickMenu = section => {
    if (section === 'inicio') {
      scrollIntoView(inicioRef.current, {
        behavior: 'smooth', block: 'start', inline: 'center'
      })
    }

    if (section === 'modelos') {
      scrollIntoView(modelosRef.current, {
        behavior: 'smooth', block: 'start', inline: 'center'
      })
    }

    if (section === 'nosotros') {
      scrollIntoView(nosotrosRef.current, {
        behavior: 'smooth', block: 'start', inline: 'center'
      })
    }

    if (section === 'contacto') {
      scrollIntoView(contactoRef.current, {
        behavior: 'smooth', block: 'start', inline: 'center'
      })
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
            <Grid item id="marcas" ref={modelosRef}>
                <Marcas setIsOpen={setIsOpen} setBrand={setBrand}/>
            </Grid>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => { setIsOpen(false); setPhotoIndex(0); setBrand(null) }}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
            <Grid
                item
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
                      height: 'auto', width: '100%', alignSelf: 'center'
                    }}
                />
            </Grid>
            <Grid item id="contacto" ref={contactoRef}>
                <ContactForm/>
                <Grid
                    container
                    direction="column"
                    mt={2}
                    sx={{ backgroundColor: '#1a1a1a' }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item mt={2} xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography fontFamily="Arial" color="white" fontWeight="bold" fontSize={15} textAlign="center">
                                CONTACTO:
                            </Typography>
                            <Typography fontFamily="Arial" color="white" fontSize={13}>
                                <Grid container direction="column" mt={1} mb={2}>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid item mr={1}>
                                            <WhatsApp/>
                                        </Grid>
                                        <Grid item>
                                            Post venta: 3364023223
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid item mr={1}>
                                            <WhatsApp/>
                                        </Grid>
                                        <Grid item>
                                            Ventas: 3364023222
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid item mr={1}>
                                            <LocationCityRounded/>
                                        </Grid>
                                        <Grid item>
                                            Av. Presidente Peron 2020, <br></br>
                                            San Nicolas de los Arroyos.
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

export default Mobile
