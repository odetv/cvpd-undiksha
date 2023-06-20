import ImageIntro from "../assets/images/intro.jpg";
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <section className="bg-white">
                <div className="mt-8 px-4 mx-auto lg:m-8">
                    <div className="mx-auto max-w-screen-2xl mb-8">
                        <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                            SOCIO-SCIENTIFIC ISSUE
                        </h1>
                        <h1 className="mb-6 text-center lg:text-lg font-bold text-gray-500">
                            CVPD DISEASE IN CITRUS PLANTATIONS AT KINTAMANI,
                            BANGLI-INDONESIA
                        </h1>
                        <img
                            src={ImageIntro}
                            alt="image"
                            className="mx-auto mt-8 mb-8 rounded-lg object-cover lg:h-80 lg:w-10/12 xl:h-80 xl:w-10/12"
                        />
                        <p className="font-light text-justify text-gray-500 sm:text-base">
                            Did you know that CPVD disease is a major cause of
                            yield loss in citrus plantations in almost all
                            countries, especially in Asia and Africa? Citrus is
                            one of the commodities that plays an important role
                            in the economy and the welfare of farmers. On the
                            other hand, CVPD disease is still a problem in
                            citrus plantations, which affects the environment.
                            With the help of this module, we will discover these
                            issues in CVPD disease in citrus plantations in four
                            sections. This module is divided into four sections,
                            the majority of which concern the CVPD disease in
                            citrus plantations in Kintamani, Bali. The first
                            section will begin with an encounter with a focal
                            issue using socio-scientific issue teaching and
                            learning. This section will define CVPD and explain
                            how dangerous it is in citrus plantations. In this
                            section, you will also discover the other
                            problematic issue in the citrus plantations of Bali.
                            In the second section, this module will help you
                            engage in three-dimensional learning related to CVPD
                            disease in citrus plantations. You will discover
                            disciplinary core ideas, cross-cutting concepts, and
                            science practice in these socioscientific issues.
                            Following that, you will discover a possible
                            solution for preventing CVPD disease attacks on
                            citrus (including evaluation and reflection) through
                            Integrated Management of Healthy Citrus. In the last
                            section, the concept of sustainable development is
                            introduced, and the relationship between Integrated
                            Management of Healthy Citrus and sustainable
                            development is examined.
                        </p>
                    </div>
                    <div className="mx-auto max-w-screen-2xl grid gap-6 lg:grid-cols-4">
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                    Section 1
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold text-gray-900 uppercase">
                                <Link to="#">
                                    ENCOUNTER FOCAL ISSUE: How Dangerous CVPD
                                    Disease in Citrus Plantation
                                </Link>
                            </h2>
                            <p className="mb-5 font-light text-gray-500">
                                This section will explain what CVPD is and its
                                threat to citrus plantations. You will also
                                learn about the additional problematic aspect of
                                citrus plantations in Bali.
                            </p>
                            <div className="flex justify-end items-center">
                                <Link
                                    to="#"
                                    className="inline-flex items-center font-bold text-gray-900"
                                >
                                    Go
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </article>
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                    Section 2
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold text-gray-900 uppercase">
                                <Link to="#">
                                    ENGAGE WITH THREE-DIMENSIONAL LEARNING
                                </Link>
                            </h2>
                            <p className="mb-5 font-light text-gray-500">
                                This second section will help you engage in
                                three-dimensional learning related to CVPD
                                disease in citrus plantations. You will discover
                                disciplinary core ideas, cross-cutting concepts,
                                and science practice in these socioscientific
                                issues.
                            </p>
                            <div className="flex justify-end items-center">
                                <Link
                                    to="#"
                                    className="inline-flex items-center font-bold text-gray-900"
                                >
                                    Go
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </article>
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                    Section 3
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold text-gray-900 uppercase">
                                <Link to="#">
                                    SYNTHESIS KEY IDEAS & PRACTICE CVPD Disease
                                    in Citrus Plantation
                                </Link>
                            </h2>
                            <p className="mb-5 font-light text-gray-500">
                                In this third section you will find the possible
                                way as the best solution to prevent CVPD disease
                                in Citrus plantation (including evaluation and
                                reflection) through Integrated Management of
                                Healthy Citrus.
                            </p>
                            <div className="flex justify-end items-center">
                                <Link
                                    to="#"
                                    className="inline-flex items-center font-bold text-gray-900"
                                >
                                    Go
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </article>
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="text-xs font-bold bg-blue-500 text-white p-1.5 rounded-md">
                                    Section 4
                                </span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold text-gray-900 uppercase">
                                <Link to="#">
                                    SUSTAINABLE DEVELOPMENT THROUGH Integrated
                                    Management of Healthy Citrus
                                </Link>
                            </h2>
                            <p className="mb-5 font-light text-gray-500">
                                In this fourth section you will learn the
                                concept of sustainable development and how far
                                Integrated Management of Healthy Citrus relates
                                to the concept.
                            </p>
                            <div className="flex justify-end items-center">
                                <Link
                                    to="#"
                                    className="inline-flex items-center font-bold text-gray-900"
                                >
                                    Go
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
