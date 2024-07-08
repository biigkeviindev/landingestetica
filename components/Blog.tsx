import { BlogEntries } from "@/constants";
import React from "react";

const Blog = () => {

  return (
    <section className="m-h-[30rem] flex flex-col items-center justify-center px-10 py-[2rem] lg:pt-[5rem] lg:mb-[10rem]">
      <div className="mb-10">
        <h2 className="section-title">BLOG</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {
          BlogEntries.map((blog) => (
            <ItemBlog blog={blog} />
          ))
        }
      </div>
    </section>
  );
};

const ItemBlog = ({ blog }: any) => {
  return (
    <div className="shadow-lg bg-[#f1f2f3] rounded-lg">
      <img src={blog.imagen} alt="" className="w-full mb-4 h-[400px]" />
      <div className="py-6 px-2">
        <h4 className="font-bold mb-3">
          {blog.title}
        </h4>
        <p className="mb-8">
          {blog.subtitle}
        </p>
        <a href={blog.url}>
          <button className="color-secondary ">LEER MÁS</button>
        </a>
      </div>
    </div>
  );
};
export default Blog;
