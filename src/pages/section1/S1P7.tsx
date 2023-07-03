import React from "react";
import { Link } from "react-router-dom";
import PersistentTextarea from "../../components/PersistentTextarea";

const ContentS1P7 = [
    {
        id: "",
        title: "Section 1",
        subtitle: "SWOT Analysis Regarding Citrus Plantation",
        content1: "Task 2",
        content2:
            "Read the text and make a SWOT analysis with micro (individual), meso (society) and macro (society as whole) analysis of problematic Issue in Citrus Plantation. You can complete your explanation in diagram below!",
        labelBack: "Kembali",
        labelNext: "Selanjutnya",
        textBack: "Problems in Citrus Plantations",
        textNext: "Task 3",
        linkBack: "/section1/6",
        linkNext: "/section1/8",
    },
];

const S1P7 = () => {
    return (
        <section className="bg-indigo-50">
            {ContentS1P7.map((value) => (
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
                    <p className="font-light text-justify text-gray-500 text-base pb-2">
                        {value.content2}
                    </p>
                    <div className="flex flex-col gap-3">
                        <PersistentTextarea
                            id="textarea1"
                            placeholder="Strengths"
                        />
                        <PersistentTextarea
                            id="textarea2"
                            placeholder="Weaknesses"
                        />
                        <PersistentTextarea
                            id="textarea3"
                            placeholder="Opportunities"
                        />
                        <PersistentTextarea
                            id="textarea4"
                            placeholder="Threats"
                        />
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
export default S1P7;
