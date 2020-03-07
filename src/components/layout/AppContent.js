import React from "react";
import {  Switch, Route } from 'react-router-dom';

import {Layout} from 'antd';
import ExpenseList from "../expense/ExpenseList";
import IncomeList from "../income/IncomeList";
import BudgetList from "../budget/BudgetList";
import CategoryList from "../category/CategoryList";

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
                <Switch>
                    <Route exact path='/' component={ExpenseList} />
                    <Route path='/expense' component={ExpenseList} />
                    <Route path='/income' component={IncomeList} />
                    <Route path='/budget' component={BudgetList} />
                    <Route path='/categories' component={CategoryList} />
                </Switch>
            </Content>
        </Layout>
    )
};
export default AppContent