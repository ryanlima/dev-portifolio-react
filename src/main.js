// Importando o React
import React from "react";
// Importando o component Home
import Home from "./components/home/home";
//Importando o componet Contact
import Contact from "./components/contact/contact";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';
// Importando o component <Switch/> e <Route/> da Lib de rotas
import { Switch, Route } from 'react-router-dom';


const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Container>
  </main>  
);

export default Main;