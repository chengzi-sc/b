import React, { useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom";
// import '../static/css/ArticleList.css'
import { List, Row, Col, Modal, message, Button } from 'antd';
import axios from 'axios'
import servicePath from '../config/apiUrl'


    const { confirm } = Modal;

function ArticleList() {


    useEffect(() => {
        getList()
    }, [])

    const [list, setList] = useState([])
    const navigate = useNavigate();

    const getList = () => {
        axios({
            method: 'get',
            url: servicePath.getArticleList,
            withCredentials: true,
            header: { 'Access-Control-Allow-Origin': '*' }
        }).then(
            res => {
                setList(res.data.list)

            }
        )
    }

    const delArticle = (id) => {
        confirm({
            title: '确定要删除这篇博客文章吗?',
            content: '点击删除后文章将永久无法恢复。',
            onOk() {
                axios(servicePath.delArticle+id,{ withCredentials: true}).then(
                    res=>{ 
                        message.success('文章删除成功')
                        getList()
                        }
                    )
            },
            onCancel() {
                message.success('撤销删除操作')
            },
         });
    
    }

    const updateArticle = (id,checked)=>{
        navigate('/index/add/'+id)
    
    }

    return (
        <div>
            <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={3}>
                            <b>类别</b>
                        </Col>
                        <Col span={3}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={3}>
                            <b>章数</b>
                        </Col>
                        <Col span={3}>
                            <b>浏览量</b>
                        </Col>

                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>

                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Col span={8}>
                            {item.title}
                        </Col>
                        <Col span={3}>
                            {item.typeName}
                        </Col>
                        <Col span={3}>
                            {item.addTime}
                        </Col>
                        <Col span={3}>
                            共<span>{item.part_count}</span>章
                        </Col>
                        <Col span={3}>
                            {item.view_count}
                        </Col>

                        <Col span={4}>
                            <Button type="primary" onClick={() => updateArticle(item.id)}>修改</Button>&nbsp;

                            <Button onClick={()=>{delArticle(item.id)}} >删除 </Button>
                        </Col>

                    </List.Item>
                )}
            />

        </div>
    )

}

export default ArticleList