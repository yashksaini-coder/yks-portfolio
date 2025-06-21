export interface OpenSourceContribution {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const user = {
  name: "Yash Kumar Saini",
  username: "Yash K. Saini",
  email: "yashksaini89@gmail.com",
  github: "https://github.com/yashksaini-coder",
  linkedin: "https://www.linkedin.com/in/yashksaini/",
  twitter: "https://www.x.com/yash_k_saini",

  contributions: [
  {
    id: 1,
    title: "daytonaio/sample-flask-groq-code-assistant",
    description:
      "Merged a Generative AI Flask web application with Groq Code Assistant integration to Daytona Dev Container project.",
    image: "https://avatars.githubusercontent.com/u/130513197?s=200&v=4",
    link: "https://github.com/daytonaio/sample-flask-groq-code-assistant/pull/1",
  },
  {
    id: 2,
    title: "mehul-m-prajapati/github_tracker",
    description:
      "Add custom React hooks for managing GitHub authentication, data fetching, and pagination, and refactors the Home component to utilize these hooks.",
    image: "https://avatars.githubusercontent.com/u/7879392?v=4",
    link: "https://github.com/mehul-m-prajapati/github_tracker/pull/35",
  },
  {
    id: 3,
    title: "recodehive/Support",
    description: "Custom invite github action for this Github Community inclusive for New beginners, and Data Science Enthusiasts.",
    image: "https://avatars.githubusercontent.com/u/85428829?s=200&v=4",
    link: "https://github.com/recodehive/Support/pull/490",
  }
] as OpenSourceContribution[],
};