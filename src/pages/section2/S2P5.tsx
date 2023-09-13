import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const S2P5 = () => {
    const { t } = useTranslation("s2p5");
    const ContentS2P5 = [
        {
            id: "",
            title: "Section II",
            subtitle:
                "Science Practice In Socio-Scientific Issues: CVPD Disease in Citrus Plantation",
            content1: "Science Practice",
            content2:
                "The practices describe behaviours that scientists engage in as they investigate and build models and theories about the natural world. The NRC uses the term practices instead of a term like “skills” to emphasize that engaging in scientific investigation requires not only skill but also knowledge that is specific to each practice (NRC, 2012).",
            content3:
                "1.	Asking Questions and Defining Problems – A practice of science is to ask and refine questions that lead to descriptions and explanations of how the natural and designed world works and which can be empirically tested.",
            content4:
                "2.	Developing and Using Models – A practice of science is to use and construct models as helpful tools for representing ideas and explanations. These tools include diagrams, drawings, physical replicas, mathematical representations, analogies, and computer simulations.",
            content5:
                "3.	Planning and Carrying Out Investigation – Scientists plan and carry out investigations in the field or laboratory, working collaboratively as well as individually. Their investigations are systematic and require clarifying what counts as data and identifying variables or parameters.",
            content6:
                "4.	Analysing and Interpreting Data — Scientific investigations produce data that must be analysed in order to derive meaning. Because data patterns and trends are not always obvious, scientists use a range of tools—including tabulation, graphical interpretation, visualization, and statistical analysis—to identify the significant features and patterns in the data.",
            content7:
                "5.	Using Mathematic and Computational Thinking – In science, mathematics and computation are fundamental tools for representing physical variables and their relationships. They are used for a range of tasks such as constructing simulations; statistically analysing data; and recognizing, expressing, and applying quantitative relationships.",
            content8:
                "6.	Constructing Explanations and Designing Solutions – The products of science are explanations and solutions.",
            content9:
                "7.	Engaging in Argument from Evidence – Argumentation is the process by which explanations and solutions are reached.",
            content10:
                "8.	Obtaining, Evaluating, and Communicating Information – Scientists must be able to communicate clearly and persuasively the ideas and methods they generate. Critiquing and communicating ideas individually and in groups are critical professional activities.",
            labelBack: "Back",
            labelNext: "Next",
            textBack: "Task 2",
            textNext: "Task 3",
            linkBack: "/section2/4",
            linkNext: "/section2/6",
        },
    ];

    return (
        <section className="bg-indigo-50">
            {ContentS2P5.map((value) => (
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
                    <div className="font-light text-justify text-gray-500 text-base">
                        {value.content10}
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
export default S2P5;
