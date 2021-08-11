import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './style.css';
import Products from './Products';
import Orders from './Orders';
import ProductDetail from './ProductDetail';
import { Button } from '@chakra-ui/react';
import AddProduct from './Products/AddProduct';

const Admin = () => {
	const { path,url } = useRouteMatch()
	return (
		<>
			<ul className="admin-menu">
				<li>
					<Link to={`${url}/orders`} ><Button colorScheme="linkedin" variant="solid" w="100%">Orders</Button> </Link>
				</li>
				<li>
					<Link to={`${url}/products`}><Button colorScheme="linkedin" variant="solid" w="100%">Products</Button></Link>
				</li>
			</ul>
			<Switch>
				<Route exact path={path} component={Orders} />
				<Route path={`${path}/orders`}  component={Orders}/>
				<Route exact path={`${path}/products`} component={Products} />
				<Route exact path={`${path}/products/new`} component={AddProduct} />
				<Route path={`${path}/products/:product_id`} component={ProductDetail} />
			</Switch>
		</>


	);
};

export default Admin;