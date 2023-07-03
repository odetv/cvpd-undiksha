import React from "react";
import { Link } from "react-router-dom";
import ImageFigure4 from "../../assets/images/section1/Figure4.jpg";
import ImageFigure5 from "../../assets/images/section1/Figure5.jpg";

const ContentS1P5 = [
    {
        id: "",
        title: "Section 1",
        subtitle: "PROBLEMATIC ISSUE IN CITRUS PLANTATION",
        content1: "Citrus as Largest Crops in The World",
        content2:
            "Citrus fruits are one of the largest fruit crops in the world. About 30% of citrus fruits are processed to obtain various products, mainly juice (Figure 4). Similarly, the citrus industry is also the second-largest fruit-processing industry, surpassed again by the grape industry, which mainly produces wine. Neither orange juice nor wine can be considered essential foods, but they do have an important role in our lives. Although citrus fruits have been consumed since ancient times, citrus processing, as it is known today, was not possible until thermal treatment (to inactivate enzymes and microorganisms) and concentration processes were commercially available. Since then, the citrus industry has developed rapidly, becoming prominent among food industries (Izquierdo et al., 2013).",
        content3:
            "Citrus is also common in every Balinese ceremony. Here in Bali, local farmers love to plant citrus due to the high demand, especially when there are religious ceremonies. Citrus has a very good opportunity as a local fruit for business purposes, being consumed every day as well as for every Balinese ceremony (Figure 5).",
        labelFigure4: "Figure 4: Citrus 'Juice",
        labelFigure5: "Figure 5: Citrus use in Balinese ceremony",
        labelBack: "Kembali",
        labelNext: "Selanjutnya",
        textBack: "Task 1",
        textNext: "Problems in Citrus Plantation",
        linkBack: "/section1/4",
        linkNext: "/section1/6",
    },
];

const S1P5 = () => {
    return (
        <section className="bg-indigo-50">
            {ContentS1P5.map((value) => (
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
                    <div className="mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure4} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure4}
                            </h1>
                        </div>
                    </div>
                    <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                        {value.content3}
                    </p>
                    <div className="mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure5} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure5}
                            </h1>
                        </div>
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
export default S1P5;
