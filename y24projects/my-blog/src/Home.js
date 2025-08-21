import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs] = useState([
        { title: "Salaar", body: "Prabhas", author: "Neel", id: 1 },
        { title: "RRR", body: "NTR", author: "Rajamouli", id: 2 },
        { title: "Athadu", body: "Mahesh Babu", author: "Trivikram", id: 3 }
    ]);
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
};
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <BlogList blogs = {blogs.filter((blog) => blog.author === "Venky")} title="Venky's blogs" />
        </div>
    );
};

export default Home;