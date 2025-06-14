import { Icon } from "@/components/icon";
import type { IconsLisType } from "@/components/icon/icons-list-files";
import { mediaLinks } from "@/data/text";
import type { Link } from "@/lib/types";

const ContactItem = ({ href, label }: Link) => {
  return (
    <a href={href} target="_blank">
      <Icon name={label as IconsLisType} aria-label={label} />
    </a>
  );
};

export const Contact = () => {
  // my contact information links things
  // if I create some server for email I can put it here

  return (
    <div className="h-screen overflow-hidden border border-amber-500 py-18">
      <h1>This is my contact page</h1>
      <div>
        <p>You can find me in the platforms below</p>
        <ul>
          {mediaLinks.map((item, idx) => (
            <li key={`contact-${item}--${idx}`}>
              <ContactItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
