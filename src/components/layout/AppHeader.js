import React from "react";
import {Layout} from 'antd';
import NavBar from "./NavBar";

const {Header} = Layout;

const AppHeader = () => {
    return (
        <Header className="header" >
            <div className="logo"/>
            <NavBar/>
        </Header>
    )
};
export default AppHeader