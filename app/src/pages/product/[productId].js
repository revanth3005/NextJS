import React from "react";

const productId = ({ data }) => {
  return (
    <div>
      sai
      {data.id}
    </div>
  );
};

export default productId;

export async function getStaticProps(context) {
  const { params } = context;

  //api call
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.productId}`
  ).then((res) => res.json());
  return {
    props: {
      data: data,
    },
  };
}
export async function getStaticPaths() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );
  const paths = data.map((post) => {
    return {
      params: {
        productId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    // [
    //   // String variant:
    //   "/product/1",
    //   // Object variant:
    //   { params: { productId: "1" } },
    // ],
    fallback: true,
  };
}
