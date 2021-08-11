import {useAuth} from '../../Contexts/AuthContext'
import {Button, Flex, Heading, Text} from '@chakra-ui/react'

const Profile = ({history}) => {

    const {user,logout} = useAuth()
    const handleLogout = async ()=> {
        await logout(()=> {
           history.push("/")
       })
    }

    return (
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
            <Heading>User Profile</Heading>
            <Text mt="5" fontSize="4xl">Role : {user?.role}</Text>
            <Text mt="3" fontSize="2xl">Email : {user?.email}</Text>
            <Button onClick={handleLogout} mt="10" colorScheme="red" width="10rem">Logout</Button>
        </Flex>
    );
};

export default Profile;