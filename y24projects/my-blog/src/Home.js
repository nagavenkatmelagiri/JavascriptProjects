const Home = () => {
    const handleClickAgain = (name) => {
        console.log("hello " + name);
    };
    return (
        <div className="home">
            <h2>Home page</h2>
            <button onClick={() => handleClickAgain("Venkat")}>Click Me</button>
            <h3>Latest Posts</h3>   
        </div>
    );
}
 
export default Home;