"use client";

import React from "react";

import Navigator from "@/components/layout/Navigator";

const AppHeader = () => {
  return (
    <>
      <Navigator.Namebox />
      <Navigator />
    </>
  );
};

export default AppHeader;
