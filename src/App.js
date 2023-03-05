import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import './fonts/FSEmeric/stylesheet.css'
import ThemeProvider from './theme/ThemeProvider'
import { LightTheme } from './theme/theme'

import RoyalEnfield from './pages'

const App = () => (
    <ThemeProvider theme={LightTheme}>
        <BrowserRouter>
            <Switch>
                <Route path="/" key="RoyalEnfield" component={RoyalEnfield} />
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
)

export default App
