import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    const [title,setTitle]= useState(props.title);

    const clickHandlernew = () => {
        //title = "updated";
        console.log('before ' + title);
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandlernew}>change title</button>
        </Card>
    );
}

export default ExpenseItem;