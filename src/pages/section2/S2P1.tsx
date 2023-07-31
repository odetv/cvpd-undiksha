import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/images/section2/DisciplinaryCoreIdeas.png";

const ContentS2P1 = [
    {
        id: "",
        title: "Section 2",
        subtitle:
            "Disciplinary Core Ideas In Socio-Scientific Issues: CVPD Disease in Citrus Plantation",
        content1: "Disciplinary Core Ideas",
        content2:
            "Based on the instructional model of using SSI-TL (Sadler, et al., 2017), disciplinary core ideas are also known as scientific facts or content knowledge. Disciplinary ideas are grouped in four domains: the physical sciences; the life sciences; the earth and space sciences; and engineering, technology, and applications of science.",
        content3: "Life Sciences",
        content4:
            "The content knowledge in life sciences related in SSI: CVPD disease in Citrus plantation is LS 1: From molecules to organism: structures and process. Some specific insect as a vector of CVPD disease. Insect structure as the vector and the process of this disease attack citrus. a CVPD disease-causing bacteria named Liberobacter. Liberobacter is an alpha-proteobacterium and has been successfully characterized by analysis of the 16S rDNA sequences and beta operon gene (Hocquellet et al., 1999). CVPD disease-causing pathogenic bacteria are known to be spread by insects such as fleas, also called citrus psyllids, named D. citri Kuwayama (Figure 8). Insect D. citri as a vector, Liberobacter bacteria have the potential to breed highly, especially in the lowlands, and the period of transmission (the infectious period) can take quite a long time, up to 90 days. This insect can lay up to 800 eggs, and the eggs may hatch after 3-5 days; a year later, there were nine generations (Anonymous, 1996).",
        content5:
            "Psyllid Diapohorina Citri Kuw is a transmitting insect or vector for CVPD that accelerates the spread of this disease in the field. A CVPD vector containing the pathogen L. asiaticus has been shown to transmit this systemic disease to healthy citrus trees. If there are no citrus trees infected by CVPD in the orchard due to disease-free citrus seedlings, the presence of transmitting insects is just an ordinary pest that damages shoot buds or young shoots.",
        content6:
            "D. citri can be effectively controlled using stem wiping or painting methods with a systemic insecticide containing the active ingredient imidacloprid or other systemic pesticides, the efficacy of which must be determined beforehand. The stem painting can be repeated every 2–4 weeks. It can also be done by sprinkling an insecticide solution containing the active ingredient tiametoksam (5 grams per liter) at a rate of 0.5 liters per tree (4 years old) under the plant canopy or by spraying with insecticide when plants form buds or shoots.",
        labelBack: "Kembali",
        labelNext: "Selanjutnya",
        textBack: "ENGAGE WITH THREE-DIMENSIONAL LEARNING",
        textNext: "Task 1",
        linkBack: "/section2",
        linkNext: "/section2/2",
    },
];

const S2P1 = () => {
    return (
        <section className="bg-indigo-50">
            {ContentS2P1.map((value) => (
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
                        <img className="w-full" src={Image1} />
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                        {value.content3}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content4}
                    </div>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content5}
                    </div>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base">
                        {value.content6}
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
export default S2P1;
