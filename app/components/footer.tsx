import { useEffect } from "react";
import AOS from "aos";
export default function Footer() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="flex bg-bgDark py-5 flex-col  text-textGray justify-center content-center items-center">
      <a 
        href="https://github.com/bchiang7/v4"
        target="_blank"
        className="font-mono text-xs  hover:text-textBlue"
      >
        Design Adapted from Brittany Chiang's Portfolio
      </a>

      <span className="font-mono text-xs hover:text-textBlue">
        Build by @ Mayur Parmar
      </span>
    </div>
  );
}
