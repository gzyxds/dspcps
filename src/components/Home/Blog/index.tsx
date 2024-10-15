import React from "react";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
//import { Blog } from "@/types/blog";
import type { Blog } from "@/types/blog";

const posts: Blog[] = [
  {
    _id: 1,
    title: "如何打造爆款短剧素材",
    metadata: "本文探讨了最新的技术趋势和创新，以及它们如何影响我们的日常生活和工作方式。",
    mainImage: "/images/blog/blog-1.png",
    author: "张三",
    publishedAt: "2022-01-01",
  },
  {
    _id: 2,
    title: "短剧CPS问题答疑及系统使用指南",
    metadata: "本文分析了人工智能在医疗诊断、药物研发等方面的应用，以及面临的伦理和技术挑战。",
    mainImage: "/images/blog/blog-2.png",
    author: "李四",
    publishedAt: "2022-01-01",
  },
  {
    _id: 3,
    title: "成为我们的短剧代理，共创精彩人生！",
    metadata: "本文讨论了企业在实现可持续发展目标中的角色，以及如何将环保理念融入商业策略。",
    mainImage: "/images/blog/blog-3.png",
    author: "王五",
    publishedAt: "2022-01-01",
  },
];

const Blog = async () => {
  return (
    <section
      className="overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5"
      id="blog"
    >
      {/* <!-- section title --> */}
      <SectionHeader
        title={"最新博客与新闻"}
        description="我们为您带来最新的行业动态、技术趋势和深度分析，助您洞察未来，把握机遇。"
      />

      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {/* <!-- blog item --> */}
          {posts?.length > 0 ? (
            posts
              ?.slice(0, 3)
              .map((item, key: number) => <BlogItem blog={item} key={key} />)
          ) : (
            <p>暂无文章</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
