const Home = () => {
    const handleClick = () => {
        console.log("hello everyone");
    };
    return (
        <div className="home">
            <h2>Welcome to My Blog</h2>
            <button onClick={handleClick}>Click Me</button>
            <h3>Latest Posts</h3>   
        </div>
    );
}
 
export default Home;