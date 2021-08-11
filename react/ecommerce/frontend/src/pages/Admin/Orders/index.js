import { useQuery } from 'react-query';
import { fetchOrders } from '../../../api';
import {
	Flex,
	Heading,
	Table,
	TableCaption,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';

const Orders = () => {

	const {isLoading,isError,error,data} = useQuery("orders",fetchOrders)

	if (isLoading) {
		 return <div>Loading</div>;
	}
	if (isError) {
		return <div>error {error}</div>
	}
	return (
		<Flex w="100%" flexDir="column">
			<Heading mb="4" textAlign="center">Orders</Heading>
			<Table variant="simple">
				<TableCaption >Imperial ...</TableCaption>
				<Thead>
					<Tr>
						<Th>User</Th>
						<Th>Adress</Th>
						<Th>Items</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						data.map(item => (
							<Tr key={item._id}>
								<Td>{item.user.email}</Td>
								<Td>{item.adress}</Td>
								<Td isNumeric>{item.items.length}</Td>
							</Tr>
						))
					}
				</Tbody>
			</Table>
			
		</Flex>
	);
};

export default Orders;