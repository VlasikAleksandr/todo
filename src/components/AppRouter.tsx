
import { Navigate, Route, Routes } from "react-router-dom"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { privateRoutes, publicRoutes, RouteNames } from "../routs"

const AppRouter = () =>{
    const {isAuth} = useTypedSelector(state=>state.auth) 
    return(
        isAuth?
        <Routes>
            {privateRoutes.map(route =>
                <Route path={route.path} 
                       element={isAuth?
                        (<Navigate replace to={RouteNames.EVENT}/>)
                        :(<route.component/>)}
                       key={route.path} />
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route path={route.path} 
                       element={isAuth?
                        (<Navigate replace to={RouteNames.LOGIN}/>)
                        :(<route.component/>)}
                       key={route.path} />
            )}
        </Routes>
    )
}

export default AppRouter 