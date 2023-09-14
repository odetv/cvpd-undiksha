import React from "react";
import { Link } from "react-router-dom";
import PersistentTextarea from "../../components/PersistentTextarea";
import CustomTable from "../../components/CustomTable";
import TableS1 from "../../assets/images/section1/TableS1.png";
import { useTranslation } from "react-i18next";

const S1P4 = () => {
    const { t } = useTranslation("s1p4");
    const ContentS1P4 = [
        {
            id: "",
            title: t("1"),
            subtitle: t("2"),
            content1: t("3"),
            content2: t("4"),
            content3: t("5"),
            content4: t("6"),
            content5: t("7"),
            content6: t("8"),
            content7: t("9"),
            content8: t("10"),
            content9: t("11"),
            content10: t("12"),
            content11: t("13"),
            content12: t("14"),
            labelBack: t("labelBack"),
            labelNext: t("labelNext"),
            textBack: t("textBack"),
            textNext: t("textNext"),
            linkBack: "/section1/3",
            linkNext: "/section1/5",
        },
    ];

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
                            id={value.content11}
                            placeholder={value.content11}
                        />
                        <PersistentTextarea
                            id={value.content12}
                            placeholder={value.content12}
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
