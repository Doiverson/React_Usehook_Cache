import { cache } from "react";

export const fetchUser =  cache((id: number) =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
);