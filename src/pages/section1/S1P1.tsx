import React from "react";
import { Link } from "react-router-dom";

const S1P1 = () => {
    return (
        <section className="bg-indigo-50">
            <div className="pt-8 pb-8 px-4 mx-auto max-w-screen-lg lg:p-8">
                <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                    Section 1
                </h1>
                <h1 className="pb-6 text-center lg:text-lg font-bold text-gray-500">
                    CVPD THAT ATTACK CITRUS PRODUCTION
                </h1>
                <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                    Citrus as an Important Commodity
                </h1>
                <p className="indent-8 font-light text-justify text-gray-500 text-base">
                    Citrus is one of the most important fruit commodities in
                    Indonesia. Citrus came in second place behind bananas in
                    terms of fruit production in 2017. People's consumption
                    reached 0.06 kg per week in 2015 and increased up to 0.09 kg
                    per week in 2016. Citrus also ranked first for the average
                    fruit expenditure of Indonesians (in rupiah), both in the
                    village and in the city (Ministry of Agriculture in
                    Indonesia, 2019). Citrus consumption tends to increase,
                    which is caused by the many good nutrients and non-nutrients
                    found in this fruit. Citrus contains a number of secondary
                    metabolites, such as flavonoids, alkaloids, coumarins,
                    limonoids, carotenoids, phenolic acids, and essential oils,
                    amongst several others (Figure 1). These active secondary
                    metabolites show several biological activities of importance
                    to human health, including anti-oxidative, antiinflammatory,
                    and anti-cancer effects, as well as cardiovascular
                    protective effects and neuroprotective effects (Adenaike &
                    Abakpa, 2021).
                </p>
                <div className="mx-auto relative w-10/12 sm:w-[500px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-8 shadow-lg">
                    <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                        <h1 className="text-base text-white font-bold text-center">
                            Figure 1
                        </h1>
                    </div>
                </div>
                <p className="indent-8 font-light text-justify text-gray-500 text-base">
                    With high demand for citrus consumption, this fruit
                    plantation will be very profitable, increasing people's
                    income, job opportunities, and national export foreign
                    exchange. In terms of international trade, Indonesia has
                    higher import than export values. Among South East Asian
                    countries, Indonesia was considered the second largest
                    citrus importer after Malaysia, with an increasing trend of
                    up to 11% per year (Taufiq, et al., 2019 ). Citrus is also
                    an important horticultural commodity that is growing rapidly
                    in Bali. According to Alitawan (2017), Kintamani, Bangli is
                    the center of the highest citrus production in Bali, with
                    citrus land areas increasing in 2015. Many local farmers in
                    Kintamani are converting land they have traditionally used
                    to harvest corn into citrus-producing plots. They divert
                    corn crop land into land where they plant citrus to sell in
                    the local market, to meet the demands of tourists, the local
                    society, and ritual purposes (Figure 2).
                </p>
                <div className="mx-auto relative w-10/12 sm:w-[500px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-8 shadow-lg">
                    <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                        <h1 className="text-base text-white font-bold text-center">
                            Figure 2
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto mt-12">
                    <button className="px-4 bg-none border border-indigo-400 hover:bg-indigo-100 text-indigo-900 py-2 rounded-lg">
                        <Link to="/section1" className="text-sm text-left">
                            <div className="flex items-center">
                                <span className="mr-4" aria-hidden="true">
                                    &larr;
                                </span>
                                <p>
                                    <p className="font-bold uppercase">
                                        Kembali
                                    </p>
                                    <p>ENCOUNTER FOCAL ISSUE</p>
                                </p>
                            </div>
                        </Link>
                    </button>
                    <button className="bg-green-600 border border-green-600 hover:bg-green-700 text-indigo-900 py-2 px-4 rounded-lg">
                        <Link to="/section1/2" className="text-sm text-left">
                            <div className="flex items-center text-end justify-end text-white">
                                <p>
                                    <p className="font-bold uppercase">
                                        Selanjutnya
                                    </p>
                                    <p>
                                        Citrus Vein Phloem Degeneration that
                                        Attack Citrus Production
                                    </p>
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
export default S1P1;
