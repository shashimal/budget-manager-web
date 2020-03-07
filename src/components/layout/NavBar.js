import React from "react";
import {Menu} from "antd";
import {PlusCircleOutlined, } from '@ant-design/icons';

const NavBar = ()=> {
    return(
        <Menu
            theme="dark"
            mode="horizontal"
            style={{lineHeight: '64px'}}
        >
            <Menu.Item key="1"><PlusCircleOutlined /> New Income</Menu.Item>
            <Menu.Item key="2"><PlusCircleOutlined /> New Expense</Menu.Item>
        </Menu>
    )
};
export default NavBar