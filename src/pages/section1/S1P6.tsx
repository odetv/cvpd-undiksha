import React from "react";
import { Link } from "react-router-dom";
import ImageFigure6 from "../../assets/images/section1/Figure6.jpg";
import ImageFigure7v1 from "../../assets/images/section1/Figure7-1.jpg";
import ImageFigure7v2 from "../../assets/images/section1/Figure7-2.jpg";

const ContentS1P6 = [
    {
        id: "",
        title: "Section 1",
        subtitle: "PROBLEMATIC ISSUE IN CITRUS PLANTATION",
        content1: "Problems in Citrus Plantation",
        content2:
            "The development of citrus as horticultural commodities become a top priority in use their own citrus’ land as their main income (FiguIndonesia, especially in Bali (Wuryantini, 2018). Citrus is one of excellent commodities that plays an important role in the economy and the welfare of farmers. In Bali, many farmers re 6). On the other hand, there are still problems in Citrus plantation in Bali which affect the quantity and quality of this fruit.",
        content3:
            "Citrus vein phloem degeneration (CVPD) is the most important disease and a major cause of yield loss in citrus plantations in almost all countries, especially in Bali. Based on the interview, CVPD disease still exists in Kintamani. There are some citrus farms that are suspected of being infected with CVPD. This issue has become one of the local environmental issues that is affecting citrus production. The typical symptoms when this disease attacks citrus are that the leaves become yellow, the bones of the leaves become dark green, the leaves become more rigid and thicker than the healthy leaves and smaller, while the fruits become small and hard (Figure 7).",
        content4:
            'The typical symptom of CVPD disease is chlorosis of the leaves, which resembles the symptoms of mineral deficiency. The detection of CVPD is quite difficult, so it requires special detection methods. Conventional detection is not satisfactory because the concentration of bacteria in plants is low, the distribution is uneven, the incubation period is long, and many citrus plants are latently infected (Nurhadi, 2015). Conditions such as low temperatures, different plant varieties, nutrient deficiencies, or combinations with other diseases cause indistinct symptoms that make visual observation difficult. According to Ratu et al. (2020), citrus plants that are attacked by CVPD show symptoms of yellowing or chlorotic leaves. The color of the leaf bones remains green, the leaf size becomes small, and the leaves become stiff. Chlorosis occurs because the formation of chlorophyll in the leaves is reduced. According to Rustiani et al. (2015), the symptoms of chlorosis are caused by infection. Liberobacter asiaticus showed physiological disturbances in plants. Physiological disturbances occur because the bacterial mass causes inhibition of nutrient transport to and from the phloem tissue. The same thing was said by Tafik (2010). In mature plants, the symptoms that often appear are branches with yellow leaves, which contrast with other branches whose leaves are still healthy. This phenomenon is known as "sectoral greening." Leaves on infected branches protrude like brushes. Another symptom is that the leaves are narrower and more pointed, with a yellow color between the leaf bones.',
        labelFigure6: "Figure 6: Citrus’ land as a main income for farmers",
        labelFigure7v1:
            "Figure 7: Symptoms of CVPD attack on citrus plant leaves",
        labelFigure7v2:
            "Figure 7: Symptoms of CVPD attack on citrus plant leaves",
        labelBack: "Kembali",
        labelNext: "Selanjutnya",
        textBack: "Citrus as Largest Crops in The World",
        textNext: "Task 2",
        linkBack: "/section1/5",
        linkNext: "/section1/7",
    },
];

const S1P6 = () => {
    return (
        <section className="bg-indigo-50">
            {ContentS1P6.map((value) => (
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
                        <img className="w-full" src={ImageFigure6} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure6}
                            </h1>
                        </div>
                    </div>
                    <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                        {value.content3}
                    </p>
                    <div className="mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure7v1} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure7v1}
                            </h1>
                        </div>
                    </div>
                    <div className="mx-auto relative w-full sm:w-[700px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-16 shadow-lg">
                        <img className="w-full" src={ImageFigure7v2} />
                        <div className="absolute bottom--5 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                            <h1 className="text-base text-white font-bold text-center">
                                {value.labelFigure7v2}
                            </h1>
                        </div>
                    </div>
                    <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                        {value.content4}
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
export default S1P6;
