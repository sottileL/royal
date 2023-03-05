<Box sx={{ backgroundColor: '#201c1c', paddingBottom: 6 }}>
                    <img width="100%" height="500px" src={item.image}></img>
                        <TitleNavbar sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2, paddingBottom: 1 }}>ESPECIFICACIONES</TitleNavbar>
                        <Grid container direction="row" sx={{ pt: 3 }}>
                            <Grid item md={2} display="flex" justifyContent="center">
                                <Box >
                                    <img src={thunder} style={{
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                      width: 'auto',
                                      height: '80px',
                                      backgroundColor: 'white',
                                      borderRadius: '50%',
                                      marginBottom: 10
                                    }}/>
                                    <SpecsTypography>
                                        POTENCIA <br></br>
                                        {item.potencia1}<br></br>
                                        {item.potencia2}
                                    </SpecsTypography>
                                </Box>
                            </Grid>
                            <Grid item md={2} display="flex" justifyContent="center">
                                <Box>
                                    <img src={enigne} style={{
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                      width: 'auto',
                                      height: '80px',
                                      backgroundColor: 'white',
                                      borderRadius: '50%',
                                      marginBottom: 10
                                    }}/>
                                <SpecsTypography>
                                    CILINDRADA <br></br>
                                    {item.cilindrada1}<br></br>
                                    {item.cilindrada2}
                                </SpecsTypography>
                                </Box>
                            </Grid>
                            <Grid item md={2} display="flex" justifyContent="center">
                                <Box>
                                    {item.renderCapacity && (
                                        <>
                                            <img src={oil} style={{
                                              marginLeft: 'auto',
                                              marginRight: 'auto',
                                              width: 'auto',
                                              height: '80px',
                                              backgroundColor: 'white',
                                              borderRadius: '50%',
                                              marginBottom: 10
                                            }}/>
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
                                          height: '80px',
                                          backgroundColor: 'white',
                                          borderRadius: '50%',
                                          marginBottom: 10
                                        }}/>
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
                                <Box>
                                {item.renderFreeHeight && (
                                <>
                                    <img src={distance} style={{
                                      marginLeft: 'auto',
                                      marginRight: 'auto',
                                      width: 'auto',
                                      height: '80px',
                                      backgroundColor: 'white',
                                      borderRadius: '50%',
                                      marginBottom: 10
                                    }}/>
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
                                      height: '80px',
                                      backgroundColor: 'white',
                                      borderRadius: '50%',
                                      marginBottom: 10
                                    }}/>
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
                            <Button sx={{ backgroundColor: 'white', color: 'black', padding: 1, fontSize: 10 }}>
                                DESCARGAR FICHA TÉCNICA
                            </Button>
                        </Box>
                </Box>
