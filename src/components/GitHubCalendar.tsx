"use client";

import GitHubCalendar from "react-github-calendar";
import Description from "./common/description";

function GithubCalender() {
  const themes = {
    blue: ["#161B22", "#0A2740", "#156B8A", "#58B2DC", "#A6E1FA"],
    purple: ["#161B22", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd"],
    cyan: ["#161B22", "#005F73", "#0A9396", "#94D2BD", "#E9F5DB"],
    indigo: ["#161B22", "#2C387E", "#3F51B5", "#7986CB", "#C5CAE9"]
  };

  return (
    <div className="space-y-4 py-8">
      <div className="flex flex-col items-start">
        <h2 className="text-3xl px-3 bg-violet-700 text-white">Metrics</h2>
        
      </div>
      <div className="flex justify-center text-white selection:text-violet-700 selection:bg-violet-200">
        <GitHubCalendar
          colorScheme="dark"
          fontSize={20}
          blockSize={11}
          hideColorLegend={true}
          hideMonthLabels={true}
          theme={{
            dark: themes.purple,
          }}
          username="yashksaini-coder"
        />
      </div>
    </div>
  );
}

export default GithubCalender;
