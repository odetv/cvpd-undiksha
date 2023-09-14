import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEn from "./translations/components/header/en.json";
import headerId from "./translations/components/header/id.json";
import footerEn from "./translations/components/footer/en.json";
import footerId from "./translations/components/footer/id.json";
import pageHandlerEn from "./translations/components/pageHandler/en.json";
import pageHandlerId from "./translations/components/pageHandler/id.json";
import customTableEn from "./translations/components/customTable/en.json";
import customTableId from "./translations/components/customTable/id.json";
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
import s1p1En from "./translations/pages/section1/s1p1/en.json";
import s1p1Id from "./translations/pages/section1/s1p1/id.json";
import s1p2En from "./translations/pages/section1/s1p2/en.json";
import s1p2Id from "./translations/pages/section1/s1p2/id.json";
import s1p3En from "./translations/pages/section1/s1p3/en.json";
import s1p3Id from "./translations/pages/section1/s1p3/id.json";
import s1p4En from "./translations/pages/section1/s1p4/en.json";
import s1p4Id from "./translations/pages/section1/s1p4/id.json";
import s1p5En from "./translations/pages/section1/s1p5/en.json";
import s1p5Id from "./translations/pages/section1/s1p5/id.json";
import s1p6En from "./translations/pages/section1/s1p6/en.json";
import s1p6Id from "./translations/pages/section1/s1p6/id.json";
import s1p7En from "./translations/pages/section1/s1p7/en.json";
import s1p7Id from "./translations/pages/section1/s1p7/id.json";
import s1p8En from "./translations/pages/section1/s1p8/en.json";
import s1p8Id from "./translations/pages/section1/s1p8/id.json";
import s1pfinishEn from "./translations/pages/section1/s1pfinish/en.json";
import s1pfinishId from "./translations/pages/section1/s1pfinish/id.json";
import s2p1En from "./translations/pages/section2/s2p1/en.json";
import s2p1Id from "./translations/pages/section2/s2p1/id.json";
import s2p2En from "./translations/pages/section2/s2p2/en.json";
import s2p2Id from "./translations/pages/section2/s2p2/id.json";
import s2p3En from "./translations/pages/section2/s2p3/en.json";
import s2p3Id from "./translations/pages/section2/s2p3/id.json";
import s2p4En from "./translations/pages/section2/s2p4/en.json";
import s2p4Id from "./translations/pages/section2/s2p4/id.json";
import s2p5En from "./translations/pages/section2/s2p5/en.json";
import s2p5Id from "./translations/pages/section2/s2p5/id.json";
import s2p6En from "./translations/pages/section2/s2p6/en.json";
import s2p6Id from "./translations/pages/section2/s2p6/id.json";
import s2pfinishEn from "./translations/pages/section2/s2pfinish/en.json";
import s2pfinishId from "./translations/pages/section2/s2pfinish/id.json";
import s3p1En from "./translations/pages/section3/s3p1/en.json";
import s3p1Id from "./translations/pages/section3/s3p1/id.json";
import s3p2En from "./translations/pages/section3/s3p2/en.json";
import s3p2Id from "./translations/pages/section3/s3p2/id.json";
import s3p3En from "./translations/pages/section3/s3p3/en.json";
import s3p3Id from "./translations/pages/section3/s3p3/id.json";
import s3p4En from "./translations/pages/section3/s3p4/en.json";
import s3p4Id from "./translations/pages/section3/s3p4/id.json";
import s3pfinishEn from "./translations/pages/section3/s3pfinish/en.json";
import s3pfinishId from "./translations/pages/section3/s3pfinish/id.json";
import s4p1En from "./translations/pages/section4/s4p1/en.json";
import s4p1Id from "./translations/pages/section4/s4p1/id.json";
import s4p2En from "./translations/pages/section4/s4p2/en.json";
import s4p2Id from "./translations/pages/section4/s4p2/id.json";
import s4p3En from "./translations/pages/section4/s4p3/en.json";
import s4p3Id from "./translations/pages/section4/s4p3/id.json";
import s4pfinishEn from "./translations/pages/section4/s4pfinish/en.json";
import s4pfinishId from "./translations/pages/section4/s4pfinish/id.json";

const resources = {
    en: {
        header: headerEn,
        footer: footerEn,
        pageHandler: pageHandlerEn,
        customTable: customTableEn,
        home: homeEn,
        about: aboutEn,
        section1: section1En,
        section2: section2En,
        section3: section3En,
        section4: section4En,
        s1p1: s1p1En,
        s1p2: s1p2En,
        s1p3: s1p3En,
        s1p4: s1p4En,
        s1p5: s1p5En,
        s1p6: s1p6En,
        s1p7: s1p7En,
        s1p8: s1p8En,
        s1pfinish: s1pfinishEn,
        s2p1: s2p1En,
        s2p2: s2p2En,
        s2p3: s2p3En,
        s2p4: s2p4En,
        s2p5: s2p5En,
        s2p6: s2p6En,
        s2pfinish: s2pfinishEn,
        s3p1: s3p1En,
        s3p2: s3p2En,
        s3p3: s3p3En,
        s3p4: s3p4En,
        s3pfinish: s3pfinishEn,
        s4p1: s4p1En,
        s4p2: s4p2En,
        s4p3: s4p3En,
        s4pfinish: s4pfinishEn,
    },
    id: {
        header: headerId,
        footer: footerId,
        pageHandler: pageHandlerId,
        customTable: customTableId,
        home: homeId,
        about: aboutId,
        section1: section1Id,
        section2: section2Id,
        section3: section3Id,
        section4: section4Id,
        s1p1: s1p1Id,
        s1p2: s1p2Id,
        s1p3: s1p3Id,
        s1p4: s1p4Id,
        s1p5: s1p5Id,
        s1p6: s1p6Id,
        s1p7: s1p7Id,
        s1p8: s1p8Id,
        s1pfinish: s1pfinishId,
        s2p1: s2p1Id,
        s2p2: s2p2Id,
        s2p3: s2p3Id,
        s2p4: s2p4Id,
        s2p5: s2p5Id,
        s2p6: s2p6Id,
        s2pfinish: s2pfinishId,
        s3p1: s3p1Id,
        s3p2: s3p2Id,
        s3p3: s3p3Id,
        s3p4: s3p4Id,
        s3pfinish: s3pfinishId,
        s4p1: s4p1Id,
        s4p2: s4p2Id,
        s4p3: s4p3Id,
        s4pfinish: s4pfinishId,
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
