import React from "react";
import {Layout, Menu} from 'antd';
import {RiseOutlined, FallOutlined, NotificationOutlined,GoldOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {Sider} = Layout;

const AppSider = () => {

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                theme='dark'
                mode="inline"
                style={{height: '100%', borderRight: 0}}
            >
                <Menu.Item key="1">
                    <RiseOutlined/>
                    <span>My Income</span>
                    <Link to="/income"/>
                </Menu.Item>

                <Menu.Item key="2">
                    <FallOutlined/>
                    <span>My Expenses</span>
                    <Link to="/expense"/>
                </Menu.Item>

                <Menu.Item key="3">
                    <NotificationOutlined/>
                    <span>Budget Plan</span>
                    <Link to="/budget"/>
                </Menu.Item>

                <Menu.Item key="4">
                    <GoldOutlined />
                    <span>Categories</span>
                    <Link to="/categories"/>
                </Menu.Item>
            </Menu>
        </Sider>
    )
};
export default AppSider