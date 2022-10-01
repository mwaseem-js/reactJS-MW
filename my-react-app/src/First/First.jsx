import { useMemo, useState } from "react";

const First = () =>{
    const [count, setCount] = useState(0);

    const calculation = useMemo(() =>expensiveCalculation(count), [count]); 

    const handleClick = () =>{
        setCount( c=> c+1);
    };

    // const calculation = expensiveCalculation(count);

    return(
        <><hr/><h2>First Startd...</h2>
        <div>
            <button onClick={handleClick}>ADD+</button> ::: {count}
        </div>
        <h2>{calculation}</h2>
        </>
    );
};

const expensiveCalculation = (num) =>{
    for(let i=0; i<1000000000; i++){
        num+= 1;
    }
    return num;
}

export default First;