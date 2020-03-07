import React from "react";
import {Menu} from "antd";
import {PlusCircleOutlined,} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            style={{lineHeight: '64px'}}
        >
            <Menu.Item key="1">
                <PlusCircleOutlined/>
                <span>New Income</span>
                <Link to="/new-income"/>
            </Menu.Item>
            <Menu.Item key="2">
                <PlusCircleOutlined/>
                <span>New Expense</span>
                <Link to="/new-expense"/>
            </Menu.Item>
        </Menu>
    )
};
export default NavBar