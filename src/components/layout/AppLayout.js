import React from "react";
import { Layout,  } from 'antd';
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";

const AppLayout = () => {

    return (
        <Layout>
            <AppHeader/>
            <Layout>
                <AppSider/>
                <AppContent/>
            </Layout>
        </Layout>
    )
};
export default AppLayout