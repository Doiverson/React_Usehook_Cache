"use client";
import { useState } from "react";
import Title from "@/components/Title";
import Completed from "@/components/Completed";
import { UserIdProvider } from "../lib/UserIdContext";

export default function Home() {
  const [userId, setUserId] = useState(1)
  return (
    <main>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>
      <UserIdProvider userId={userId}>
        <Title />
        <Completed />
      </UserIdProvider>
    </main>
  );
}