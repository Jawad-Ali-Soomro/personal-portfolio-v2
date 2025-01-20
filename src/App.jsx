import { BiLink } from "react-icons/bi";
import "./App.css";
import {
  BsAsterisk,
  BsEye,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY > 100) & (window.scrollY <= 399)) {
        setActiveNav("about");
      } else if (window.scrollY > 400) {
        setActiveNav("projects");
      } else {
        setActiveNav("");
      }
    };
    console.log(activeNav);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <div className="main-container flex col">
      <div className="header flex">
        <div className="nav flex" id={activeNav === "" ? "active" : ""}>
          All
        </div>
        <div className="nav flex" id={activeNav === "about" ? "active" : ""}>
          About
        </div>
        <div className="nav flex" id={activeNav === "projects" ? "active" : ""}>
          Projects
        </div>
      </div>
      <div className="cards flex col">
        <div className="top-cards flex">
          <div className="left-card flex col">
            <div className="top-profile flex">
              <img
                src="https://avatars.githubusercontent.com/u/142707756?v=4"
                alt=""
              />
              <h2>Jawad Ali</h2>
            </div>
            <p>
            I am a skilled MERN stack developer with expertise in building modern, user-friendly, and high-performance web applications. I specialize in creating seamless solutions, whether it's an e-commerce site, a blockchain-based application, or an innovative art marketplace. My goal is to deliver projects that exceed your expectations. Let's collaborate to bring your ideas to life!
            </p>
          </div>
          <div className="right-cards flex col">
            <div className="right-top-top flex">
              <marquee behavior="rtl" direction="rtl">
                <p>
                  <BsAsterisk className="icons-small" /> Personal{" "}
                  <span>Portfolio</span>
                  <BsAsterisk className="icons-small" /> Personal{" "}
                  <span>Portfolio</span>
                  <BsAsterisk className="icons-small" /> Personal{" "}
                  <span>Portfolio</span>
                  <BsAsterisk className="icons-small" /> Personal{" "}
                  <span>Portfolio</span>
                </p>
              </marquee>
            </div>
            <div className="right-top-bottom flex">
              <div className="map-card flex">
                <img
                  src="https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/static/68.6382,27.9585,8.13,14/300x300?access_token=pk.eyJ1Ijoiam9zaHVhYnJpZ2F0aSIsImEiOiJjbHV3N2MxMnIwOWU1MmtrbGo3bDVidHhqIn0.ssKSeQ92WDAmwPfUyhs1QQ
