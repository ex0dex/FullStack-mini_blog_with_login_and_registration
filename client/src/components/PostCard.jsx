import React from 'react';


const PostCard = ({ post }) => {
    return (
        <div className='content'>
            
                <section className="post">
                    <header className="post-title">
                        <h4>
                            {post.title}
                        </h4>
                    </header>
                    <article className="post-description">
                        <p>
                            {post.description}
                        </p>
                    </article>
                    <button>Read more...</button>
                </section>
            
        </div>
    );
};

export default PostCard;