"use client";

import { styles } from "@/lib/utils";
import { format } from "date-fns";
import React from "react";

const SinglePost = ({ post }: any) => {
  return (
    <React.Fragment>
      <div className="container mx-auto max-w-screen-md py-8 flex justify-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-2">{`${format(
            new Date(post.date),
            "MMM dd, yyyy"
          )}`}</p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg mb-4"
          />

          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default SinglePost;
