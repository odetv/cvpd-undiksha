import React from "react";
import { Link } from "react-router-dom";

const S1P8 = () => {
    return (
        <section className="bg-indigo-50 pb-20">
            <div className="pt-8 pb-8 px-4 mx-auto max-w-screen-lg lg:p-8">
                <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                    Section 1
                </h1>
                <h1 className="pb-6 text-center lg:text-lg font-bold text-gray-500">
                    SUMMARY SECTION 1 ENCOUNTER FOCAL ISSUE
                </h1>
                <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                    Task 3
                </h1>
                <p className="font-light text-justify text-gray-500 text-base pb-2">
                    After learning about the first section, please make a
                    summary based on your own understanding!
                </p>
                <div className="flex flex-col gap-3">
                    <textarea
                        className="textarea p-2 border border-indigo-500 rounded-lg w-full h-96"
                        placeholder="Summary"
                    ></textarea>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto mt-12">
                    <button className="px-4 bg-none border border-indigo-400 hover:bg-indigo-100 text-indigo-900 py-2 rounded-lg">
                        <Link to="/section1/7" className="text-sm text-left">
                            <div className="flex items-center">
                                <span className="mr-4" aria-hidden="true">
                                    &larr;
                                </span>
                                <p>
                                    <p className="font-bold uppercase">
                                        Kembali
                                    </p>
                                    <p>
                                        The effects of CVPD in Citrus Plantation
                                    </p>
                                </p>
                            </div>
                        </Link>
                    </button>
                    <button className="bg-green-600 border border-green-600 hover:bg-green-700 text-indigo-900 py-2 px-4 rounded-lg">
                        <Link
                            to="/section1/finish"
                            className="text-sm text-left"
                        >
                            <div className="flex items-center text-end justify-end text-white">
                                <p>
                                    <p className="font-bold uppercase">
                                        Selanjutnya
                                    </p>
                                    <p>Selesai</p>
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
export default S1P8;
