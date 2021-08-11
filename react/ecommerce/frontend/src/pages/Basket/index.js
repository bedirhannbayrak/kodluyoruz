import { useRef, useState } from 'react';
import { useBasket } from '../../Contexts/BasketContext';
import {
	Alert,
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Image,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
	useDisclosure,
} from '@chakra-ui/react';
import { postOrder } from '../../api';

const Basket = () => {

	const {items,removeFromBasket,emptyBasket} = useBasket();
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [address,setAddress] = useState("")

	const total = items.reduce((acc,obj) => acc+obj.price,0)
	console.log(total)
	const handleSave = async () => {
		const itemIds= items.map(i => i._id)
		let input = {
			address,
			items:JSON.stringify(itemIds)
		}
		const res = await postOrder(input)
		emptyBasket()
		onClose()
		return res
	}

	const initialRef = useRef()
	const finalRef = useRef()
	return (
		<div>
			{
				items.length < 1 ? (
					<Alert status="warning">
						Sepetinizde ürün bulunmamaktadır
					</Alert>
				) : (
					<>
						<ul>
							{
								items.map((item) => (
									<Flex mb="5"  key={item._id}>
										<li key={item._id} >
											<Link to={`product/${item._id}`}>
												<Box>
													{item.title} - {item.price}
												</Box>
												<Image htmlWidth="200"
												       src={item.photos[0]}
												       alt="basket item"/>
											</Link>
											<Button mt="2" colorScheme="pink" size="sm" onClick={()=> {
												removeFromBasket(item._id)
											}}>Remove
												from basket</Button>
										</li>

									</Flex>

								))
							}
						</ul>
						<Text size="md" fontSize="xl" fontWeight="800" >{total} TL</Text>
						<Button mt="2"  size="lg"  onClick={onOpen}>Order</Button>
						<Modal
							initialFocusRef={initialRef}
							finalFocusRef={finalRef}
							isOpen={isOpen}
							onClose={onClose}
						>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Create your account</ModalHeader>
								<ModalCloseButton />
								<ModalBody pb={6}>
									<FormControl>
										<FormLabel>Adress</FormLabel>
										<Textarea value={address} onChange={(e) => setAddress(e.target.value)} ref={initialRef} placeholder="Adress" />
									</FormControl>
								</ModalBody>

								<ModalFooter>
									<Button colorScheme="blue" mr={3} onClick={handleSave}>
										Save
									</Button>
									<Button onClick={onClose}>Cancel</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</>
				)
			}
		</div>
	);
};

export default Basket;