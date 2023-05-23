import logo from "../assets/img/5-removebg-preview.png";
const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-footer-bg-top to-footer-bg-bottom px-28">
      <div className="container mx-auto text-white">
        <div className="flex flex-row items-center min-h-[128px]">
          <div className="basis-1/4">
            <a href="/" className="block w-[64px]"><img src={logo} alt="SiteLogo" /></a>
          </div>
          <div className="basis-3/4">
            <hr />
            <div className="flex justify-between pt-4">
              <div className="basis-1/2 md:basis-2/3">
                Copyright © 2023 Bondi Pathshala All rights reserved.
              </div>
              <div className="basis-1/2 md:basis-1/3 text-xs lg:text-right md:text-left">
                {"</Developed by Bondi Pathsala>"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
