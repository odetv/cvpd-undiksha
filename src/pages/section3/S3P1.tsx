import React from "react";
import { Link } from "react-router-dom";
import ImageFigure8 from "../../assets/images/section3/Figure8.jpg";
import ImageFigure9 from "../../assets/images/section3/Figure9.jpg";
import { useTranslation } from "react-i18next";

const S3P1 = () => {
    const { t } = useTranslation("s3p1");
    const ContentS3P1 = [
        {
            id: "",
            title: t("1"),
            subtitle: t("2"),
            labelFigure8: t("3"),
            content1: t("4"),
            content2: t("5"),
            content3: t("6"),
            content4: t("7"),
            content5: t("8"),
            content6: t("9"),
            content7: t("10"),
            content8: t("11"),
            content9: t("12"),
            content10: t("13"),
            content11: t("14"),
            content12: t("15"),
            content13: t("16"),
            content14: t("17"),
            content15: t("18"),
            labelFigure9: t("19"),
            content16: t("20"),
            content17: t("21"),
            content18: t("22"),
            content19: t("23"),
            labelBack: t("labelBack"),
            labelNext: t("labelNext"),
            textBack: t("textBack"),
            textNext: t("textNext"),
            linkBack: "/section3",
            linkNext: "/section3/2",
        },
    ];

    return (
        <section className="bg-indigo-50">
            {ContentS3P1.map((value) => (
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
                    <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-4 mb-14 shadow-lg">
                        <img className="w-full" src={ImageFigure8} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure8}
                            </h1>
                        </div>
                    </div>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content1}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content2}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content3}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content4}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content5}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content6}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content7}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content8}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content9}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content10}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content11}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content12}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content13}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content14}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content15}
                    </div>
                    <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure9} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure9}
                            </h1>
                        </div>
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base pt-6 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0">
                        {value.content16}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content17}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content18}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content19}
                    </div>
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
export default S3P1;
