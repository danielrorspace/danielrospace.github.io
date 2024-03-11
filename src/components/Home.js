const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Introduction</h3>
            <h3 className="title">Senior Software Engineer</h3>
            <p className="desc">
            In my journey as a Senior Software Engineer, I've been driven by a passion for crafting innovative tech solutions that push boundaries. Proficient in <b><i>Ruby On Rails, Node.js, React, Vue, TypeScript, GraphQL, Apollo, AWS, and Lambda</i></b>, I've made significant contributions to projects redefining standards in software quality, performance, and scalability. My approach involves blending strategic insight with hands-on execution, aligning technology with business objectives to deliver tangible results.
            </p>
            <img src="img/signature.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
