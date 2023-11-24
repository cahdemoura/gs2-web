import React,{useContext} from 'react'
import { ,routeredirect } from 'next/dist/server/api-utils'
import StoreContext from '@/components/Store/Context'

const Private = ({component:Component,...rest}) => {
    const{token}=useContext(StoreContext)
  return (
    <Route>
        {...rest}
        render={()=>token?<Component{...rest}/>:
        <Redirect to="/login"/>}
    </Route>
  )
}

export default Private