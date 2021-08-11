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
import { postProduct } from '../../../../api';
import { useMutation, useQueryClient } from 'react-query';

const AddProduct = () => {

	const queryClient = useQueryClient()

	const postProductMutation = useMutation("addProduct",postProduct
	 )

	const handleSubmit = async (values, bag) => {
		message.loading({
			content:"Loading",
			key:"postProduct"
		})
		const newValues = {...values,photos:JSON.stringify(values.photos)}
			postProductMutation.mutate(newValues,{
				onError:()=> {
					message.error({
						content:"An error occured",
						key:"postProduct"
					})
				},
				onSuccess:async() => {
					await queryClient.refetchQueries("admin:products")
					await queryClient.refetchQueries("repoData")
					message.success({
						content:"Product added successfully",
						key:"postProduct"
					})
				}
			})
	};

	return (
		<Flex alignItems="center" w="100%" flexDir="column">
			<Text fontSize="2xl"> Add Product</Text>
			<Formik initialValues={{
				title: "",
				description:"",
				price: "",
				photos:[],
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
						<Flex justifyContent="center" w="100%">
							<Box  w="80%" pb="20">
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

export default AddProduct;