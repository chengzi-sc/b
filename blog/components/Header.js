import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, FormOutlined, SmileOutlined } from '@ant-design/icons'



const Header = () => {

    const [navArray, setNavArray] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {

                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/ ')
        } else {
            Router.push('/list?id=' + e.key)
        }


    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span className="header-logo">半只大橙子</span>
                    <span className="header-txt">专注摸鱼划水睡大觉。</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0" >
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                var selIcon = ()=>{
                                    switch(item.icon){
                                        case  'FormOutlined':
                                        return <FormOutlined/>
                                        case  'SmileOutlined':
                                        return <SmileOutlined/>
                                    }
                                }
                                return (
                                    <Menu.Item key={item.Id}>
                                        {selIcon()}
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }


                    </Menu>
                </Col>
            </Row>
        </div>
    )


}

export default Header