import classNames from "classnames";

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
  className,
}: WorkExperience & { className: string }) => {
  return (
    <div
      className={classNames(
        "glass flex flex-col gap-2 rounded-3xl border border-slate-950/5 px-5 py-3 dark:border-white/10",
        className
      )}
    >
      <h2 className="font-semibold">{jobTitle}</h2>
      <div className="flex gap-2">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-fuchsia-700 underline hover:no-underline dark:text-fuchsia-400"
          >
            {employer}
          </a>
        ) : (
          <span>{employer}</span>
        )}
        <span className="">::</span>
        <span>{`${startDate} | ${endDate ? endDate : "Present"}`}</span>
      </div>

      {description.map((item, idx) => (
        <p key={`${startDate}-${idx}`}>{item}</p>
      ))}
      <span>Tools used:</span>
      <ul className="flex gap-3">
        {tools.map((item, idx) => (
          <li key={`${startDate}-${item}-${idx}`}>
            <Icon tooltip name={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Resume = () => {
  return (
    <div className="flex h-screen flex-col gap-3 overflow-hidden overflow-y-scroll pt-18 pb-10">
      <h1>{workHistoryText.title}</h1>
      <p>{workHistoryText.description}</p>
      <div>
        {/*        <ul className="flex w-full flex-col flex-wrap gap-8 border border-red-600 md:flex-row md:gap-0">*/}
        <ul className="flex flex-col md:flex-row md:flex-wrap">
          {experienceItems.map((item, idx) => {
            return (
              <li
                key={`${item.employer}-${item.jobTitle}-${idx}`}
                className="flex lg:w-1/2"
              >
                <WItem {...item} className="md:m-2" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
