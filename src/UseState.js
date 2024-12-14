import { useState } from "react";

function UseState() {

    const [numbers, setNumbers] = useState([1, 2, 3, 4]);

    const addNumber = () => {
        const newNumber = Math.round(Math.random() * 10) + 1;
        setNumbers([...numbers, newNumber]);
    }

    return (
        <div>
            <ul>
                {
                numbers.map((num, index) => <li key={index}>{num}</li>)
                }
            </ul>
            <button onClick={addNumber}>New number</button>
        </div>
    )
}

export default UseState;