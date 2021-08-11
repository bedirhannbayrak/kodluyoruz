import {createContext, useContext, useEffect, useState} from 'react'
import {fetchLogout, fetchMe} from '../api'
import {Flex, Spinner} from '@chakra-ui/react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const me = await fetchMe()
                setLoggedIn(true)
                setUser(me)
                setLoading(false)
            } catch (e) {
                setLoading(false)
            }

        })()
    }, [])

    const login = (data) => {
        setUser(data.user)
        setLoggedIn(true)
        localStorage.setItem('access-token', data.accessToken)
        localStorage.setItem('refresh-token', data.refreshToken)
    }

    const logout = async (cb)=> {
        setLoggedIn(false)
        setUser(null)
        await fetchLogout()
        localStorage.removeItem("refresh-token")
        localStorage.removeItem("access-token")
        cb()
    }

    const values = {
        user,
        loggedIn,
        login,
        loading,
        logout
    }
    if(loading) return (
        <Flex justifyContent="center" alignItems="center" h="100vh">
            <Spinner
                thickness="5px"
                speed="0.65s"
                emptyColor="gray.200"
                color="pink.500"
                size="xl"
            />
        </Flex>
    )

    return (<AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)