import React from "react";
import repoData from "../app/data.json";
import CollapseCard from "../components/CollapseCard";
const RepoPanel: React.FC = () => {
  return (
    <main className="flex w-full justify-center items-start flex-col">
      {repoData.map((repo: any, i) => {
        return (
          <section key={i} className="w-full">
            <CollapseCard
              srNo={repo.srNo}
              repoName={repo.repoName}
              techStack={repo.techStack}
              issues={repo.issues}
              issuesList={repo.issuesList}
              key={i}
            />
          </section>
        );
      })}
    </main>
  );
};
export default RepoPanel;
