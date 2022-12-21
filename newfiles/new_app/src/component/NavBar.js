import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { Nav, Navbar,Button ,Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import "../styles/Style.css";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE} >КупиДевайс</NavLink>
                {user.isAuth ?
                <Nav className="Nav" style={{color:'white'}}>
                    <Button variant={"outline-light"} className="Buttons">Админ Панель</Button>
                    <Button variant={"outline-light"} className="Buttons" onClick={() => user.setIsAuth(false)}>Выйти</Button>
                </Nav>
                        :
                <Nav className="Nav" style={{color:'white'}}>
                    <Button variant={"outline-light"} className="Buttons" onClick={() => user.setIsAuth(true)}>Войти</Button>
                </Nav>
                }
            </Container>
        </Navbar> 
     );
   }
)
 
export default NavBar;