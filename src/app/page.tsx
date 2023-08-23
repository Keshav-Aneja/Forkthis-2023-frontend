import React from "react";
import CollapseCard from "@/components/CollapseCard";
import ProgressCircular from "../components/ProgressCircular";
import RepoPanel from "@/sections/RepoPanel";
let progressData = [
  {
    name: "task",
    currVal: 400,
    totalVal: 600,
    color: "#7C4BC8",
  },
  {
    name: "repos",
    currVal: 7,
    totalVal: 16,
    color: "#22A385",
  },
  {
    name: "percentage",
    currVal: 400,
    totalVal: 600,
    color: "#5D74F1",
  },
];

export default function Home() {
  return (
    <main>
      <RepoPanel/>
    </main>
  );
}
