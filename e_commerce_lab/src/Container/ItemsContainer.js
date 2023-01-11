import React from 'react';
import ItemList from '../Components/ItemList';


const ItemContainer = () => {

const items = [
    {
        name : 'Espresso',
        price : 5
    },
    {
        name : 'Americano',
        price : 7
    },
    {
        name : 'Cappuccino',
        price : 7
    },
    {
        name : 'Mocha',
        price : 8
    }
]


    return (
        <>
            <ItemList items={items}/>
        </>

)


}

