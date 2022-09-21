import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/coin">Coin</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};

export default Header;
