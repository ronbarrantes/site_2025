import { Icon } from "@/components/icon";
import { experienceItems, workHistoryText } from "@/data/text";
import type { WorkExperience } from "@/lib/types";

const WItem = ({
  employer,
  jobTitle,
  startDate,
  endDate,
  description,
  url,
  tools,
}: WorkExperience) => {
  return (
    <li>
      <h2>{jobTitle}</h2>
      <span>
        {employer}/{startDate}
      </span>
      {endDate && <p>{endDate}</p>}
      {description.map((item, idx) => (
        <p key={`${startDate}-${idx}`}>{item}</p>
      ))}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {url}
        </a>
      )}
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
            return (
              <WItem
                key={`${item.employer}-${item.jobTitle}-${idx}`}
                {...item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
