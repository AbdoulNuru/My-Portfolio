import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Monitor,
  Smartphone,
  Settings,
  Package,
  Linkedin,
  GitHub,
  Twitter,
  Menu,
} from "react-feather";
import { skills } from "../utils/My-skills";
import MyResume from "../assets/Abdou's Resume.pdf";
import LoadingScreen from "./Loading";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2600);
  }, []);

  return (
    <>
      {loading === false ? (
        <LoadingScreen />
      ) : (
        <>
          <nav
            id="navbar"
            className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky"
          >
            <div className="container">
              {/* Logo container */}
              <a className="logo" href="#/" style={{ width: "200px" }}>
                Abdoul Nuru
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Menu />
              </button>
              {/* end button */}

              <div
                className="collapse navbar-collapse navigation"
                id="navbarCollapse"
              >
                <ul id="navbar-navlist" className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Home
                    </a>
                  </li>
                  <li className="list-inline-item me-2">
                    <a href="https://www.linkedin.com/in/abdou-nuru-niyigena/">
                      <Linkedin style={{ width: "18px", marginTop: "5px" }} />
                    </a>
                  </li>

                  <li className="list-inline-item me-2">
                    <a href="https://twitter.com/nuru_abdoul">
                      <Twitter style={{ width: "18px", marginTop: "5px" }} />
                    </a>
                  </li>
                  <li className="list-inline-item me-2">
                    <a href="https://github.com/AbdoulNuru">
                      <GitHub style={{ width: "18px", marginTop: "5px" }} />
                    </a>
                  </li>
                  {/* end nav item */}
                </ul>
                {/* className="top-right text-right list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social" */}
              </div>
            </div>
            {/* end container */}
          </nav>
          {/* end navbar */}
          {/* Navbar End */}
          {/* Personal Info  */}
          {/* Tangira Kwivuga */}
          <div
            className="hero-area position-relative bg-half-120 pb-0"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/murugo/home-shape.png)` }}
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7 align-items-center">
                  <div className="title-heading mt-4 py--50">
                    <h1 className="heading">
                      <span style={{ color: "#007BFF" }}>
                        {" "}
                        I am a Software Engineer, and I do
                      </span>
                      <Typewriter
                        options={{
                          strings: [
                            "Front-end development",
                            "Backend development",
                            "Mobile development",
                            "DevOps",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </h1>
                    <p className="pera-title text-light-muted">
                    Passionate Software Engineer with over 4+ years of hands-on experience in crafting robust and innovative solutions. Dedicated to pushing the boundaries of technology and delivering exceptional results through meticulous coding and problem-solving. Let's code the future together!
                      {/* a track record of success
                  in the information technology and services industry.
                  Expert in NodeJS, ReactJS, SpringBoot, Agile Software Development,
                  Test Driven Development, Continuous Integration, and Continuous Delivery,                
                  and SQL/NoSQL Databases. With a bachelor's degree in software engineering. */}
                    </p>
                    <div className="hero-btn mt-4 pt-2">
                      <a
                        href="mailto:abdoulniyigena@gmail.com"
                        className="btn btn-primary rounded me-2 mb-2"
                      >
                        Hire Me
                      </a>
                      <a
                        href={MyResume}
                        className="btn btn-outline-primary rounded text-white mb-2"
                      >
                        Download CV <Download className="fea icon-sm" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="home-image">
                    <img
                      src="img/murugo/home.png"
                      alt=""
                      className="img-fluid mx-auto position-relative"
                      style={{ visibility: "hidden" }}
                    />
                  </div>
                </div>
                {/* Ifoto yomurugo */}
                {/* <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="home-image">
                <img
                  src="images/home/home.png"
                  alt=""
                  className="img-fluid mx-auto position-relative"
                />
              </div>
            </div> */}
              </div>
            </div>
          </div>
          {/* Soza Kwivuga */}
          {/* Umwirondoro */}
          <section className="bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="card public-profile border-0 rounded shadow"
                    style={{ zIndex: 1 }}
                  >
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4 text-md-start">
                          {/* <img src="images/client/05.jpg" class="avatar avatar-large rounded-circle shadow d-block mx-auto" alt=""> */}
                          <div className="about-details key-feature bg-light">
                            <div className="media-body content">
                              <h6 className="title mb-2">Personal Details</h6>
                              <div className="bor-bottom mt-2 mb-2"></div>
                              <p className="text-muted mb-2 mt-3 font-14">
                                <a href={() => false} className="text-black">
                                  Email:{" "}
                                </a>{" "}
                                abdoulniyigena@gmail.com
                              </p>
                              <p className="text-muted mb-2 mt-3 font-14">
                                <a href={() => false} className="text-black">
                                  Phone:{" "}
                                </a>{" "}
                                +250 788 470370
                              </p>
                              <p className="text-muted mb-2 font-14">
                                <a href={() => false} className="text-black">
                                  Languages:{" "}
                                </a>{" "}
                                English, French, Swahili, Kinyarwanda
                              </p>
                              <p className="text-muted mb-0 font-14">
                                <a href={() => false} className="text-black">
                                  Nationality:{" "}
                                </a>{" "}
                                Rwandan
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                          <div className="row align-items-end">
                            <div className="col-md-12 text-md-start mt-4 mt-sm-0">
                              <h4 className="heading me-2">
                                I Am{" "}
                                <span
                                  className="element text-primary"
                                  data-elements="Web Designer, Web Developer, Photographer"
                                ></span>
                                <span
                                  id="typed"
                                  className="text-primary"
                                ></span>
                              </h4>
                              <p className="text-light-muted mt-2">
                              An Experienced Engineer with a proven track record in the dynamic 
                              realms of information technology and services. Proficient in Node.js, React, Next.js
                              Spring Boot, and adept in Agile methodologies, Test-Driven Development, Continuous Integration, 
                              and SQL/NoSQL databases. Passionate about leveraging cutting-edge 
                              technologies to drive innovation and exceed client expectations.
                              </p>
                              <img
                                src={process.env.PUBLIC_URL + "/img/signature.png"}
                                height="65"
                                alt=""
                                style={{ marginLeft: "-23px" }}
                              />
                            </div>
                            {/* end col */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </section>
          {/* end section */}
          {/* Aho umwirondoro urangirira */}

          {/* Serivisi */}
          <section className="section bg-light" id="services">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <div className="container-title text-center mb-4 pb-2">
                    <div className="titles">
                      <h2 className="title text-capitalize mb-4">
                        Services that I Provide
                      </h2>
                      <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">
                        I am always striving to provide exceptional services to
                        my <br /> clients.
                      </p>
                      <span></span>
                    </div>
                  </div>
                </div>
                {/* end col*/}
              </div>
              {/*end row*/}
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="feature-widget text-left rounded">
                    <div className="services-icon text-primary mb-3">
                      <Monitor className="fea icon-md" />
                    </div>
                    <div className="services-texts">
                      <h3 className="title mb-3">
                        Web & Dashboards Development
                      </h3>
                      <p className="text-light-muted mb-4">
                        Design, Develop and Support of web solutions that enable
                        digital transformation and improve your business
                        workflows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="feature-widget text-left rounded">
                    <div className="services-icon text-primary mb-3">
                      <Smartphone className="fea icon-md" />
                    </div>
                    <div className="services-texts">
                      <h3 className="title mb-3">
                        Mobile Applications Development
                      </h3>
                      <p className="text-light-muted mb-1">
                        Enhance mobile users' experience by providing
                        well-tailored mobile apps. From native android and ios
                        apps to cross-platform apps, I've got you covered.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="feature-widget text-left rounded">
                    <div className="services-icon text-primary mb-3">
                      <Settings className="fea icon-md" />
                    </div>
                    <div className="services-texts">
                      <h3 className="title mb-3">Backend Development</h3>
                      <p className="text-light-muted mb-4">
                        I deal with everything server-side, including APIs,
                        databases and servers, and leveraging a variety of
                        skills I've acquired over the years.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="feature-widget text-left rounded">
                    <div className="services-icon text-primary mb-3">
                      <i data-feather="layout" className="fea icon-md"></i>
                      <Package className="fea icon-md" />
                    </div>
                    <div className="services-texts">
                      <h3 className="title mb-3">Project management</h3>
                      <p className="text-light-muted mb-4">
                        Planning, coordinating, and executing projects in
                        accordance with specific requirements and constraints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*end row*/}
            </div>
          </section>
          {/*End Start*/}
          {/* Aho serivisi zirangirira */}

          {/* Uburambe ku kazi */}
          <section className="section" id="resume">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4">
                  <div className="work-content mt-4">
                    <h2 className="text-capitalize">Work Experience</h2>
                    <p className="mb-0 text-light-muted">
                      Extensive experience with all stages of the development
                      cycle for dynamic web, api's and mobile projects.
                    </p>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="row">
                    <div className="main-timeline">
                    <div className="timeline mt-4">
                        <a href={() => false} className="timeline-content">
                          <div className="timeline-icon text-primary">
                            {/* <Navigation className="fea icon-md" /> */}
                            <img
                              src={process.env.PUBLIC_URL + "/img/bklogo.png"}
                              className="fea icon-md"
                              style={{ borderRadius: "15px" }}
                              alt="gtbank logo"
                            />
                          </div>
                          <h3 className="title mb-0">Software Engineer</h3>
                          <small className="company">
                            Bank Of Kigali
                          </small>
                          <span className="badge skill-badge education-badge margin-50 badge-light">
                            Sept 2022 - Present
                          </span>
                          {/* <p className="description text-light-muted mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer males uada tellus lorem, et condimentum
                      </p> */}
                        </a>
                      </div>
                      <div className="timeline mt-4">
                        <a href={() => false} className="timeline-content">
                          <div className="timeline-icon text-primary">
                            <img
                              src={process.env.PUBLIC_URL + "/img/equitylogo.png"}
                              className="fea icon-md2"
                              alt="equitybank logo"
                            />
                            {/* <Feather className="fea icon-md" /> */}
                          </div>
                          <h3 className="title mb-0">Software Engineer</h3>
                          <small className="company">
                            Equity Bank Rwanda PLC
                          </small>
                          <span className="badge skill-badge education-badge badge-light">
                            Jun 2021 - Sept 2022
                          </span>
                          {/* <p className="description text-light-muted mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer males uada tellus lorem, et condimentum
                      </p> */}
                        </a>
                      </div>
                      <div className="timeline mt-4">
                        <a href={() => false} className="timeline-content">
                          <div className="timeline-icon text-primary">
                            {/* <Navigation className="fea icon-md" /> */}
                            <img
                              src={process.env.PUBLIC_URL + "/img/gtlogo.png"}
                              className="fea icon-md"
                              style={{ borderRadius: "15px" }}
                              alt="gtbank logo"
                            />
                          </div>
                          <h3 className="title mb-0">Software Engineer</h3>
                          <small className="company">
                            Guaranty Trust Bank (Rwanda) plc
                          </small>
                          <span className="badge skill-badge education-badge margin-50 badge-light">
                            Jun 2020 - Jun 2021
                          </span>
                          {/* <p className="description text-light-muted mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer males uada tellus lorem, et condimentum
                      </p> */}
                        </a>
                      </div>
                      <div className="timeline mt-4">
                        <a href={() => false} className="timeline-content">
                          <div className="timeline-icon text-primary">
                            {/* <Package className="fea icon-md" /> */}
                            <img
                              src={process.env.PUBLIC_URL + "/img/andelalogo.png"}
                              className="fea icon-md"
                              alt="andela logo"
                            />
                          </div>
                          <h3 className="title mb-0">Software Engineer</h3>
                          <small className="company">Andela</small>
                          <span className="badge skill-badge education-badge badge-light">
                            Dec 2019 - Jun 2020
                          </span>
                          {/* <p className="description text-light-muted mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer males uada tellus lorem, et condimentum
                      </p> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end container*/}
          </section>
          {/*end section*/}

          {/* Aho burambe ku kazi burangirira */}

          {/* Ubuhanga */}
          <section className="section">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="container-title text-center mb-4 pb-2">
                  <div className="titles">
                    <h2 className="title text-capitalize mb-4">
                      Languages, Frameworks, Libraries and Tools
                    </h2>
                    <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">
                      These are the tools I leverage to bring my projects to
                      life. They include software development tools, project
                      management tools, version control tools, and ci/cd tools,
                      among others.
                    </p>
                    <span></span>
                  </div>
                </div>
              </div>
              {/* end col*/}
            </div>
            {/*end row*/}
            <div className="show-skills">
              {skills.map((skill) => (
                <div
                  className="skill animate__animated animate__bounceIn animate__delay-500ms"
                  key={skill.id}
                >
                  <>
                    {skill.logo}
                    {/* <img src={skill.logo} alt={skill.name} /> */}
                    <div className="skill-name">{skill.name}</div>
                    {/* <div className="skill-level">{skill.level}</div> */}
                  </>
                </div>
              ))}
            </div>
          </section>

          {/* Aho ubuhanga burangirira */}

          {/* Akazi kanjye */}
          {/* <section
            className="section bg-light"
            id="projects"
            style={{ backgroundImage: "url(img/bg-pattern.png)" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <div className="container-title text-center mb-4 pb-2">
                    <div className="titles">
                      <h2 className="title text-capitalize mb-4">My Work</h2>
                      <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">
                        Listed below are a few of the projects on which <br />I
                        have worked on.
                      </p>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                    <div className="card-body p-0">
                      <img
                        src="img/comingsoon.jpg"
                        className="img-fluid"
                        alt="work"
                      />
                      <div className="overlay-work bg-dark"></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                    <div className="card-body p-0">
                      <img
                        src="img/comingsoon.jpg"
                        className="img-fluid"
                        alt="work"
                      />
                      <div className="overlay-work bg-dark"></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                  <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                    <div className="card-body p-0">
                      <img
                        src="img/comingsoon.jpg"
                        className="img-fluid"
                        alt="work"
                      />
                      <div className="overlay-work bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Aho akazi kanjye karangirira */}

          {/* Nyandikira */}
          <section
            className="section pb-0"
            id="contact"
            style={{ marginBottom: "5%" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <div className="container-title text-center mb-4 pb-2">
                    <div className="titles">
                      <h2 className="title text-capitalize mb-4">Contact Me</h2>
                      <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">
                        Whether you want to hire me, collaborate on a project,
                        or have any other questions, please contact me and I
                        will return your calls or respond to your emails as soon
                        as possible.
                      </p>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mt-4 pt-2">
                  <div className="contact-detail text-center">
                    <div className="icon">
                      <Phone className="fea icon-md" />
                    </div>
                    <div className="content mt-4">
                      <h5 className="title">Phone</h5>
                      <p className="text-light-muted">
                        You can reach me at this number if you want to
                        collaborate or hire me.
                      </p>
                      <a href={() => false} className="text-primary">
                        +250 788 470370
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4 pt-2">
                  <div className="contact-detail text-center">
                    <div className="icon">
                      <Mail className="fea icon-md" />
                    </div>
                    <div className="content mt-4">
                      <h5 className="title">Email</h5>
                      <p className="text-light-muted">
                        You can send me an email and I will get back to as soon
                        as possible.
                      </p>
                      <a href={() => false} className="text-primary">
                        abdoulniyigena@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4 pt-2">
                  <div className="contact-detail text-center">
                    <div className="icon">
                      <MapPin className="fea icon-md" />
                    </div>
                    <div className="content mt-4">
                      <h5 className="title">Location</h5>
                      <p className="text-light-muted">Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="section pt-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="custom-form mb-sm-30">
                    <form
                      method="post"
                      action=""
                      name="myForm"
                      // onSubmit="return validateForm()"
                    >
                      <p id="error-msg"></p>
                      <div id="simple-msg"></div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="col-lg-12 col-md-6">
                              <div className="form-group">
                                <input
                                  name="name"
                                  id="name"
                                  type="text"
                                  className="form-control border rounded"
                                  placeholder="First Name :"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                              <div className="form-group">
                                <input
                                  name="email"
                                  id="email"
                                  type="email"
                                  className="form-control border rounded"
                                  placeholder="Your email :"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <input
                                  name="subject"
                                  id="subject"
                                  className="form-control border rounded"
                                  placeholder="Your subject :"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control border rounded"
                              placeholder="Your Message :"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 text-end">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn btn-primary rounded"
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Aho nyandikira irangirira */}

          {/* Footer */}
          <footer className="footer footer-bar bg-black">
            <div className="container text-foot text-center">
              <p className="mb-0 text-white-50">
                © {new Date().getFullYear()} Designed by
                <a href="/" className="text-white-50">
                  {" "}
                  Abdoul Nuru
                </a>
              </p>
            </div>
          </footer>
          {/* Aho footer irangirira */}
        </>
      )}
    </>
  );
};

export default Home;
