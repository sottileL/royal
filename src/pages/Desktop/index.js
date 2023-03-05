/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react'

import { Carousel } from 'react-responsive-carousel'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { styled, makeStyles } from '@mui/styles'

import LocationCityRounded from '@mui/icons-material/LocationOn'
import WhatsApp from '@mui/icons-material/WhatsApp'

import NewCarousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'

import ContactForm from '../../components/ContactForm/Desktop'
import Header from '../../components/Header/Desktop'
import Marcas from '../../components/Marcas/Desktop'

import Banner1 from '../../images/banner-1.webp'
import Banner2 from '../../images/banner-2.webp'
import Logo from '../../images/logo.webp'
import Nosotros from '../../images/nosotros.webp'

import getImages from '../../helpers/getImages'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-image-lightbox/style.css'

import distance from '../../images/specs/distance.svg'
import oil from '../../images/specs/oil.svg'
import enigne from '../../images/specs/engine.svg'
import thunder from '../../images/specs/thunder.svg'
import system from '../../images/specs/system.svg'
import lights from '../../images/specs/lights.svg'

const TitleNavbar = styled(Typography)(() => ({
    fontSize: '1rem!important',
    fontWeight: 'bold !important',
    color: 'white',
    paddingLeft: 25,
    letterSpacing: '3px',
    textDecoration: 'none'
}))

const SpecsTypography = styled(Typography)(() => ({
    fontSize: '0.8rem !important',
    textAlign: 'center',
    color: 'white',
    textDecoration: 'none'
}))

const modalStyle = {
    position: 'absolute',
    left: 0,
    bgcolor: 'background.paper'
}

