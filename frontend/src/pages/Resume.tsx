import { experienceItems } from "@/data/text";
import type { WorkExperience } from "@/lib/types";

const WItem = ({
  employer, //: string;
  jobTitle, //: string;
  startDate, //: string;
  endDate, //?: string;
  description, //: string[];
  url, //?: string;
  tools, //: IconsLisType[];
}: WorkExperience) => {
  return (
    <li>
      <h2>{jobTitle}</h2>
      <p>{employer}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{description}</p>
      <p>{url}</p>
      <p>{tools}</p>
    </li>
  );
};

export const Resume = () => {
  return (
    <div className="h-screen overflow-hidden border border-amber-500 py-18">
      <h1>This is my resume page</h1>
      <div>
        <p>stuf goes here</p>
        <ul>
          {experienceItems.map((item, idx) => {
            return <WItem key={`${item}--${idx}`} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};
