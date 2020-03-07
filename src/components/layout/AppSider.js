import React from "react";
import {Layout, Menu} from 'antd';
import {RiseOutlined, FallOutlined, NotificationOutlined} from '@ant-design/icons';

const {Sider} = Layout;

const AppSider = () => {

    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                style={{height: '100%', borderRight: 0}}
            >
                <Menu.Item key="1">
                    <RiseOutlined/>
                    <span>My Income</span>
                </Menu.Item>

                <Menu.Item key="2">
                    <FallOutlined/>
                    <span>My Expenses</span>
                </Menu.Item>

                <Menu.Item key="3">
                    <NotificationOutlined/>
                    <span>Budget Plan</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
};
export default AppSider