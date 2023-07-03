import React from "react";
import { Link } from "react-router-dom";
import ImageFigure1 from "../../assets/images/section1/Figure1.jpg";
import ImageFigure2 from "../../assets/images/section1/Figure2.jpg";

const ContentS1P1 = [
    {
        id: "",
        title: "Section 1",
        subtitle: "CVPD THAT ATTACK CITRUS PRODUCTION",
        content1: "Citrus as an Important Commodity",
        content2:
            "Citrus is one of the most important fruit commodities in Indonesia. Citrus came in second place behind bananas in terms of fruit production in 2017. People's consumption reached 0.06 kg per week in 2015 and increased up to 0.09 kg per week in 2016. Citrus also ranked first for the average fruit expenditure of Indonesians (in rupiah), both in the village and in the city (Ministry of Agriculture in Indonesia, 2019). Citrus consumption tends to increase, which is caused by the many good nutrients and non-nutrients found in this fruit. Citrus contains a number of secondary metabolites, such as flavonoids, alkaloids, coumarins, limonoids, carotenoids, phenolic acids, and essential oils, amongst several others (Figure 1). These active secondary metabolites show several biological activities of importance to human health, including anti-oxidative, antiinflammatory, and anti-cancer effects, as well as cardiovascular protective effects and neuroprotective effects (Adenaike & Abakpa, 2021).",
        content3:
            "With high demand for citrus consumption, this fruit plantation will be very profitable, increasing people's income, job opportunities, and national export foreign exchange. In terms of international trade, Indonesia has higher import than export values. Among South East Asian countries, Indonesia was considered the second largest citrus importer after Malaysia, with an increasing trend of up to 11% per year (Taufiq, et al., 2019 ). Citrus is also an important horticultural commodity that is growing rapidly in Bali. According to Alitawan (2017), Kintamani, Bangli is the center of the highest citrus production in Bali, with citrus land areas increasing in 2015. Many local farmers in Kintamani are converting land they have traditionally used to harvest corn into citrus-producing plots. They divert corn crop land into land where they plant citrus to sell in the local market, to meet the demands of tourists, the local society, and ritual purposes (Figure 2).",
        labelFigure1: "Figure 1: Nutrients in Citrus",
        labelFigure2: "Figure 2: Citrus use as a ritual",
        labelBack: "Kembali",
        labelNext: "Selanjutnya",
        textBack: "ENCOUNTER FOCAL ISSUE",
        textNext:
            "Citrus Vein Phloem Degeneration that Attack Citrus Production",
        linkBack: "/section1",
        linkNext: "/section1/2",
    },
];

const S1P1 = () => {
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
export default S1P1;
