import React from "react";
import { Link } from "react-router-dom";
import ImageFigure3 from "../../assets/images/section1/Figure3.jpg";
import { useTranslation } from "react-i18next";

const S1P3 = () => {
    const { t } = useTranslation("s1p3");
    const ContentS1P3 = [
        {
            id: "",
            title: t("1"),
            subtitle: t("2"),
            content1: t("3"),
            content2: t("4"),
            content3: t("5"),
            labelFigure3: t("6"),
            content4: t("7"),
            labelBack: t("labelBack"),
            labelNext: t("labelNext"),
            textBack: t("textBack"),
            textNext: t("textNext"),
            linkBack: "/section1/2",
            linkNext: "/section1/4",
        },
    ];

    return (
        <section className="bg-indigo-50">
            {ContentS1P3.map((value) => (
                <div
                    key={value.id}
                    className="pt-8 pb-8 px-4 mx-auto max-w-screen-lg lg:p-8"
                >
                    <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                        {value.title}
                    </h1>
                    <h1 className="pb-6 text-center lg:text-lg font-bold text-gray-500">
                        {value.subtitle}
                    </h1>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                        {value.content1}
                    </h1>
                    <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                        {value.content2}
                    </p>
                    <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                        {value.content3}
                    </p>
                    <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure3} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure3}
                            </h1>
                        </div>
                    </div>
                    <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                        {value.content4}
                    </p>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto mt-12">
                        <button className="px-4 bg-none border border-indigo-400 hover:bg-indigo-100 text-indigo-900 py-2 rounded-lg">
                            <Link
                                to={value.linkBack}
                                className="text-sm text-left"
                            >
                                <div className="flex items-center">
                                    <span className="mr-4" aria-hidden="true">
                                        &larr;
                                    </span>
                                    <div>
                                        <div className="font-bold uppercase">
                                            {value.labelBack}
                                        </div>
                                        <div>{value.textBack}</div>
                                    </div>
                                </div>
                            </Link>
                        </button>
                        <button className="bg-green-600 border border-green-600 hover:bg-green-700 text-indigo-900 py-2 px-4 rounded-lg">
                            <Link
                                to={value.linkNext}
                                className="text-sm text-left"
                            >
                                <div className="flex items-center text-end justify-end text-white">
                                    <div>
                                        <div className="font-bold uppercase">
                                            {value.labelNext}
                                        </div>
                                        <div>{value.textNext}</div>
                                    </div>
                                    <span className="ml-4" aria-hidden="true">
                                        &rarr;
                                    </span>
                                </div>
                            </Link>
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default S1P3;
