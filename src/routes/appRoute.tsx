import {Route} from 'react-router-dom'
import appPaths from '../utils/pathConstant'
import App from '../App'
import { AppLayout } from '../layouts/AppLayout'
export const appRoutes = (
  <Route path={appPaths.ROOT} element={<App />}>
    <Route element={<AppLayout />}>
      <Route
        path={appPaths.DASHBOARD}
        lazy={() => import("../pages/dashboard")}
      />
      <Route path={appPaths.USER} lazy={() => import("../pages/user")} />
      <Route
        path={appPaths.PROPERTIES}
        lazy={() => import("../pages/properties")}
      />
      <Route path={appPaths.CHAT} lazy={() => import("../pages/chat")} />
      <Route path={appPaths.MAINTENANCE} lazy={() => import("../pages/maintenance")} />
      <Route path={appPaths.CUSTOMER_SUPPORT} lazy={() => import("../pages/customer_support")} />
      <Route path={appPaths.FAQS} lazy={() => import("../pages/faqs")} />
      <Route path={appPaths.TERMS_OF_SERVICE} lazy={() => import("../pages/term_service")} />
      <Route path={appPaths.PRIVACY_POLICY} lazy={() => import("../pages/privacy_policy")} />
    </Route>
  </Route>
);