const Desktop = () => {
    const [brand, setBrand] = useState(null)
    const images = getImages(brand)
    const [isOpen, setIsOpen] = useState(false)

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
            <Header handleClickMenu={handleClickMenu} />
            <Grid item>
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div>
                        <img
                            src={Banner1}
                            alt="banner-1"
                            style={{
                                width: '100%', height: 'auto'
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src={Banner2}
                            alt="banner-2"
                            style={{
                                width: '100%', height: 'auto'
                            }}
                        />
                    </div>
                </Carousel>
            </Grid>
            <Grid item id="modelos" ref={modelosRef}>
                <Marcas setIsOpen={setIsOpen} setBrand={setBrand} />
            </Grid>
            {isOpen && (
                <Modal open={isOpen} sx={{ margin: 'auto' }} onClose={() => setIsOpen(false)}>
                    <>
                        <NewCarousel className='distanceFromTop'
                            style={{ ...modalStyle, width: '100vw', height: '90vh', backgroundColor: '#201c1c' }}
                            hasTransition={true}
                            hasMediaButton={false}
                            hasSizeButton={false}
                            hasIndexBoard={false}
                            hasCaptions={false}
                            hasThumbnails={false}
                            isAutoPlaying={true}
                            autoPlayInterval={100}
                            isLoop={true}
                            transitionSpeed={1}
                        >
                            {images.map((item) => (
                                // eslint-disable-next-line react/jsx-key
                                <Box sx={{ backgroundColor: '#201c1c', paddingBottom: 8 }}>
                                    <Box
                                        component="img"
                                        sx={{ height: '50vh', width: '100vw' }}
                                        src={item.image}
                                    />
                                    <TitleNavbar sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>ESPECIFICACIONES</TitleNavbar>
                                    <Grid container direction="row" justifyContent="space-evenly" sx={{ pt: 3 }}>
                                        <Grid item md={2} display="flex" justifyContent="center">
                                            <Box sx={{ textAlign: 'center' }}>
                                                <img src={thunder} style={{
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                    width: 'auto',
                                                    height: '60px',
                                                    backgroundColor: 'white',
                                                    borderRadius: '50%',
                                                    marginBottom: 10
                                                }} />
                                                <SpecsTypography>
                                                    POTENCIA <br></br>
                                                    {item.potencia1}<br></br>
                                                    {item.potencia2}
                                                </SpecsTypography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={3} display="flex" justifyContent="center">
                                            <Box sx={{ textAlign: 'center' }}>
                                                <img src={enigne} style={{
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                    width: 'auto',
                                                    height: '60px',
                                                    backgroundColor: 'white',
                                                    borderRadius: '50%',
                                                    marginBottom: 10
                                                }} />
                                                <SpecsTypography>
                                                    CILINDRADA <br></br>
                                                    {item.cilindrada1}<br></br>
                                                    {item.cilindrada2}
                                                </SpecsTypography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={2} display="flex" justifyContent="center">
                                            <Box sx={{ textAlign: 'center' }}>
                                                {item.renderCapacity && (
                                                    <>
                                                        <img src={oil} style={{
                                                            marginLeft: 'auto',
                                                            marginRight: 'auto',
                                                            width: 'auto',
                                                            height: '60px',
                                                            backgroundColor: 'white',
                                                            borderRadius: '50%',
                                                            marginBottom: 10
                                                        }} />
                                                        <SpecsTypography>
                                                            CAPACIDAD <br></br>
                                                            {item.capacidad1}<br></br>
                                                            {item.capacidad2}

                                                        </SpecsTypography>
                                                    </>
                                                )}
                                                {item.renderSystem && (
                                                    <>
                                                        <img src={system} style={{
                                                            marginLeft: 'auto',
                                                            marginRight: 'auto',
                                                            width: 'auto',
                                                            height: '60px',
                                                            backgroundColor: 'white',
                                                            borderRadius: '50%',
                                                            marginBottom: 10
                                                        }} />
                                                        <SpecsTypography>
                                                            SISTEMA <br></br>
                                                            {item.sistema1}<br></br>
                                                            {item.sistema2}
                                                        </SpecsTypography>
                                                    </>
                                                )}
                                            </Box>
                                        </Grid>
                                        <Grid item md={2} display="flex" justifyContent="center">
                                            <Box sx={{ textAlign: 'center' }}>
                                                {item.renderFreeHeight && (
                                                    <>
                                                        <img src={distance} style={{
                                                            marginLeft: 'auto',
                                                            marginRight: 'auto',
                                                            width: 'auto',
                                                            height: '60px',
                                                            backgroundColor: 'white',
                                                            borderRadius: '50%',
                                                            marginBottom: 10
                                                        }} />
                                                        <SpecsTypography>
                                                            ALTURA LIBRE <br></br>
                                                            {item.alturalibre1}<br></br>
                                                            {item.alturalibre2}
                                                        </SpecsTypography>
                                                    </>
                                                )}
                                                {item.renderLights && (
                                                    <>
                                                        <img src={lights} style={{
                                                            marginLeft: 'auto',
                                                            marginRight: 'auto',
                                                            width: 'auto',
                                                            height: '60px',
                                                            backgroundColor: 'white',
                                                            borderRadius: '50%',
                                                            marginBottom: 10
                                                        }} />
                                                        <SpecsTypography>
                                                            LUCES <br></br>
                                                            {item.luces1}<br></br>
                                                            {item.luces2}
                                                        </SpecsTypography>
                                                    </>

                                                )}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Box display="flex" justifyContent="center" sx={{ paddingTop: 4 }}>
                                        <Button sx={{ backgroundColor: 'white', color: 'black', fontSize: '0.8rem' }}>
                                            DESCARGAR FICHA TÉCNICA
                                        </Button>
                                    </Box>
                                </Box>
                            ))}
                        </NewCarousel>
                    </>
                </Modal>
            )
            }
            <Grid item
                sx={{
                    width: '100%', backgroundColor: '#222222', textAlign: 'center', mt: 6
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
                <ContactForm />
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
                            <Typography fontFamily="Arial" color="white" fontWeight="bold" fontSize={15} textAlign="center">
                                CONTACTO:
                            </Typography>
                            <Typography fontFamily="Arial" color="white" fontSize={13}>
                                <Grid container direction="column" mt={2}>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid item mr={1}>
                                            <WhatsApp />
                                        </Grid>
                                        <Grid item>
                                            Post venta: 3364023223
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid item mr={1}>
                                            <WhatsApp />
                                        </Grid>
                                        <Grid item>
                                            Ventas: 33640223222
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid item mr={1}>
                                            <LocationCityRounded />
                                        </Grid>
                                        <Grid item>
                                            Av Presidente Peron 2020.<br />
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
                href="https://api.whatsapp.com/send?phone=+54933640223222&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20..."
                className="float"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa fa-whatsapp my-float" />
            </a>
        </Grid >
    )
}

export default Desktop
