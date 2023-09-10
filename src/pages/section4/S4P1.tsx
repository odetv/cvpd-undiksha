import React from "react";
import { Link } from "react-router-dom";
import ImageArticle from "../../assets/images/section4/Articlevisit.jpg";
import ImageSDG from "../../assets/images/section4/SDG.jpg";
import ImagePrinciple from "../../assets/images/section4/Principle.jpg";
import PersistentTextarea from "../../components/PersistentTextarea";
import SustainableDiagram from "../../components/SustainableDiagram";

const ContentS4P1 = [
    {
        id: "",
        title: "Section IV",
        subtitle: "THE CONCEPT OF SUSTAINABLE DEVELOPMENT",
        content1: "Full article, visit:",
        content2:
            "https://www.iises.net/a-conceptual-review-of-the-terms-sustainable-development-and.html",
        content3: "Task 1 :",
        content4:
            "After having read the article about the concept of sustainable development,",
        content5:
            "a. Explain the key concept of sustainable development with your own understanding.",
        content6:
            "b. Fill the diagram about the pillars of sustainable development and find out the example of each pillar in your surrounding.",
        content7:
            "c. Analyse the principle of sustainable development based on the article.",
        content8: "The Key Concept of Sustainable Development",
        content9: "Fill the diagram below",
        content10: "The Principle of Sustainable Development",
        content11:
            "Education for Sustainable Development (ESD) is commonly understood as education that encourages changes in knowledge, skills, values and attitudes to enable a more sustainable and just society for all. ESD aims to empower and equip current and future generations to meet their needs using a balanced and integrated approach to the economic, social and environmental dimensions of sustainable development. There are 17 SDGs aiming to create a better world by 2030 by ending poverty, fighting inequality, and addressing the urgency of climate change. The 17 SDGs are: (1) No Poverty, (2) Zero Hunger, (3) Good Health and Well-being, (4) Quality Education, (5) Gender Equality, (6) Clean Water and Sanitation, (7) Affordable and Clean Energy, (8) Decent Work and Economic Growth, (9) Industry, Innovation and Infrastructure, (10) Reduced Inequality, (11) Sustainable Cities and Communities, (12) Responsible Consumption and Production, (13) Climate Action, (14) Life Below Water, (15) Life On Land, (16) Peace, Justice, and Strong Institutions, (17) Partnerships for the Goals.",
        content12: "",
        content13: "",
        labelBack: "Back",
        labelNext: "Next",
        textBack:
            "SUSTAINABLE DEVELOPMENT THROUGH Integrated Management of Healthy Citrus",
        textNext: "Task 2",
        linkBack: "/section4",
        linkNext: "/section4/2",
    },
];

const S4P1 = () => {
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
                        <PersistentTextarea id="S3P41" placeholder="..." />
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content9}
                    </h1>
                    <div className="sm:flex lg:flex md:flex xl:flex gap-3 items-center">
                        <div className="mb-3 border border-blue-600 p-3 rounded-xl">
                            <SustainableDiagram />
                        </div>
                        <div className="">
                            <PersistentTextarea
                                id="S3P42"
                                placeholder="Fill A"
                            />
                        </div>
                        <div className="">
                            <PersistentTextarea
                                id="S3P43"
                                placeholder="Fill B"
                            />
                        </div>
                        <div className="">
                            <PersistentTextarea
                                id="S3P44"
                                placeholder="Fill C"
                            />
                        </div>
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-6">
                        {value.content10}
                    </h1>

                    <div className="flex flex-col gap-3">
                        <PersistentTextarea id="S3P45" placeholder="..." />
                    </div>
                    <div className="xl:flex lg:flex md:flex sm:flex flex-row gap-3 items-center mt-6 mb-6">
                        <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[400px] xl:w-[400px] lg:w-[400px] shadow-lg">
                            <img className="w-full" src={ImagePrinciple} />
                        </div>
                        <div className="transform transition duration-500 hover:scale-105 mx-auto relative w-full sm:w-[700px] md:w-[700px] xl:w-[700px] lg:w-[700px] shadow-lg">
                            <img className="w-full" src={ImageSDG} />
                        </div>
                    </div>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base mb-3">
                        {value.content11}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                        {value.content12}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base mb-3">
                        {value.content13}
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
