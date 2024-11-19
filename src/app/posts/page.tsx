import PageContainer from "@/components/common/PageContainer";
import React from "react";

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
      <ul className="w-full h-full space-y-[6px]">
        {items}
      </ul>
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
