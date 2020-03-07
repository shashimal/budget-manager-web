import React from "react";
import {Layout} from 'antd';

const {Content} = Layout;

const AppContent = () => {

    return (
        <Layout style={{padding: '0 24px 24px'}}>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                Content
            </Content>
        </Layout>
    )
};
export default AppContent