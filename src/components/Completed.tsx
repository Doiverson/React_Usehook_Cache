"use client"
import { use } from "react";
import { fetchUser } from "@/lib/fetchUser";
import { useUserId } from "@/lib/UserIdContext";

function Completed() {
  const id = useUserId();
  if (!id) {
    return null;
  }
  const data = use(fetchUser(id));
  return <div>Completed: {data.completed}</div>
}

export default Completed;