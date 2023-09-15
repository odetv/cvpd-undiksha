import ImageIntro from "../assets/images/intro.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("home");

    return (
        <section className="bg-indigo-50">
            <div className="pt-8 pb-8 px-4 mx-auto lg:p-8">
                <div className="mx-auto max-w-screen-xl mb-8">
                    <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                        {t("1")}
                    </h1>
                    <h1 className="mb-6 text-center lg:text-lg font-bold text-gray-500">
                        {t("2")}
                    </h1>
                    <img
                        src={ImageIntro}
                        alt="CVPD Undiksha"
                        className="shadow-lg mx-auto mt-8 mb-8 rounded-lg object-cover lg:h-96 lg:w-9/12"
                    />
                    <p className="indent-8 font-light text-justify text-gray-500 text-base">
                        {t("3")}
                    </p>
                </div>
                <div className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-4">
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl ease-in-out transition-all 0.5">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                {t("4")}
                            </span>
                        </div>
                        <h2 className="mb-2 text-lg font-bold text-gray-900 uppercase">
                            <Link to="section1">{t("5")}</Link>
                        </h2>
                        <p className="mb-5 text-sm font-light text-gray-500">
                            {t("6")}
                        </p>
                        <div className="flex justify-end items-center">
                            <Link
                                to="section1"
                                className="inline-flex items-center font-bold text-gray-900 hover:text-blue-600 ease-in-out transition-all 0.5"
                            >
                                {t("16")}
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl ease-in-out transition-all 0.5">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                {t("7")}
                            </span>
                        </div>
                        <h2 className="mb-2 text-lg font-bold text-gray-900 uppercase">
                            <Link to="section2">{t("8")}</Link>
                        </h2>
                        <p className="mb-5 text-sm font-light text-gray-500">
                            {t("9")}
                        </p>
                        <div className="flex justify-end items-center">
                            <Link
                                to="section2"
                                className="inline-flex items-center font-bold text-gray-900 hover:text-blue-600 ease-in-out transition-all 0.5"
                            >
                                {t("16")}
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl ease-in-out transition-all 0.5">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                {t("10")}
                            </span>
                        </div>
                        <h2 className="mb-2 text-lg font-bold text-gray-900 uppercase">
                            <Link to="section3">{t("11")}</Link>
                        </h2>
                        <p className="mb-5 text-sm font-light text-gray-500">
                            {t("12")}
                        </p>
                        <div className="flex justify-end items-center">
                            <Link
                                to="section3"
                                className="inline-flex items-center font-bold text-gray-900 hover:text-blue-600 ease-in-out transition-all 0.5"
                            >
                                {t("16")}
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </article>
                    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl ease-in-out transition-all 0.5">
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                {t("13")}
                            </span>
                        </div>
                        <h2 className="mb-2 text-lg font-bold text-gray-900 uppercase">
                            <Link to="section4">{t("14")}</Link>
                        </h2>
                        <p className="mb-5 text-sm font-light text-gray-500">
                            {t("15")}
                        </p>
                        <div className="flex justify-end items-center">
                            <Link
                                to="section4"
                                className="inline-flex items-center font-bold text-gray-900 hover:text-blue-600 ease-in-out transition-all 0.5"
                            >
                                {t("16")}
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Home;
