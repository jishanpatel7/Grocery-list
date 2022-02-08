import {nanoid} from 'nanoid';
import React from 'react';
import { useState } from 'react';

import { GroceryInput } from './GroceryInput';
import { GroceryList } from './GroceryList';

export const Grocery = () => {
    const [groceryList, setGroceryList] = useState([]);
    const handleAdd = (data) => {
        const payload = {
            title: data,
            status:false,
            id: nanoid(9)                                
}
        setGroceryList([...groceryList, payload]);
    } 
    const handleDelete = (id) => {
        const newList = groceryList.filter(item => item.id !== id);
        setGroceryList(newList);
    }

    return  (
        <>
            <GroceryInput getData={handleAdd} />
            <div className='gridbox'>
{groceryList.map(item => (
    <GroceryList key={item.id} title={item.title} status={item.status} id={item.id} handleDelete={handleDelete} />
))}                                         
            </div>
        </>
    )

    };