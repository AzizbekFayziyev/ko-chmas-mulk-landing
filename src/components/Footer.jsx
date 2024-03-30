import React from "react";
import Container from "./Container";
import Socials from "./Socials";

const Footer = ({ currentLang }) => {
  return (
    <footer className="mt-8 text-center border-t border-[#E0E0E0] p-4">
      <Container>
        <h6 className="text-lg font-semibold">&copy; {currentLang.footer}</h6>
        <div className="flex justify-center mt-4">
          <div className="flex gap-3">
            <a
              className="hover:scale-110 transition-transform"
              href="https://t.me/Khusniddin_Realtor"
              target="_blank"
            >
              <img
                className="bg-white rounded-full p-[2px]"
                width={35}
                src="./telegram.png"
                alt="telegram link"
              />
            </a>
            <a
              className="hover:scale-110 transition-transform"
              href="https://www.instagram.com/khusniddin_realtor?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <img
                className="bg-white rounded-full p-[2px]"
                width={35}
                src="./instagram.png"
                alt="instagram link"
              />
            </a>
            <a
              className="hover:scale-110 transition-transform"
              href="http://tiktok.com/@khusniddin_realtor"
              target="_blank"
            >
              <img
                className="bg-white rounded-full p-[2px]"
                width={35}
                src="./tiktok.png"
                alt="telegram link"
              />
            </a>
            <a
              className="hover:scale-110 transition-transform"
              href="https://youtube.com/@Khusniddin_Realtor"
              target="_blank"
            >
              <img
                className="bg-white rounded-full p-[2px]"
                width={35}
                src="./youtube.png"
                alt="telegram link"
              />
            </a>
            <a
              className="hover:scale-110 transition-transform"
              href="https://www.facebook.com/profile.php?id=100072463244865&mibextid=ZbWKwL"
              target="_blank"
            >
              <img
                className="bg-white rounded-full p-[2px]"
                width={35}
                src="./facebook.png"
                alt="facebook link"
              />
            </a>
            <a
              className="hover:scale-110 transition-transform"
              href="https://www.linkedin.com/in/khusniddin-yuldashev-42b00541?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img
                className="bg-white rounded-full p-[2px]"
                width={35}
                src="./linkedin.png"
                alt="telegram link"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
