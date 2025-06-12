import { Icon } from "@/components/icon";
import { experienceItems, workHistoryText } from "@/data/text";
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
      <span>
        {employer}/{startDate}
      </span>
      <p>{endDate}</p>
      {description.map((item, idx) => (
        <p key={`${startDate}-${idx}`}>{item}</p>
      ))}
      <p>{url}</p>
      <ul className="flex">
        {tools.map((item, idx) => (
          <li key={`${startDate}-${item}-${idx}`}>
            <Icon tooltip name={item} />
          </li>
        ))}
      </ul>
    </li>
  );
};

export const Resume = () => {
  return (
    <div className="h-screen overflow-hidden border border-amber-500 py-18">
      <h1>{workHistoryText.title}</h1>
      <div>
        <p>{workHistoryText.description}</p>
        <ul>
          {experienceItems.map((item, idx) => {
            return <WItem key={`${item}--${idx}`} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};
