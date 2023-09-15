import React from "react";
import { Link } from "react-router-dom";
import ImageArticle from "../../assets/images/section4/Articlevisit.jpg";
import ImageSDG from "../../assets/images/section4/SDG.jpg";
import ImagePrinciple from "../../assets/images/section4/Principle.jpg";
import PersistentTextarea from "../../components/PersistentTextarea";
import SustainableDiagram from "../../components/SustainableDiagram";
import { useTranslation } from "react-i18next";

const S4P1 = () => {
    const { t } = useTranslation("s4p1");
    const ContentS4P1 = [
        {
            id: "",
            title: t("1"),
            subtitle: t("2"),
            content1: t("3"),
            content2: t("4"),
            content3: t("5"),
            content4: t("6"),
            content5: t("7"),
            content6: t("8"),
            content7: t("9"),
            content8: t("10"),
            content9: t("11"),
            content10: t("12"),
            content11: t("13"),
            content12: t("14"),
            content13: t("15"),
            content14: t("16"),
            content15: t("17"),
            content16: t("18"),
            content17: t("19"),
            labelBack: t("labelBack"),
            labelNext: t("labelNext"),
            textBack: t("textBack"),
            textNext: t("textNext"),
            linkBack: "/section4",
            linkNext: "/section4/2",
        },
    ];

    return (
        <section className="bg-indigo-50">
            {ContentS4P1.map((value) => (
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
                    <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[700px] xl:w-[700px] lg:w-[700px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageArticle} />
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                        {value.content1}
                    </h1>
                    <div className="font-light text-justify text-indigo-400 text-base mb-3 underline">
                        <a href={value.content2} target="_blank">
                            {value.content2}
                        </a>
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content3}
                    </h1>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content4}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content5}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content6}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content7}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content8}
                    </h1>
                    <div className="flex flex-col gap-3">
                        <PersistentTextarea
                            id="S3P41"
                            placeholder={value.content13}
                        />
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content9}
                    </h1>
                    <div className="sm:flex lg:flex md:flex xl:flex gap-3">
                        <div className="mb-3 border border-blue-600 p-3 rounded-xl">
                            <SustainableDiagram />
                        </div>
                        <div className="">
                            <PersistentTextarea
                                id={value.content14}
                                placeholder={value.content14}
                            />
                        </div>
                        <div className="">
                            <PersistentTextarea
                                id={value.content15}
                                placeholder={value.content15}
                            />
                        </div>
                        <div className="">
                            <PersistentTextarea
                                id={value.content16}
                                placeholder={value.content16}
                            />
                        </div>
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content10}
                    </h1>
                    <div className="flex flex-col gap-3">
                        <PersistentTextarea
                            id="S3P45"
                            placeholder={value.content17}
                        />
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content11}
                    </h1>
                    <div className="xl:flex lg:flex md:flex sm:flex flex-row gap-3 items-center mb-6">
                        <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[400px] xl:w-[400px] lg:w-[400px] shadow-lg">
                            <img className="w-full" src={ImagePrinciple} />
                        </div>
                        <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[700px] xl:w-[700px] lg:w-[700px] shadow-lg">
                            <img className="w-full" src={ImageSDG} />
                        </div>
                    </div>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base mb-3">
                        {value.content12}
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
export default S4P1;
