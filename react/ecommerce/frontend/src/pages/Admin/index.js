import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './style.css';
import Products from './Products';
import Orders from './Orders';
import ProductDetail from './ProductDetail';
import { Flex } from '@chakra-ui/react';
import AddProduct from './Products/AddProduct';

const Admin = () => {
	const {path, url} = useRouteMatch();
	console.log(path, url);
	return (
		<Flex height="90vh" overflow="auto">
			<Flex textAlign="center" justifyContent="flex-start" flexDir="column"
			      w="20%" position="sticky" top="0"
			      backgroundColor="#212121">
				<Link style={{marginBottom: '5px'}} to={`${url}/orders`}>
					<Flex alignItems="center" justifyContent="center" h="10"
					      color="white" backgroundColor="transparent"
					      variant="solid"
					      mt="5"
					      fontWeight="bold"
					      _hover={{backgroundColor: '#4C4C4C'}}
					      w="100%">Orders
					</Flex>
				</Link>
				<Link to={`${url}/products`}>
					<Flex alignItems="center" justifyContent="center" h="10"
					      color="white" backgroundColor="transparent"
					      variant="solid"
					      fontWeight="bold"
					      _hover={{backgroundColor: '#4C4C4C'}}
					      w="100%">Products
					</Flex>
				</Link>
			</Flex>
			<Flex w="80%">
				<Switch>
					<Route exact path={path} component={Orders}/>
					<Route path={`${path}/orders`} component={Orders}/>
					<Route exact path={`${path}/products`} component={Products}/>
					<Route exact path={`${path}/products/new`}
					       component={AddProduct}/>
					<Route path={`${path}/products/:product_id`}
					       component={ProductDetail}/>
				</Switch>
			</Flex>

		</Flex>

	);
};

export default Admin;