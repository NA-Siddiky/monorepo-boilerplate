'use client'

import Image from "next/image";
import FetchPosts from "./textComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FetchPosts/>
    </main>
  );
}
