import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEn from "./translations/components/header/en.json";
import headerId from "./translations/components/header/id.json";
import footerEn from "./translations/components/footer/en.json";
import footerId from "./translations/components/footer/id.json";
import pageHandlerEn from "./translations/components/pageHandler/en.json";
import pageHandlerId from "./translations/components/pageHandler/id.json";
import homeEn from "./translations/pages/home/en.json";
import homeId from "./translations/pages/home/id.json";
import aboutEn from "./translations/pages/about/en.json";
import aboutId from "./translations/pages/about/id.json";
import section1En from "./translations/layouts/section1/en.json";
import section1Id from "./translations/layouts/section1/id.json";
import section2En from "./translations/layouts/section2/en.json";
import section2Id from "./translations/layouts/section2/id.json";
import section3En from "./translations/layouts/section3/en.json";
import section3Id from "./translations/layouts/section3/id.json";
import section4En from "./translations/layouts/section4/en.json";
import section4Id from "./translations/layouts/section4/id.json";

const resources = {
    en: {
        header: headerEn,
        footer: footerEn,
        pageHandler: pageHandlerEn,
        home: homeEn,
        about: aboutEn,
        section1: section1En,
        section2: section2En,
        section3: section3En,
        section4: section4En,
    },
    id: {
        header: headerId,
        footer: footerId,
        pageHandler: pageHandlerId,
        home: homeId,
        about: aboutId,
        section1: section1Id,
        section2: section2Id,
        section3: section3Id,
        section4: section4Id,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Bahasa default
    fallbackLng: "en", // Bahasa fallback
    interpolation: {
        escapeValue: false,
    },
});

// Fungsi untuk mengganti bahasa ke bahasa Inggris (EN)
export const switchToEnglish = () => {
    i18n.changeLanguage("en");
};

// Fungsi untuk mengganti bahasa ke bahasa Indonesia (ID)
export const switchToIndonesian = () => {
    i18n.changeLanguage("id");
};

export default i18n;
