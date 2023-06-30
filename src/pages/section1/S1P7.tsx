import React from "react";
import { Link } from "react-router-dom";

const S1P7 = () => {
    return (
        <section className="bg-indigo-50">
            <div className="pt-8 pb-8 px-4 mx-auto max-w-screen-lg lg:p-8">
                <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                    Section 1
                </h1>
                <h1 className="pb-6 text-center lg:text-lg font-bold text-gray-500">
                    SWOT Analysis Regarding Citrus Plantation
                </h1>
                <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                    Task 2
                </h1>
                <p className="font-light text-justify text-gray-500 text-base pb-2">
                    Read the text and make a SWOT analysis with micro
                    (individual), meso (society) and macro (society as whole)
                    analysis of problematic Issue in Citrus Plantation. You can
                    complete your explanation in diagram below!
                </p>
                <div className="flex flex-col gap-3">
                    <textarea
                        className="textarea p-2 border border-indigo-500 rounded-lg w-full h-64"
                        placeholder="Strengths"
                    ></textarea>
                    <textarea
                        className="textarea p-2 border border-indigo-500 rounded-lg w-full h-64"
                        placeholder="Weaknesses"
                    ></textarea>
                    <textarea
                        className="textarea p-2 border border-indigo-500 rounded-lg w-full h-64"
                        placeholder="Opportunities"
                    ></textarea>
                    <textarea
                        className="textarea p-2 border border-indigo-500 rounded-lg w-full h-64"
                        placeholder="Threats"
                    ></textarea>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto mt-12">
                    <button className="px-4 bg-none border border-indigo-400 hover:bg-indigo-100 text-indigo-900 py-2 rounded-lg">
                        <Link to="/section1/6" className="text-sm text-left">
                            <div className="flex items-center">
                                <span className="mr-4" aria-hidden="true">
                                    &larr;
                                </span>
                                <p>
                                    <p className="font-bold uppercase">
                                        Kembali
                                    </p>
                                    <p>Problems in Citrus Plantation</p>
                                </p>
                            </div>
                        </Link>
                    </button>
                    <button className="bg-green-600 border border-green-600 hover:bg-green-700 text-indigo-900 py-2 px-4 rounded-lg">
                        <Link to="/section1/8" className="text-sm text-left">
                            <div className="flex items-center text-end justify-end text-white">
                                <p>
                                    <p className="font-bold uppercase">
                                        Selanjutnya
                                    </p>
                                    <p>Task 3</p>
                                </p>
                                <span className="ml-4" aria-hidden="true">
                                    &rarr;
                                </span>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default S1P7;
