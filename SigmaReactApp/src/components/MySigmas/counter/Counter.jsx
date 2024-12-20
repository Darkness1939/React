import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import Button from "../common/Button/Butcomponent";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => { console.log('Count has changed!') }, [count])

    return (
        <div>
            <h2>{count} likes</h2>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
            <Button onClick={() => setCount(count - 1)}>-1</Button>

            <Button onClick={() => setCount(count + 10)}>+10</Button>
            <Button onClick={() => setCount(count - 10)}>-10</Button>

            <Button onClick={() => setCount(0)}>Reset count</Button>
            <h3>Sigma?</h3>
        </div>
    );
};

export default Counter;