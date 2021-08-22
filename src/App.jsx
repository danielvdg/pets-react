import React from 'react'
import { GlobalStyles } from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
// import Template from './template';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import * as S from './Styles/App.styles'
import Header from './Components/Header';
import Home from './Pages/Home';
import QuemSomos from './Pages/QuemSomos';
import Pets from './Pages/Pets';
import Contato from './Pages/Contato'
import { ligth } from './Styles/Themes/ligth';

const App = () => {
    return (
        <ThemeProvider theme={ligth}>
        
            <S.Container>
                <BrowserRouter>
                    <GlobalStyles/>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/pets' component={Pets}/>
                        <Route path='/contato' component={Contato}/>
                        <Route path='/quemsomos' component={QuemSomos}/>
                        
                    </Switch>

                </BrowserRouter>
            </S.Container>
        
        </ThemeProvider>
    )
}

export default App;
