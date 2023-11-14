import HeroSection from "./components/hero_section";
import AboutMe from "./components/about_me";
import Experience from "./components/experience";
import Header from "./components/header";
import Contact from "./components/contact";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <Header />
      <div className="fixed md:flex hidden  bottom-0 left-0 pl-14 ">
        <div className="line">
          <a
            href="https://github.com/alwaysmayur"

            target="_blank"
          >
            <LuGithub size={20}  className="mt-5" style={{ color: "#8892b0" }} />
          </a>
          <a
            href="https://www.instagram.com/alwaysdeveloper/"
          
            target="_blank"
          >
            <SlSocialInstagram size={20} className="mt-5" style={{ color: "#8892b0" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/alwaysmayur/"
          
            target="_blank"
          >
            <LuLinkedin size={20}   className="mt-5 " style={{ color: "#8892b0" }} />
          </a>

          <div className="mt-5 bg-gradient-to-t from-textGray via-textGray to-textGray rounded-lg  w-[3px] h-36 mx-auto"></div>
        </div>
      </div>
      <div className="flex min-h-screen bg-bgDark text-white flex-col items-center justify-between p-5 md:px-32 md:py-14">
        <HeroSection />
        <AboutMe />
        <Experience />
        <Contact />
      </div>
      <Footer />
      <div className="md:flex hidden fixed bottom-0 right-0 ">
        <div className="line flex content-center items-center flex-col">
          <span className="flex text-textGray font-code  text-md transform rotate-90 py-28">
            mayurparmar.ce@gmail.com
          </span>
          <div className="pt-14 bg-gradient-to-t from-textGray via-textGray to-textGray rounded-lg w-[3px] h-36 mx-auto"></div>
        </div>
      </div>
    </>
  );
}
