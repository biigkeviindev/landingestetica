import { BlogEntries } from "@/constants";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <section className="m-h-[30rem] flex flex-col items-center justify-center px-10 py-[2rem] lg:pt-[5rem] lg:mb-[10rem]">
      <div className="mb-10">
        <h2 className="section-title">BLOG</h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-2">
        {BlogEntries.map((blog, key) => (
          <ItemBlog blog={blog} key={key} />
        ))}
      </div>
    </section>
  );
};

const ItemBlog = ({ blog }: any) => {
  return (
    <div className="shadow-lg w-100 md:w-1/3 bg-[#f1f2f3] rounded-lg">
      <img src={blog.imagen} alt="" className="w-full mb-4 h-[400px]" />
      <div className="py-6 px-2">
        <h4 className="font-bold mb-3">{blog.title}</h4>
        <p className="mb-8">{blog.subtitle}</p>
        <Link href={blog.url}>
          <button className="color-secondary ">LEER MÁS</button>
        </Link>
      </div>
    </div>
  );
};
export default Blog;
