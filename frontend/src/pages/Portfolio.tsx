import { portfolioItems } from "@/data/text";
import type { PortfolioItem } from "@/lib/types";

const PItem = ({
  name, description, 
  dateAdded, github, 
  link, tags, tools,
}: PortfolioItem) => {
  return (
    <li>
      <h2>{name}</h2>
      <span>{description}</span>
      <span>{dateAdded}</span>
      <span>{github}</span>
      <span>{link?.label}</span>
      <span>{link?.href}</span>
      <span>{tags}</span>
      <span>{tools}</span>
    </li>
  );
};

export const Portfolio = () => {
  console.log("ITEMS", portfolioItems);

  return (
    <div className="h-screen overflow-hidden border border-amber-500 py-18">
      <h1>This is my portfolio page</h1>
      <ul>
        {portfolioItems.map((item, idx) => {
          return <PItem key={`${item.name}--${idx}`} {...item} />;
        })}
      </ul>
    </div>
  );
};
