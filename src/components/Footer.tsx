import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("footer");

    return (
        <footer className="flex flex-col justify-end bg-slate-500 text-slate-300">
            <div className="py-6 text-xs text-center">
                <a
                    href="https://undiksha.ac.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("1")}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
