import React from "react";

import PageContainer from "@/components/common/PageContainer";
import ListView from "@/components/common/ListView";

const PostsPage = () => {
  const titles = [
    "씨피카 듣기",
    "focal length?",
    "자유",
  ];

  const items = titles.map((title) => (
    <PostLink href="/">{title}</PostLink>
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
      <a href={href}>{children}</a>
    </li>
  );
};

export default PostsPage;
