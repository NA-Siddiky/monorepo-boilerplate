"use client";

import { Content } from "@soppiya/elemix";
import FetchPosts from "./textComponent";

export default function Home() {
  console.log(Content.capitalize("hello"));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FetchPosts />
    </main>
  );
}
