import React from "react";

// {fallback:true}

// import { useRouter } from "next/router";

//////

const Post = ({ post }) => {
  // {fallback:true}

  // const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  //////

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

// getStaticPaths() is used to generate the paths that will be rendered to HTML at build time.

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    // ],
    paths,
    fallback: false,
  };
}

// getStaticProps() is used to fetch data at build time.
export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

/// {fallback:true}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//   );
//   const data = await response.json();

//   if (!data.id) {
//     return {
//       notFound: true,
//     };
//   }

//   console.log(`Generating page for /posts/${params.postId}`);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { postId: "1" } },
//       { params: { postId: "2" } },
//       { params: { postId: "3" } },
//     ],
//     fallback: true,
//   };
// }

//////

// {fallback:'blocking'}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//   );
//   const data = await response.json();

//   console.log(`Generating page for /posts/${params.postId}`);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { postId: "1" } },
//       { params: { postId: "2" } },
//       { params: { postId: "3" } },
//     ],
//     fallback: 'blocking',
//   };
// }

/////
