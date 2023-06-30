import React from "react";
import { Link } from "react-router-dom";
import ImageFigure4 from "../../assets/images/section1/Figure4.jpg";
import ImageFigure5 from "../../assets/images/section1/Figure5.jpg";

const S1P5 = () => {
    return (
        <section className="bg-indigo-50">
            <div className="pt-8 pb-8 px-4 mx-auto max-w-screen-lg lg:p-8">
                <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                    Section 1
                </h1>
                <h1 className="pb-6 text-center lg:text-lg font-bold text-gray-500">
                    PROBLEMATIC ISSUE IN CITRUS PLANTATION
                </h1>
                <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                    Citrus as Largest Crops in The World
                </h1>
                <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                    Citrus fruits are one of the largest fruit crops in the
                    world. About 30% of citrus fruits are processed to obtain
                    various products, mainly juice (Figure 4). Similarly, the
                    citrus industry is also the second-largest fruit-processing
                    industry, surpassed again by the grape industry, which
                    mainly produces wine. Neither orange juice nor wine can be
                    considered essential foods, but they do have an important
                    role in our lives. Although citrus fruits have been consumed
                    since ancient times, citrus processing, as it is known
                    today, was not possible until thermal treatment (to
                    inactivate enzymes and microorganisms) and concentration
                    processes were commercially available. Since then, the
                    citrus industry has developed rapidly, becoming prominent
                    among food industries (Izquierdo et al., 2013).
                </p>
                <div className="mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                    <img className="w-full" src={ImageFigure4} />
                    <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                        <h1 className="text-base text-white font-bold text-center">
                            Figure 4
                        </h1>
                    </div>
                </div>
                <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                    Citrus is also common in every Balinese ceremony. Here in
                    Bali, local farmers love to plant citrus due to the high
                    demand, especially when there are religious ceremonies.
                    Citrus has a very good opportunity as a local fruit for
                    business purposes, being consumed every day as well as for
                    every Balinese ceremony (Figure 5).
                </p>

                <div className="mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                    <img className="w-full" src={ImageFigure5} />
                    <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                        <h1 className="text-base text-white font-bold text-center">
                            Figure 5
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto mt-12">
                    <button className="px-4 bg-none border border-indigo-400 hover:bg-indigo-100 text-indigo-900 py-2 rounded-lg">
                        <Link to="/section1/4" className="text-sm text-left">
                            <div className="flex items-center">
                                <span className="mr-4" aria-hidden="true">
                                    &larr;
                                </span>
                                <p>
                                    <p className="font-bold uppercase">
                                        Kembali
                                    </p>
                                    <p>Task 1</p>
                                </p>
                            </div>
                        </Link>
                    </button>
                    <button className="bg-green-600 border border-green-600 hover:bg-green-700 text-indigo-900 py-2 px-4 rounded-lg">
                        <Link to="/section1/6" className="text-sm text-left">
                            <div className="flex items-center text-end justify-end text-white">
                                <p>
                                    <p className="font-bold uppercase">
                                        Selanjutnya
                                    </p>
                                    <p>Problems in Citrus Plantation</p>
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
export default S1P5;
