import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {fetchProduct} from '../../api';
import {Box, Button, Text} from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import {useBasket} from '../../Contexts/BasketContext';

const Index = () => {

    const {product_id} = useParams()
    const {data,isError,isLoading} = useQuery(["product",product_id],() => fetchProduct(product_id))

    const {items,addToBasket} = useBasket()

    if (isLoading) {
        return <div>Loading....</div>
    }

    if (isError) {
        return <div>Error...</div>
    }

    const images = data.photos.map((i) => ({original:i}))

    const findBasketItem = items.find((item) => (item._id===product_id))

    return (
        <div style={{textAlign:"center"}}>

            <Text as="h2" fontSize="2xl">{data.title}</Text>
            <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
           <Text mt="5" as="h2" fontSize="xl">{data.description}</Text>
           {
              images.length >0 && <Box mt="10" >
                 <ImageGallery items={images} showThumbnails={false} />
              </Box>
           }
           <Button mt="2" variant="solid" colorScheme={findBasketItem ? "gray" : "pink"} onClick={()=> addToBasket(data,findBasketItem)}>
              {
                 findBasketItem ?  "Remove from basket" : "Add to basket"
              }
           </Button>
        </div>
    );
};

export default Index;