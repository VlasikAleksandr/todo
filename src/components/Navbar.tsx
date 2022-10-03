import {Layout,Menu,Row} from 'antd'
import { FC } from "react"
import {useTypedSelector} from '../hooks/useTypedSelector'
import { useNavigate} from 'react-router-dom'
import { RouteNames } from '../routs'


const Navbar: FC = () =>{
  const router = useNavigate()
  const {isAuth} = useTypedSelector(state=>state.auth) 
    return(
        <div>
          <Layout.Header>
            <Row justify='end'>
              {isAuth
              ? 
              <>
                <div style={{color:'white'}}>Aleksandr</div>            
                <Menu theme="dark"  selectable={false}>
                  <Menu.Item onClick={()=>console.log('Close')} key={1}>Close</Menu.Item>
                </Menu>
              </> 
              :
              <Menu theme="dark"  selectable={false}>
                  <Menu.Item onClick={()=>router(RouteNames.LOGIN)} key={1}>Login</Menu.Item>
              </Menu>
              }
                
            </Row>
          </Layout.Header>
        </div>
    )
}

export default Navbar