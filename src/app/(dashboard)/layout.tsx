import Link from "next/link";
import React from "react";

export default function DahsBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto grid grid-cols-12">
      <div className="col-span-3">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={"/cart"}>cart</Link>
          </li>
          <li>
            <Link href={"/account"}>Account</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}
