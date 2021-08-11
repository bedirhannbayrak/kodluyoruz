import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

import App from './App';
import {AuthProvider} from './Contexts/AuthContext'
import {BasketProvider} from './Contexts/BasketContext'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <AuthProvider>
                    <BasketProvider>
                        <App/>
                    </BasketProvider>
                </AuthProvider>
            </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
