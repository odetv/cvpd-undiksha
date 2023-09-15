import React from "react";
import { Link } from "react-router-dom";
import ImageFigure1 from "../../assets/images/section1/Figure1.jpg";
import ImageFigure2 from "../../assets/images/section1/Figure2.jpg";
import { useTranslation } from "react-i18next";

const S1P1 = () => {
    const { t } = useTranslation("s1p1");
    const ContentS1P1 = [
        {
            id: "",
            title: t("1"),
            subtitle: t("2"),
            content1: t("3"),
            content2: t("4"),
            content3: t("5"),
            labelFigure1: t("6"),
            labelFigure2: t("7"),
            labelBack: t("labelBack"),
            labelNext: t("labelNext"),
            textBack: t("textBack"),
            textNext: t("textNext"),
            linkBack: "/section1",
            linkNext: "/section1/2",
        },
    ];

    return (
        <section className="bg-indigo-50">
            {ContentS1P1.map((value) => (
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
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content2}
                    </div>
                    <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure1} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure1}
                            </h1>
                        </div>
                    </div>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content3}
                    </div>
                    <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure2} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure2}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto pt-12">
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
export default S1P1;
