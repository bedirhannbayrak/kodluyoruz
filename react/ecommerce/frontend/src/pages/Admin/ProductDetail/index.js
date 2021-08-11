import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct, updateProduct } from '../../../api';
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { FieldArray, Formik } from 'formik';
import validationSchema from './validation';
import { message } from 'antd';

const ProductDetail = () => {

	const {product_id} = useParams();

	const {data, isLoading, isError, error} = useQuery(
		['admin:product', product_id], () => fetchProduct(product_id));

	console.log(data);

	if (isLoading) {
		return <div>Loading</div>;
	}

	if (isError) {
		return <div>error {error.message}</div>;
	}

	const handleSubmit = async (values, bag) => {
		message.loading({
			content:"Loading",
			key:"update"
		})
		try {
			await updateProduct(values,data._id)
			message.success({
				content:"Product updated successfully",
				key:"update"
			})
		}catch (e){
			message.success({
				content:"An error occured",
				key:"update"
			})
		}
	};

	return (
		<Flex alignItems="center" w="100%" flexDir="column" >
			<Text fontSize="2xl"> Edit</Text>
			<Formik initialValues={{
				title: data.title,
				description: data.description,
				price: data.price,
				photos: data.photos,
			}}
			        onSubmit={handleSubmit}
			        validationSchema={validationSchema}
			>
				{
					({
						 handleSubmit,
						 errors,
						 touched,
						 handleChange,
						 handleBlur,
						 values,
						 isSubmitting,
					 }) =>
						<Flex justifyContent="center" w="100%" >
							<Box w="80%" pb="20">
								<Box my="5">
									<form onSubmit={handleSubmit}>
										<FormControl>
											<FormLabel>Title</FormLabel>
											<Input name="title"
											       onChange={handleChange}
											       onBlur={handleBlur}
											       value={values.title}
											       disabled={isSubmitting}
											       isInvalid={touched.title &&
											       errors.title}/>
											{
												touched.title &&
												errors.title && (<Text mt="1" fontSize="xl" color="red">{errors.title}</Text>)
											}
										</FormControl>
										<FormControl mt="5">
											<FormLabel>Description</FormLabel>
											<Textarea name="description"
											          onChange={handleChange}
											          onBlur={handleBlur}
											          value={values.description}
											          disabled={isSubmitting}
											          isInvalid={touched.description &&
											          errors.description}/>
											{
												touched.description &&
												errors.description && (<Text mt="1" fontSize="xl" color="red">{errors.description}</Text>)
											}
										</FormControl>
										<FormControl mt="5">
											<FormLabel>Price</FormLabel>
											<Input name="price"
											       onChange={handleChange}
											       onBlur={handleBlur}
											       value={values.price}
											       disabled={isSubmitting}
											       isInvalid={touched.price &&
											       errors.price}/>
											{
												touched.price &&
												errors.price && (<Text mt="1" fontSize="xl" color="red">{errors.price}</Text>)
											}
										</FormControl>
										<FormControl mt="5">
											<FormLabel>Photos</FormLabel>
											<FieldArray name="photos"
											            render={(arrayHelpers) => (
												            <div>
													            {
														            values.photos &&
														            values.photos.map(
															            (photo, index) => (
																            <Flex key={index}
																                  mt="2">
																	            <Input
																		            name={`photos.${index}`}
																		            onChange={handleChange}
																		            onBlur={handleBlur}
																		            value={photo}
																		            disabled={isSubmitting}
																	            />
																	            <Button ml="4"
																	                    type="button"
																	                    colorScheme="red"
																	                    onClick={() => {
																		                    arrayHelpers.remove(
																			                    index);
																	                    }}>Remove</Button>
																            </Flex>
															            ))
													            }
													            <Button mt="4"
													                    float="right"
													                    type="button"
													                    colorScheme="gray"
													                    onClick={() => {
														                    arrayHelpers.push();
													                    }}>Add a
														            photo</Button>
													            <Button mt="4"
													                    isLoading={isSubmitting}
													                    width="full"
													                    type="submit"
													                    colorScheme="green"
													            >Submit</Button>
												            </div>
											            )}
											/>
										</FormControl>
									</form>
								</Box>
							</Box>
						</Flex>
				}
			</Formik>
		</Flex>
	);

};

export default ProductDetail;