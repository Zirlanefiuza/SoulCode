import Post from '../post/Post';
import './Blog.css';

function Blog() {

    const post = [
        {
          title: 'Arvores Vermelha',
          description: 'Floresta colorida',
          image: 'src/assets/img/floresta vermelha.png'
        },
        {
          title: 'Pinheiros',
          description: 'Muito verde!',
          image: 'src/assets/img/verde.png'
        },
        {
          title: 'Amazonas',
          description: 'A mais bela!',
          image: 'src/assets/img/floresta.png'
        }
      ];

    return (
      <section className="blog">
      {post.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          description={post.description}
          image={post.image}
        />
      ))}
    </section>
    )
}

export default Blog;