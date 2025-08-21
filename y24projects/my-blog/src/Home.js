import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Salaar", body: "Prabhas", author: "Neel", id: 1 },
        { title: "RRR", body: "NTR", author: "Rajamouli", id: 2 },
        { title: "Athadu", body: "Mahesh Babu", author: "Trivikram", id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
};

export default Home;