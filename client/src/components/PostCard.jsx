import React from 'react';


const PostCard = ({ post }) => {
    return (
        <div className='content'>
            
                <section className="post">
                    <header className="post-title">
                        <h4>
                            {post.title}
                        </h4>
                        <img style={{
                            width:"600px",
                            height:"400px"
                        }} src={"http://localhost:5000/" + post.image} />
                    </header>
                    <article className="post-description">
                        <p>
                            {post.description}
                        </p>
                    </article>
                    <article className="post-description">
                        <p>
                            {post.post}
                        </p>
                    </article>
                    <button>Read more...</button>
                </section>
            
        </div>
    );
};

export default PostCard;