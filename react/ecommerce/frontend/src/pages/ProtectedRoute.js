import {Redirect, Route} from 'react-router-dom'

import {useAuth} from '../Contexts/AuthContext'
const ProdectedRoute = ({component:Component,admin,...rest}) => {
    const {loggedIn,user} = useAuth()

    return (
        <Route {...rest} render={(props) => {

           if (admin  && user?.role !== 'admin') {
              return <Redirect to={{pathname:"/unauthorized"}} />
           }

            if(loggedIn) {
                return <Component {...props} />;
            }
            return <Redirect to={{pathname:"/unauthorized"}} />
        }} />
    )

};

export default ProdectedRoute;