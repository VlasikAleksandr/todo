
import { Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../routs"

const AppRouter = () =>{
    const auth = false
    return(
        auth
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route path={route.path} 
                       element={<route.component/>}
                       key={route.path} />
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route path={route.path} 
                       element={<route.component/>} 
                       key={route.path} />
            )}
        </Routes>
       
    )
}

export default AppRouter 