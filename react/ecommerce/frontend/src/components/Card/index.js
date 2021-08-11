import {Box,Image,Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import moment from "moment"
import {useBasket} from '../../Contexts/BasketContext'

const Card = ({item}) => {
    const {addToBasket,items} =  useBasket()
    const basketItem = items.find((basket_item) => (basket_item._id===item._id))
    return (
        <Box  p="3" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Link to={`/product/${item._id}`}>
                <Image src={item.photos[0]} loading="lazy" />
                <Box p="1">
                    <Box d="flex" alignItems="baseLine">
                        {moment(item.createdAt).format("MM/DD/YYYY")}
                    </Box>
                    <Box mt="1" fontWeight="semibold" lineHeight="tight">
                        {item.title}
                    </Box>
                    <Box>{item.price}</Box>
                </Box>
            </Link>
            <Button onClick={()=> addToBasket(item)} colorScheme={basketItem ? 'gray' : 'green'}>
                {basketItem ? "Remove from basket" : "Add to basket"}
            </Button>
        </Box>
    );

};

export default Card;