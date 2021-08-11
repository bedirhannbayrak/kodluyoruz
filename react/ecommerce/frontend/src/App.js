import './App.css'
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import Products from './pages/Products'
import ProductDetail from "./pages/ProductDetail"
import Profile from './pages/Profile'
import ProtectedRoute from './pages/ProtectedRoute'
import Basket from './pages/Basket'
import Error404 from './pages/Error404';
import Admin from "./pages/Admin"


function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/login" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/basket" component={Basket} />
              <Route path="/product/:product_id" component={ProductDetail} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/admin" component={Admin} admin />
              <Route path="*" component={Error404} />
            </Switch>
          </div>

        </div>
      </Router>
  );
}

export default App;
