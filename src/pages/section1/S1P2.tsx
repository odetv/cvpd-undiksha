import React from "react";
import { Link } from "react-router-dom";

const ContentS1P2 = [
    {
        id: "",
        title: "Section 1",
        subtitle: "CVPD THAT ATTACK CITRUS PRODUCTION",
        content1:
            "Citrus Vein Phloem Degeneration that Attack Citrus Production",
        content2:
            'The high demand and consumption of citrus is due to the fact that this fruit is easy to find in the community and because the price is quite affordable. On the other hand, the quality of citrus can be influenced by various factors, including the attack of Citrus Vein Phloem Degeneration (CVPD). CVPD disease is caused by a gram-negative bacteria, Liberibacter asiaticus. It is transmitted by an insect vector, Diaphorina citric, through the osculation of seedlings from CVPD diseaseinfected citrus plants. Several types of citrus plants, especially those with less economic value, were known to be resistant to CVPD. Types of citrus that are resistant to CVPD are hereafter referred to as "citrus with the CVPDr gene." Citrus plants resistant to CVPD (CVPDr) are thought to contain genes that produce a trait that is able to break the pathogenic infection of CVPD (L. asiaticum) or is able to resist transmission of pathogens carried by vector insects (Wirawan et al., 2014).',
        content3:
            "The CVPD disease issue has been attacking citrus crops in several plantations at Kintamani, Bangli, Indonesia. This issue has become one of the local environmental issues that is not only happening in Bali but also in other areas of Indonesia. The CPVD disease is a major cause of yield loss in citrus plantations in almost all countries, especially Asia and Africa. Africa reduced citrus crop losses from CVPD diseases by 30- 100% in 1965. Previous attacks occurred in 1932–1936 and in 1939– 1946. In Vietnam, especially in the Mekong Delta, 70–79% of the crop has been infected, and Vinh Long Province and Can Tho reduced crop yields by 42%. Damage to crops in the Philippines is estimated at seven million trees between 1962 and 1971, wiping out more than one million trees in one area. Plant damage in Thailand exceeded 95%, while approximately three million crops in Indonesia were damaged between 1960 and 1970 (Julyasih, 2009).",
        labelBack: "Back",
        labelNext: "Next",
        textBack: "Citrus as an Important Commodity",
        textNext: "The effects of CVPD in Citrus Plantation",
        linkBack: "/section1/1",
        linkNext: "/section1/3",
    },
];

const S1P2 = () => {
    return (
        <section className="bg-indigo-50 pb-20">
            {ContentS1P2.map((value) => (
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
                    <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                        {value.content3}
                    </p>
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
export default S1P2;
