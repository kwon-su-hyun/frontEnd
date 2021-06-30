import React, { Component, useState } from 'react';

function Counter(props){
    let [count, setCount] = useState(0); 
        const adding = () => {  
            setCount(++count);
            console.log(count);
        };
    return (
        <div className='box'>
             <h1> {props.counterName} {count} </h1>
             <button onClick={adding}>클릭</button>
        </div>
    );
};

export default Counter;