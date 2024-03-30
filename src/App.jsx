import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import FormContact from "./components/FormContact";
import About from "./components/About";
import Footer from "./components/Footer";
import uzLang from "./langs/uz.json";
import ruLang from "./langs/ru.json";
import enLang from "./langs/en.json";

const App = () => {
  const [lang, setLang] = useState("uz");
  const [currentLang, setCurrentLang] = useState(uzLang);

  useEffect(() => {
    switch (lang) {
      case "ru":
        setCurrentLang(ruLang);
        break;
      case "en":
        setCurrentLang(enLang);
        break;
      default:
        setCurrentLang(uzLang);
        break;
    };
  }, [lang]);

  return (
    <>
      <Header setLang={setLang} currentLang={currentLang} lang={lang} />
      <About currentLang={currentLang} language={lang} />
      <FormContact currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </>
  );
};

export default App;
