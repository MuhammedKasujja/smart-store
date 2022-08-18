import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Route,
    RouteProps,
    Navigate,
    Routes,
} from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import Main from './Layout/Main'
import { useSelector } from 'react-redux'
import MainContent from './Layout/MainLayout'
import { Dashboard, NotFound, Reports, Users } from './Pages'

const LoggedInRouter = () => {
    // const { loading, error } = useAppState()
    // const appStateMethods = useAppStateMethods()

    // useEffect(() => {
    //   appStateMethods.request()
    // }, [appStateMethods])

    // if (loading) return <LinearProgress />
    // if (error) return <p>Error :(</p>

    return (
        <Routes>
            {/* <Route  path="/">
                <Login />
            </Route> */}
            <Route path="/signup">
                <button>This is signup page</button>
            </Route>
            <RouteWithLayout path={`/admin`} component={Main} layout={MainLayout} />
        </Routes>
    )
}

const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }: any) => {
    //   const authState = useSelector(
    //     (state: RootStore) => state.auth,
    //   )
    console.log('Routes', Layout)
    return (
        <Route
            {...rest}
            element={(props: any) => {
                //if (authState.user)
                if (Layout) {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )
                } else {
                    return <Component {...props} />
                }
                // redirect to login page
                // else
                //   return (
                //     <Redirect to={{ pathname: "/", }} />
                //   )
            }}
        />
    )
}

// See https://reacttraining.com/react-router/web/example/auth-workflow
const RoutePrivate: React.FC<RouteProps> = ({
    element: Component,
    ...rest
}: RouteProps) => {
    if (!Component) {
        return <Route {...rest} />
    }
    return <Route {...rest} element={Component} />

    // return (
    //     <Route
    //         {...rest}
    //         element={(props: any) =>{
    //             // authService.isAuthenticated() ? (
    //            return  <><Component {...props} /></>
    //         }
    //             // ) : (
    //             //   <Redirect
    //             //     to={{
    //             //       pathname: '/auth/login',
    //             //     }}
    //             //   />
    //             // )
    //         }
    //     />
    // )
}

const AppRouter: React.FC = () => (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/auth" element={<Auth />} /> */}
            {/* <RoutePrivate path="/" element={<LoggedInRouter />} /> */}

            {/* New routes */}
            <Route path={`/`} element={<MainContent />}>
                <Route path={`/dashboard`} element={<Dashboard />} />
                <Route path={`/users`} element={<Users />} />
                <Route path={`/reports`} element={<Reports />} />
                <Route path={`/`} element={<Navigate replace to="/dashboard" />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRouter