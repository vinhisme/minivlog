import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');

    const [body, setBody] = useState('');

    const [author, setAuthor] = useState('mario');

    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author }

        setLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog Added');

            setLoading(false);

            navigate('/');
        })
    }
    return (
        <div className="create">
            <h2>Create new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""> Blog title: </label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor=""> Blog body: </label>
                <textarea type="text" required value={body} onChange={(e) => setBody(e.target.value)} />

                <label htmlFor=""> Blog author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Adding blog....</button>}

            </form>
        </div>
    );
}

export default Create;