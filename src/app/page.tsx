import { Contributions } from "@/components/Contribution";
import GithubCalender from "@/components/GitHubCalendar";
import { Preview } from "@/components/Preview";
import { Separator } from "@/components/common/Seperator";
import Navbar from "@/components/common/navbar";


export default function Home() {
  return (
    <div>
      <Navbar />  
      <Preview />
      <Separator
        className="data-[orientation=horizontal]:h-1px"
        decorative={true}
       />
       <GithubCalender />
       <Separator
        className="data-[orientation=horizontal]:h-1px"
        decorative={true}
       />
       <Contributions />
    </div>
  );
}