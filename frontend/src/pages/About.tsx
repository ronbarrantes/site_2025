import { about } from "@/data/text";

export const About = () => {
  return (
    <div className="h-screen overflow-hidden border border-amber-500 py-18">
      <div className="flex flex-col gap-3 border border-red-500">
        <h1>{about.title}</h1>
        <img
          className="w-40 rounded-4xl"
          alt="Image of my face"
          src="img/ron_professional.jpeg"
        />
        {about.description.map((item, idx) => (
          <p key={`about-item-${idx}`}>{item}</p>
        ))}
      </div>
    </div>
  );
};
