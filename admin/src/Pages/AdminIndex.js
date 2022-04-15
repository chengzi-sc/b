import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'

import '../static/css/AdminIndex.css';

import {
    UserOutlined,
    PieChartOutlined,
    DesktopOutlined,
    FileAddOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function AdminIndex() {

    const [collapsed, setCollapsed] = useState(false)

    const navigate = useNavigate();

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };


    const handleClickArticle = e => {
        // console.log(e.key)
        if (e.key == 'AddArticle') {
            navigate('/index/add')
        } else if(e.key == 'ArticleList') {
            navigate('/index/list')
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        onClick={handleClickArticle}

                        title={
                            <span>
                                <UserOutlined />
                                <span>文章管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="AddArticle">添加文章</Menu.Item>
                        <Menu.Item key="ArticleList">文章列表</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="9">
                        <FileAddOutlined />
                        <span>留言管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <div>
                            {/* <AddArticle/> */}
                            <Routes>
                                <Route path="/" element={<AddArticle />} />
                                <Route path="/add" element={<AddArticle />} />
                                <Route path="/add/:id" element={<AddArticle />} />
                                <Route path="/list/" element={<ArticleList />} />
                            </Routes>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )

}

export default AdminIndex