import {Avatar,Divider} from 'antd'
import { WechatOutlined, GithubOutlined, QqOutlined} from '@ant-design/icons'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://t13.baidu.com/it/u=4185809368,3453186291&fm=224&app=112&size=h200&n=0&f=JPEG&fmt=auto?sec=1649005200&t=c771ee5755d0c2374e9f23c1dd3d2118"  /></div>
            <div className="author-introduction">
                半只大橙子
                <Divider>账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />}className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author