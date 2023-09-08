import React from "react";
import { Link } from "react-router-dom";
import PersistentTextarea from "../../components/PersistentTextarea";
import CustomTable from "../../components/CustomTable";
import TableS1 from "../../assets/images/section1/TableS1.png";

const ContentS1P4 = [
    {
        id: "",
        title: "Section 1",
        subtitle: "Find out the symptom of CVPD in Citrus!",
        content1: "Task 1",
        content2:
            "Read the text and find out the symptoms of CVPD in citrus. You can complete your explanation by drawing every part of the citrus that is attacked by this disease. A separate sheet of paper can be used for a better and more complete answer.",
        content3:
            "Make a table of the quality differences between healthy citrus and citrus affected by CVPD to round out your explanation! You can also complete your answer with a picture!",
        content4: "Some tips to make a table:",
        content5: "1. Name your table",
        content6: "2. Figure out how many columns and rows",
        content7: "3. Draw the table",
        content8: "4. Label all your columns",
        content9: "5. Record the data from your experiment",
        content10: "6. Check your table",
        labelBack: "Back",
        labelNext: "Next",
        textBack: "The effects of CVPD in Citrus Plantation",
        textNext: "Citrus as Largest Crops in The World",
        linkBack: "/section1/3",
        linkNext: "/section1/5",
    },
];

const S1P4 = () => {
    const numRows = 4;
    const numCols = 4;
    const initialData = Array.from({ length: numRows }, () =>
        Array(numCols).fill("")
    );

    return (
        <section className="bg-indigo-50">
            {ContentS1P4.map((value) => (
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
                    <p className="font-light text-justify text-gray-500 text-base pb-2">
                        {value.content2}
                    </p>
                    <div className="flex flex-col gap-3">
                        <PersistentTextarea
                            id="Citrus Leaf"
                            placeholder="Citrus Leaf"
                        />
                        <PersistentTextarea
                            id="Citrus Fruits"
                            placeholder="Citrus Fruits"
                        />
                    </div>

                    <p className="font-light text-justify text-gray-500 text-base pb-2 pt-8">
                        {value.content3}
                    </p>
                    <div className="">
                        <CustomTable
                            numRows={numRows}
                            numCols={numCols}
                            initialData={initialData}
                        />
                    </div>
                    <div className="xl:flex lg:flex md:flex sm:flex flex-row-reverse gap-3 mt-6 justify-between items-start">
                        <div>
                            <p className="font-light text-justify text-gray-500 text-base">
                                {value.content4}
                            </p>
                            <p className="font-light text-justify text-gray-500 text-base">
                                {value.content5}
                            </p>
                            <p className="font-light text-justify text-gray-500 text-base">
                                {value.content6}
                            </p>
                            <p className="font-light text-justify text-gray-500 text-base">
                                {value.content7}
                            </p>
                            <p className="font-light text-justify text-gray-500 text-base">
                                {value.content8}
                            </p>
                            <p className="font-light text-justify text-gray-500 text-base">
                                {value.content9}
                            </p>
                            <p className="font-light text-justify text-gray-500 text-base">
                                {value.content10}
                            </p>
                        </div>
                        <img className="w-200" src={TableS1} />
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
export default S1P4;
