// Importanto o React
import React from "react";
// Importando Materialize
import { Navbar , NavItem , Row} from 'react-materialize';
// Importando o Component NavLink
import { NavLink} from 'react-router-dom';

const Header = () => (
    <Row>
        <Navbar className="grey darken-2">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </Navbar>
    </Row>
);

export default Header;