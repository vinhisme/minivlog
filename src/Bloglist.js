import { Link } from "react-router-dom";

const Bloglist = ({blogs, title}) => {
    // const blogs = props.blogs

    // const title = props.title
    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    <p>Writen by: {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;