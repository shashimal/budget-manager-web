import React, {useEffect} from "react";
import {Button, Table} from 'antd';
import {PlusCircleOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from '../../actions/index'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <span>
                <Button type="primary" shape='round'><EditOutlined/></Button>
                <Button type='danger' shape='round'><DeleteOutlined/></Button>
            </span>
        ),
    },
];

const CategoryList = () => {

    const categories = useSelector(state => state.categories.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);

    return (
        <div>
            <Button type="primary" shape='round' style={{float: 'right', marginBottom: '10px'}}
                    icon={<PlusCircleOutlined/>}>
                New Category
            </Button>

            <Table rowKey="id" columns={columns} dataSource={categories}/>
        </div>
    )
};
export default CategoryList
