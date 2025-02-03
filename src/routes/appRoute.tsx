import {Route} from 'react-router-dom'
import appPaths from '../utils/pathConstant'
import App from '../App'
import { AppLayout } from '../layouts/AppLayout'
export const appRoutes=(
    <Route path={appPaths.ROOT} element={<App/>}>
    <Route element={<AppLayout/>}>
    <Route path={appPaths.HOME} lazy={()=>import("../pages/home")} />
    </Route>
    </Route>
)