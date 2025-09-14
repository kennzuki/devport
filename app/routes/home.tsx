import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "devport" },
    { name: "description", content: "Welcome to devport!" },
  ];
}

export default function Home() {
  return <div className="">app</div>;
}
