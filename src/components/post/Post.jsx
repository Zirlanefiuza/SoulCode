import PropTypes from 'prop-types';
import './Post.css';

function Post({ title, description, image }) {
  return (
    <article className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-description">{description}</p>
      <img className="post-image" src={image} alt={title} />
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Post;
