"use client"
import { use } from "react";
import { fetchUser } from "@/lib/fetchUser";
import { useUserId } from "@/lib/UserIdContext";

function Title() {
  const id = useUserId();
  if (!id) {
    return null;
  }
  const data = use(fetchUser(id));
  return <div>First: {data?.title}</div>
}

export default Title;