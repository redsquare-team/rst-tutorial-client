import React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"
import { render } from "react-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Routes/Home.jsx"
import { Login } from "./Routes/Login.jsx"
import { Guestbook } from "./Routes/Guestbook.jsx"


render(
    <div>
        <BrowserRouter>
            <div>
                <Navbar color="light" light expand="md">
                    <Nav>
                        <NavItem>
                            <NavLink tag={Link} to="/">
                                Home
                    </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/user/login">
                                Login
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/todolist">
                                Todolist
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/guestbook">
                                Guestbook
        </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/user/login" component={Login}></Route>
                    <Route exact path="/guestbook" component={Guestbook}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </div>,
    document.getElementById("myapp")
)
