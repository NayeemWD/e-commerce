import React, { useState } from "react";
import SectionHeading from "../../Components/SharedComponents/SectionHeading";
import img12 from "../../assets/image/12.jpg";
import img13 from "../../assets/image/13.jpg";
import img14 from "../../assets/image/14.jpg";

const demoPosts = [
  {
    id: 1,
    title: "Designing Better E‑Commerce UX",
    date: "Dec 10, 2025",
    excerpt:
      "Small changes that can increase conversions and improve customer satisfaction.",
    content:
      "In this post we cover practical UX improvements (navigation, CTAs, product imagery) and how they impact metrics like bounce rate and conversion.",
    img: img12,
  },
  {
    id: 2,
    title: "How to Photograph Product Images",
    date: "Dec 15, 2025",
    excerpt:
      "Simple tips for clean, consistent product photography that sells.",
    content:
      "Lighting, backgrounds, and framing matter. We share a checklist you can apply with minimal gear to get professional-looking results.",
    img: img13,
  },
  {
    id: 3,
    title: "Holiday Sales: Planning & Execution",
    date: "Dec 20, 2025",
    excerpt:
      "A quick guide to planning promotions, inventory, and marketing for peak season.",
    content:
      "Plan early, segment your offers, and ensure stock and fulfillment are ready. This post outlines a simple timeline and checklist.",
    img: img14,
  },
];

const Blog = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="container mx-auto py-12">
      <SectionHeading
        heading="Our"
        colorHeading="Blog"
        discription="Latest news & tips from our store"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {demoPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white shadow-sm rounded overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500">{post.date}</p>
              <h4 className="text-lg font-semibold mt-1">{post.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>

              <button
                className="mt-3 text-sm cp"
                onClick={() => setOpenId(openId === post.id ? null : post.id)}>
                {openId === post.id ? "Show less" : "Read more"}
              </button>

              {openId === post.id && (
                <div className="mt-3 text-sm text-gray-700">{post.content}</div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
