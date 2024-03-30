import React from "react";
import Container from "./Container";
import Button from "./Button";
import Socials from "./Socials";

const Header = ({ currentLang, setLang, lang }) => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 fixed w-full left-0 top-0 z-50 backdrop-blur-md bg-black/20">
        <h5 className="text-white text-2xl font-bold">Khusniddin Realtor</h5>

        <div className="relative langMenu">
          <button className="text-white text-lg flex items-center gap-2 font-semibold">
            <img width={25} src={`./${lang}.png`} alt="uz flag" />
            <span>{lang.toUpperCase()}</span>
            <img width={20} src="./arrowDown.png" alt="arrow down" />
          </button>

          <ul className="langs invisible transition-all opacity-0 absolute bg-white w-[120px] right-0 top-[40px]">
            <li
              onClick={() => setLang("uz")}
              className={`flex items-center gap-4 cursor-pointer font-semibold p-2 hover:bg-gray-300 ${
                lang == "uz" && "bg-gray-200"
              }`}
            >
              <img width={30} src="./uz.png" alt="uz flag" /> UZ
            </li>
            <li
              onClick={() => setLang("ru")}
              className={`flex items-center gap-4 cursor-pointer font-semibold p-2 hover:bg-gray-300 ${
                lang == "ru" && "bg-gray-200"
              }`}
            >
              <img width={30} src="./ru.png" alt="ru flag" /> RU
            </li>
            <li
              onClick={() => setLang("en")}
              className={`flex items-center gap-4 cursor-pointer font-semibold p-2 hover:bg-gray-300 ${
                lang == "en" && "bg-gray-200"
              }`}
            >
              <img width={30} src="./en.png" alt="eng flag" /> EN
            </li>
          </ul>
        </div>
      </nav>

      <header className="header py-8">
        <Container>
          <div className="header__content mt-12 flex items-center justify-between">
            <div className=" max-w-[680px] mr-2 header__content_text">
              <h1 className="text-white text-4xl font-bold">
                {currentLang.main}
              </h1>

              <a href="#form">
                <Button>{currentLang.button}</Button>
              </a>

              <Socials />
            </div>

            <div className="grid grid-cols-2 gap-5 max-w-[400px]">
              <img
                className="min-w-[160px] min-h-[260px] rounded-[32px] hover:scale-105 transition-transform mt-20"
                src="./hero1.png"
                alt="hero image"
              />
              <img
                className="min-w-[160px] min-h-[260px] rounded-[32px] hover:scale-105 transition-transform"
                src="./hero2.png"
                alt="hero image"
              />
              <img
                className="min-w-[160px] min-h-[260px] rounded-[32px] hover:scale-105 transition-transform"
                src="./hero4.png"
                alt="hero image"
              />
              <img
                className="min-w-[160px] min-h-[260px] rounded-[32px] hover:scale-105 transition-transform -mt-20"
                src="./hero3.png"
                alt="hero image"
              />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
