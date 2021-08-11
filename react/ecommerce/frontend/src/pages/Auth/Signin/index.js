import {
    Alert,
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import validationSchema from './validation';
import { fetchLogin } from '../../../api';
import { useAuth } from '../../../Contexts/AuthContext';

const Signin = ({history}) => {

    const {login} = useAuth()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, bag) => {
            try {
                const data = await fetchLogin({email:values.email,password:values.password})
                login(data)
                history.push("/profile")
            }catch(e){
                bag.setErrors({general:e.response.data.message})
            }
        },
        validationSchema
    })

    return (
        <Flex align="center" width="full" justifyContent="center">
            <Box pt="10">
                <Box textAlign="center">
                    <Heading>Signup</Heading>
                </Box>
                <Box my="5" textAlign="left">
                        {
                            formik.errors.general ? <Alert status="error">
                                {
                                    (formik.errors.general)
                                }
                            </Alert> : null
                        }

                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input name="email"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                                   isInvalid={formik.touched.email &&
                                   formik.errors.email}/>
                        </FormControl>
                        <FormControl mt="4">
                            <FormLabel>Password</FormLabel>
                            <Input name="password"
                                   type="password"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}
                                   isInvalid={formik.touched.password &&
                                   formik.errors.password}
                            />
                        </FormControl>
                        <Button type="submit" width="full"
                                mt="4"> Login</Button>
                    </form>
                </Box>

            </Box>
        </Flex>
    );
};

export default Signin;