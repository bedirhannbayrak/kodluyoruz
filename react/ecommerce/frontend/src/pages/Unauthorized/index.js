import { useEffect } from 'react';
import { Text, Heading, VStack, Spinner } from '@chakra-ui/react';

const Unauthorized = ({history}) => {
	useEffect(() => {
			const redirectTimeout = setTimeout(()=> {
				history.push("/")
			},500)
		return ()=> {
				clearTimeout(redirectTimeout)
		}
		},[history])
	return (
		<VStack height="80vh"  alignItems="center" justifyContent="center" spacing="6">
			<Heading>Unauthorized Location</Heading>
			<Text fontSize="3xl"> You are redirecting...</Text>
			<Spinner />
		</VStack>
	);
};

export default Unauthorized;