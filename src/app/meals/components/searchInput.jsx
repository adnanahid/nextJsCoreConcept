"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("query") || "");

  useEffect(() => {
    if (search) {
      router.push(`?query=${search}`);
    }
  }, [search, router]);

  return (
    <input
      type="text"
      value={search}
      placeholder="Search by menu"
      onChange={(e) => setSearch(e.target.value)}
      className="border text-center border-gray-700 w-full p-2 rounded-xl"
    />
  );
}
