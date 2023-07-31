import React from "react";
import { Link } from "react-router-dom";

const ContentS2P3 = [
    {
        id: "",
        title: "Section 2",
        subtitle:
            "Cross-Cutting Concepts in Socio-Scientific Issues: Pros and Cons of using Pesticides in Citrus nobilis Cultivation",
        content1: "Cross-Cutting Concepts",
        content2:
            "Cross-cutting concepts are those that apply across all scientific disciplines. They provide students with an organizational framework based on behavior and function that connects ideas from different scientific disciplines. Specifically, the crosscutting concepts provide a way to make connections between the disciplinary core ideas (CCSSO, 2018).",
        content3:
            "1.	Patterns – Observed patterns of forms and events guide organization and classification. Patterns prompt questions about the factors that influence cause and effect relationships. Patterns are useful as evidence to support explanations and arguments.",
        content4:
            "2.	Cause and Effect – Mechanism and explanation. Events have causes, sometimes simple, sometimes multifaceted and complex. A major activity of science is investigating and explaining causal relationships and the mechanisms by which they are mediated. Such mechanisms can then be tested across given contexts and used to predict and explain events in new contexts.",
        content5:
            "3.	Scale, Proportion, and Quantity – In considering phenomena, it is critical to recognize what is relevant at different measures of size, time, and energy and to recognize how changes in scale, proportion, or quantity affect a system’s structure or performance.",
        content6:
            "4.	Systems and System Models – Defining the system under study—specifying its boundaries and making explicit a model of that system—provides tools for understanding and testing ideas that are applicable throughout science and engineering.",
        content7:
            "5.	Energy and Matter – Flows, cycles, and conservation. Tracking fluxes of energy and matter into, out of, and within systems helps one understand the system’s possibilities and limitations.",
        content8:
            "6.	Structure and Function – An object’s structure and shape determine many of its properties and functions. The structures, shapes, and substructures of living organisms determine how the organism functions to meet its needs within an environment.",
        content9:
            "7.	Stability and Change – For natural and built systems alike, conditions of stability and rates of change provide the focus for understanding how the system operates and the causes of changes in systems.",
        content10: "Cause of Psyllid Diapohorina Citri Kuw",
        content11:
            "D. citri is a sucking insect with a pointed stylet. When the insect attempted to sucke sap from a plant, bacteria entered the insect's body and underwent a chemical process in the insect's body. When D. citri, which contained this Liberobacter, sucked the sap of a healthy citrus plant, the bacteria were expelled through its saliva. The disease is spread primarily by the insect vector D. citri Kuwayama. Tipe spread of the disease can also be caused by the spread of citrus plant seeds infected with CVPD pathogens (Capoor et al., 1974; Mead, 1998).",
        content12: "Effects for Citrus",
        content13:
            "Disease symptoms include yellowing leaves, dark green leaf bones, and leaves that are more rigid and thicker than healthy leaves and smaller (Mead, 1998; Knapp et al., 1999). while the fruit becomes small and hard (Wirawan et al., 1998). CVPD-affected plants' leaves undergo chlorosis; the symptoms resemble nitrogen deficiency, zinc, manganese, and iron deficiency (Tirtawidjaja, 1983).",
        labelBack: "Kembali",
        labelNext: "Selanjutnya",
        textBack: "Disciplinary Core Ideas In Socio-Scientific Issues",
        textNext: "Task 2",
        linkBack: "/section2/2",
        linkNext: "/section2/4",
    },
];

const S2P3 = () => {
    return (
        <section className="bg-indigo-50">
            {ContentS2P3.map((value) => (
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
                    <div className="indent-8 font-light text-justify text-gray-500 text-base mb-3">
                        {value.content2}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content3}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content4}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content5}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content6}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content7}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content8}
                    </div>
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content9}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500 mt-3">
                        {value.content10}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base mb-3">
                        {value.content11}
                    </div>
                    <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                        {value.content12}
                    </h1>
                    <div className="indent-8 font-light text-justify text-gray-500 text-base mb-3">
                        {value.content13}
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
export default S2P3;