"
                  alt=""
                />
              </div>
              <div className="resume-card flex">
                <div className="resume-left flex col">
                  <span>2024</span>
                  <h2>MY RESUME</h2>
                </div>
                <div className="resume-icons flex">
                  <div className="icon flex">
                    <GrDownload />
                  </div>
                  <div className="icon flex">
                    <BsEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-cards flex">
          <div className="left-bottom-cards flex">
            <div className="link-icons flex col">
              <div className="icon-card flex">
                <a href="/" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon-card flex">
                <a href="/" className="flex">
                  <BsLinkedin />
                </a>
              </div>
              <div className="icon-card flex">
                <a href="/" className="flex">
                  <BsWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <div className="right-carousel flex col">
            <div className="top-marquee flex">
              <marquee behavior="rtl" direction="rtl">
                <FaHtml5 className="icon-tech" style={{ color: "#E34F26" }} />{" "}
                {/* HTML5 orange */}
                <FaCss3
                  className="icon-tech"
                  style={{ color: "#1572B6" }}
                />{" "}
                {/* CSS3 blue */}
                <FaBootstrap
                  className="icon-tech"
                  style={{ color: "#7952B3" }}
                />{" "}
                {/* Bootstrap violet */}
                <FaJs className="icon-tech" style={{ color: "#F7DF1E" }} />{" "}
                {/* JavaScript yellow */}
                <FaPython
                  className="icon-tech"
                  style={{ color: "#3776AB" }}
                />{" "}
                {/* Python blue */}
                <FaSass
                  className="icon-tech"
                  style={{ color: "#CC6699" }}
                />{" "}
                {/* Sass pink-violet */}
                <FaFigma
                  className="icon-tech"
                  style={{ color: "#A259FF" }}
                />{" "}
                {/* Figma indigo */}
                <FaReact
                  className="icon-tech"
                  style={{ color: "#61DAFB" }}
                />{" "}
                {/* React blue */}
              </marquee>
            </div>
            <div className="bottom-icon flex">
              <a href="/" className="flex">
                <BsInstagram />
              </a>
            </div>
          </div>
          <div className="right-project flex col">
            <img
              src="https://github.com/Jawad-Ali-Soomro/threads-clone/raw/main/images/login.png"
              alt=""
            />
            <div className="tags flex">
              <div className="tag">#react</div>
              <div className="tag">#threads</div>
              <div className="tag">#mern-stack</div>
            </div>
            <div className="btns flex">
              <div className="icon flex">
                <a href="" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon flex">
                <a href="" className="flex">
                  <BiLink />
                </a>
              </div>
            </div>

            <img
              style={{ marginTop: "20px" }}
              src="https://github.com/Jawad-Ali-Soomro/codehub-v2/raw/main/main.png"
              alt=""
            />
            <div className="tags flex">
              <div className="tag">#react</div>
              <div className="tag">#codhub-v2</div>
              <div className="tag">#mern-stack</div>
            </div>
            <div className="btns flex">
              <div className="icon flex">
                <a href="" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon flex">
                <a href="" className="flex">
                  <BiLink />
                </a>
              </div>
            </div>

            <img
              style={{ marginTop: "20px" }}
              src="https://github.com/Jawad-Ali-Soomro/chatbot-ui/raw/main/public/login.png"
              alt=""
            />
            <img
              style={{ marginTop: "10px" }}
              src="https://github.com/Jawad-Ali-Soomro/chatbot-ui/raw/main/public/main%20screen.png"
              alt=""
            />
            <div className="tags flex">
              <div className="tag">#react</div>
              <div className="tag">#cyberguide-chatbot-ui</div>
              <div className="tag">#mern-stack</div>
            </div>
            <div className="btns flex">
              <div className="icon flex">
                <a href="" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon flex">
                <a href="" className="flex">
                  <BiLink />
                </a>
              </div>
            </div>

            <img
              style={{ marginTop: "20px" }}
              src="https://github.com/Jawad-Ali-Soomro/shoe-landing-page/raw/main/img.png"
              alt=""
            />
            <div className="tags flex">
              <div className="tag">#react</div>
              <div className="tag">#shoe-landing-ui</div>
              <div className="tag">#mern-stack</div>
            </div>
            <div className="btns flex">
              <div className="icon flex">
                <a href="" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon flex">
                <a href="" className="flex">
                  <BiLink />
                </a>
              </div>
            </div>

            <img style={{ marginTop: "20px" }} src="/food.png" alt="" />
            <div className="tags flex">
              <div className="tag">#react</div>
              <div className="tag">#foodie</div>
              <div className="tag">#mern-stack</div>
            </div>
            <div className="btns flex">
              <div className="icon flex">
                <a href="" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon flex">
                <a href="" className="flex">
                  <BiLink />
                </a>
              </div>
            </div>

            <img style={{ marginTop: "20px" }} src="/tour.png" alt="" />
            <div className="tags flex">
              <div className="tag">#react</div>
              <div className="tag">#tourism</div>
              <div className="tag">#mern-stack</div>
            </div>
            <div className="btns flex">
              <div className="icon flex">
                <a href="" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon flex">
                <a href="" className="flex">
                  <BiLink />
                </a>
              </div>
            </div>

            <img style={{ marginTop: "20px" }} src="/codehub-main.png" alt="" />

            <img style={{ marginTop: "10px" }} src="/codehub.png" alt="" />
            <div className="tags flex">
              <div className="tag">#react</div>
              <div className="tag">#codehub</div>
              <div className="tag">#mern-stack</div>

              <div className="tag">#open-to-colab</div>
            </div>
            <div className="btns flex">
              <div className="icon flex">
                <a href="" className="flex">
                  <BsGithub />
                </a>
              </div>
              <div className="icon flex">
                <a href="" className="flex">
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
