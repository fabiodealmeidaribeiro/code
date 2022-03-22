import React, {
    useState,
    useEffect,
} from 'react';

export default function Counter(props) {

    const initialCounter = 0;
    const [ counter, setCounter ] = useState(initialCounter);

    const getDecrement = () => {
        setCounter(counter - 1);
    };

    // const getIncrement = () => {
    //     setCounter(counter + 1);
    // };

    useEffect(() => {
        let counterListen = counter;
        console.log(counterListen);
    });

    return (
        <div>
            <h1>Counter</h1> 
            <span>{ counter }</span>
            <div>
                <button onClick={ getDecrement }>
                    Decrement
                </button>
                <button onClick={ () => { setCounter(counter + 1) } }>
                    Increment
                </button>
            </div>
        </div>
    );
};