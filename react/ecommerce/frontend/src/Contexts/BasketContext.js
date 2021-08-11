import { createContext, useContext, useEffect, useState } from 'react';

const BasketContext = createContext()

export const BasketProvider = ({children}) => {

    const initialState = JSON.parse(localStorage.getItem("basket")) || []

    const [items,setItems] = useState(initialState)

    useEffect(()=> {
        localStorage.setItem("basket",JSON.stringify(items))
    },[items])

    const addToBasket = (item,basketItem) => {
        const isBasketItem= basketItem || items.find( i => i._id === item._id )
        if(isBasketItem){
            return setItems((prev)=> ([...prev].filter((i) => i._id!==isBasketItem._id)))
        }
        setItems((prev) => ([...prev,item]))
    }

    const removeFromBasket = (id) => {
        setItems((prev) => [...prev].filter(item => item._id!==id))
    };

    const emptyBasket = () => {
        setItems([])
    };

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
        emptyBasket
    }


    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket = () => useContext(BasketContext)

