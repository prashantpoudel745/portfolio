const About = () => {
  return (
    <div className="mt-5">
      <div className="lg:flex items-center justify-center">
        <div className="lg:px-28 sm:px-10 lg:w-3/4">
          <h1 className="lg:text-5xl sm:text-4xl text-center py-5 font-mono font-extrabold">
            About Me
          </h1>
          <div className="text-xl mb-5">
            I am a passionate web developer with a solid foundation in building
            dynamic, responsive, and user-friendly web applications. My
            expertise lies in the MERN stack (MongoDB, Express.js, React,
            Node.js), which allows me to create robust and scalable full-stack
            applications. Alongside my web development skills, I am also an
            enthusiast in App development , machine learning, exploring its
            integration into modern web solutions to deliver innovative and
            intelligent applications.
          </div>
          <div className="text-xl mb-5">
            Currently, I am pursuing my studies at Pulchowk Engineering Campus,
            which has provided me with a strong academic foundation and
            opportunities to work on cutting-edge technologies. My ambition is
            to blend my web development proficiency with machine learning
            insights to contribute to impactful projects that solve real-world
            problems.
          </div>
        </div>
        <div>
          <img
            className="rounded-md lg:w-1/2 mt-10 sm:px-10"
            style={{
              height: "525px",
              width: "854px",
            }}
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
