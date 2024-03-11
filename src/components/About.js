import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`I am a seasoned full-stack developer with over 12 years of experience.
I'm from Glendale, AZ. I thrive on crafting dynamic web applications and interfaces that resonate with global audiences. With a keen eye for detail and a passion for innovation, I specialize in seamlessly integrating back-end functionality with sleek front-end designs.
`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Daniel Sanchez</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>Glendale, AZ</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+17652806378">(765) 280-6378</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:daniel.rorspace@gmail.com">
                      daniel.rorspace@gmail.com
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img/cv.jpg" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download Resume</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className="active">
                  <a href="#">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
            
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item active`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Agile Infoways</h5>
                          <span>( January 2018 - July 2023 )</span>
                        </div>
                        <h3>Senior Software Engineer</h3>
                        <ul>
                          <li>Worked on comprehensive React front-end site generation framework in the Deno ecosystem for creating scalable Ruby on Rails applications that can be transformed into minified rendered pages for improved SEO and deployability.</li>
                          <li>Wrote a memorized recursive algorithm to traverse React.js' component dependency tree, optimize build performance, and generate components in the appropriate reference order.</li>
                          <li>Involved in the development of Web Services using SOAP for sending and getting XML data.</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Sonatafy Technology</h5>
                          <span>( January 2015 - December 2017 )</span>
                        </div>
                        <h3>Senior Web Developer</h3>
                        <ul>
                          <li>Involved in developing Rails-API for the web applications using Ruby on Rails, HTML, XML, CSS, JavaScript, Angular.JS, Express.JS, React JS, and JQuery.</li>
                          <li>Worked with varieties of Relational Databases (RDBMS) like SQLite, MySQL, and PostgreSQL and NoSQL DBs like MongoDB.</li>
                          <li>Maintained Linux hosting environment, Apache web server and MySQL database server.</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>TechFabric</h5>
                          <span>( January 2013 - December 2014 )</span>
                        </div>
                        <h3>Web Developer</h3>
                        <ul>
                          <li>Developed virtual assistant applications for major customers. Worked closely with clients through the entire development cycle, gathering requirements, prototyping, implementing, testing, delivering, and supporting the application.</li>
                          <li>Created a scalable portable production-ready virtual web chat application. Researched, architected, and implemented speech recognition, text to speech, cross-browser compatibility, and reactive design</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
            </div>
          </div>

          <div className="resumo_fn_tabs">
            <div className="tab_header">
              <ul>
                <li className="active">
                  <a href="#">
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab_content">
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item active`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Arizona State University</h5>
                          <span>( 2008 — 2012 )</span>
                        </div>
                        <h3>Computer Science</h3>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
            </div>
          </div>

          <div className="resumo_fn_tabs">
            <div className="tab_header">
              <ul>
                <li className="active">
                  <a href="#">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab_content">
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item active`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  {/* Ruby on Rails */}
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">Ruby on Rails</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* React */}
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">React.js</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Node.js */}
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">Node.js</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "10%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>

                  {/* PostgreSQL */}
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">PostgreSQL</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>

                  {/* TypeScript */}
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">TypeScript</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>

                  {/* GraphQL */}
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">GraphQL</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Tailwind CSS */}
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">Tailwind CSS</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Python */}
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">Python</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>

                  {/* AWS Lambda */}
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">AWS Lambda</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Golang */}
                  <div className="progress_item open" data-value={60}>
                    <div className="item_in">
                      <h3 className="progress_title">Golang</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "40%" }}
                      >
                        60%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "60%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Java */}
                  <div className="progress_item open" data-value={60}>
                    <div className="item_in">
                      <h3 className="progress_title">Java</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "40%" }}
                      >
                        60%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "60%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
