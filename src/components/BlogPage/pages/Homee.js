import { useState } from 'react';
import BlogList from "../../BlogPage/BlogList";
import { blogList } from "../../BlogPage/data";
import EmptyList from "../../BlogPage/EmptyList";
import Header from "../../BlogPage/Header";
import SearchBar from "../../BlogPage/SearchBar";
import Navbar from '../../Navbar';
// import Footer from '../../Footer';
const Homee = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    return (
        <div>
            <Navbar/>
            {/* Page Header */}
            <Header />

            {/* Search Bar */}
            {/* <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            /> */}

            {/* Blog List & Empty View */}
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
    );
};

export default Homee;


