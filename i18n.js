import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translate from "google-translate-api-browser";

const availableLanguages = ["en", "id"];

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: (lng, ns) => {
                return translate(ns, { from: "en", to: lng }).then((result) => {
                    const translations = { [lng]: { [ns]: result.text } };
                    return JSON.stringify(translations);
                });
            },
        },
    });

export default i18n;
