import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import "./blog.css";

const Blog = (props) => {
  const { _id, name, auther, description, body } = props.blog;
  const navigate = useNavigate();

  const handleDelete = async () => {
    await userRequest
      .delete(`/blogs/${_id}`)
      .then((res) => res.data)
      .then(() => window.location.reload() && navigate("/"));
  };
  return (
    <div className="card">
      <article>By {auther}</article>
      <h3>{name}</h3>
      <p className="disc">{description}</p>
      <p id="body">{body}</p>
      <div className="btn">
        <Link to={`/blogs/${_id}`}>
          <button>Update</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Blog;
