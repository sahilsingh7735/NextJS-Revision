import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <>
            <Link href={`posts/${post.id}`} passHref>
              <div key={post.id}>
                <h2>
                  {post.id} {post.title}
                </h2>
              </div>
            </Link>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}

export default PostList;
