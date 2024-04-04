import Link from "next/link";
import React from "react";

const product = ({ data }) => {
  return (
    <div>
      product name is
      {data?.map((item) => {
        return (
          <Link
            href={`product/${item.id}`}
            key={item.id}
            style={{
              padding: 2,
              border: "1px solid red",
            }}
          >
            {item.id}
          </Link>
        );
      })}
      <br />
    </div>
  );
};

export default product;

//static-site-generation
export async function getStaticProps(context) {
  //api call
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  return {
    props: {
      data: data.slice(0, 3),
    },
  };
}
