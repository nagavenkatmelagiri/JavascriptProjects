import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Venkat');
    const [age, setAge] = useState('20');

    const handleClick = () => {
        console.log("Hello Everyone");
        setAge('21');
        setName("Venky");
    };

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>Name: {name}, Age: {age}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;