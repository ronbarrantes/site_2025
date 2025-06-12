export const About = () => {
  return (
    <div className="h-screen overflow-hidden border border-amber-500 py-18">
      <div className="flex flex-col gap-3 border border-red-500">
        <h1>Hi! my name is Ron</h1>
        <img
          className="w-40 rounded-4xl"
          alt="Image of my face"
          src="img/ron_professional.jpeg"
        />
        <p>
          I am an Engineer with a strong eye for design, an insatiable
          curiosity, and a passion for learning and personal growth.
        </p>
        <p>
          I have 6 years of development experience, 8 years working with
          JavaScript and Node, 5 year working with TypeScript, and over 10 years
          working in various aspects of tech.
        </p>
        <p>
          I love how the industry is constantly evolving. In the nonstop pace of
          innovation, I want to build products that have an impact for good,
          that will advance the industry forward, and that bring people
          together.
        </p>
        <p>
          In my personal life, I am a coffee drinking, tech nerd who loves
          cooking and traveling. In 2024, me and my family lived in Costa Rica
          trying out the nomad live. In a former live I was a Salsa and Bachata
          dance instructor.
        </p>
      </div>
    </div>
  );
};
