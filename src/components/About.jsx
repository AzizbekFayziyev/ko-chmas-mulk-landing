import React from "react";
import Container from "./Container";

const About = ({ currentLang, language }) => {
  const langs = {
    uz: `Pensilvaniya va Nyu Jersidagi litsenziyaga ega realtor hamda investor sifatida men sizni ko'chmas mulk bo‘yicha noyob istiqbolli kelajakka taklif qilaman.

    Bizning xizmatlar: 
    — Birinchi marta uy sotib olayotgan xaridorlar bilan ishlash; 
    — Investitsion mulk bo'yicha maslahatlar; 
    — Tijoriy ko'chmas mulk bo'yicha yordam; 
    — Islomiy moliya bilan ishlash. 
    
    Mulk xarid qilish potensialingizni o‘rgangan holda uyni to'g'ri tanlash va sarmoyaga ega bo‘lishingiz uchun uyni ta'mirlash bo'yicha maslahatlar bera olaman.
    
    Bundan tashqari ko‘p yillik investitsiya va tijorat mulklaridagi tajribamdan foydalanib farzandlaringiz kelajagi uchun mablag‘ jamg‘arib borish to‘g‘risida maslahatlar bera olaman.
    
    Passiv daromad manbasini yaratishingiz orqali har kunlik soat 9 dan 5 gacha davom etadigan og‘ir ish kunlaringizni to‘xtatishingiz uchun dastlab birinchi uyingizni olish va undan so‘ng ijaraga beruvchi mulklaringizni sotib olishingiz uchun birga ishlashni taklif qilaman.`,
    ru: `Как лицензированный риэлтор и инвестор в Пенсильвании и Нью-Джерси, я приглашаю вас в уникальное и многообещающее будущее в сфере недвижимости.

    Наши сервисы:
    — Работа с покупателями, покупающими жилье впервые;
    — Консультации по инвестиционной недвижимости;
    — Помощь в коммерческой недвижимости;
    — Работа с исламскими финансами.
    
    Изучив ваш потенциал покупки недвижимости, я могу дать вам совет по улучшению дома, который поможет вам сделать правильный выбор дома и инвестиций.
    
    Кроме того, я могу дать совет о том, как сэкономить на будущем ваших детей, используя свой многолетний опыт инвестиций и коммерческой недвижимости.
    
    Я предлагаю работать вместе, чтобы сначала купить свой первый дом, а затем покупать недвижимость, сдаваемую в аренду, чтобы вы могли бросить свою 9–5-дневную работу, создав поток пассивного дохода.`,
    en: `As a licensed realtor in Pennsylvania and New Jersey, as well as an investor, I offer a unique perspective to guide you through your real estate journey. 

    Services:
    -  Work with first time home buyers
    -  Advise on Investment properties
    -  Help with Commercial Real Estate
    -  Work with Islamic Finance

    With a keen eye for property potential, I can not only help you find the right home but also advise you on potential repairs and renovations for your investment. Additionally, by leveraging my experience in investment and commercial properties, I can provide invaluable insights to help you build generational wealth through real estate. 
    Let's work together to get your first home and buy rental properties so you can build passive income source and quit your 9-5 job.`,
  };
  return (
    <Container>
      <div className="about flex items-center justify-between mt-8">
        <div className="mr-4">
          <h2 className="text-4xl font-medium">{currentLang.aboutTitle}</h2>
          <p className="text-lg mt-4 whitespace-pre-line leading-6">{langs[language]}</p>
        </div>

        <img
          className="rounded-3xl"
          width={320}
          src="./about.png"
          alt="hero image"
        />
      </div>
    </Container>
  );
};

export default About;
