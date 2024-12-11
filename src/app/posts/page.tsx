import React from "react";

import PageContainer from "@/components/common/PageContainer";
import ListView from "@/components/common/ListView";

const PostsPage = () => {
  const posts = [
    {
      title: "How DNS Server Works",
      tag: "네트워크",
    },
  ];

  const items = posts.map((post) => (
    <PostLink href="/">
      <span>{post.title}</span>
      <div className="p-2 py-1 bg-white rounded-lg border-[2px] border-solid border-black">
        {post.tag}
      </div>
    </PostLink>
  ));

  return (
    <PageContainer>
      <ListView>{items}</ListView>
    </PageContainer>
  );
};

const PostLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <a
        className="flex justify-between items-center"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export default PostsPage;
