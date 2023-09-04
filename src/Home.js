import Bloglist from "./Bloglist";
import useFectch from "./useFecth";

const Home = () => {

    const { data: blogs, isLoading, error} = useFectch('http://localhost:8000/blogs')
  
    return (
        <div className="home">
            {isLoading && <div>Loading....</div>}
            {error && <div>{error}</div>}

            {blogs && <Bloglist blogs={blogs} title="Blog list" />}

            {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title ="Relevant blogs"/> */}
        </div>
    );
}

export default Home;