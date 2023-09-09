import React from "react";
import { Link } from "react-router-dom";

const ContentS3PFinish = [
    {
        id: "",
        title: "Section III: SYNTHESIS KEY IDEAS & PRACTICE CVPD Disease in Citrus Plantation",
        subtitle: "~ Completed ~",
        labelBack: "Back",
        labelNext: "Next",
        textBack: "Home",
        textNext: "Section IV",
        linkBack: "/",
        linkNext: "/section4",
    },
];

const S3PFinish = () => {
    return (
        <section className="bg-indigo-50 pb-36">
            {ContentS3PFinish.map((value) => (
                <div
                    key={value.id}
                    className="pt-8 pb-8 px-4 mx-auto max-w-screen-lg lg:p-8"
                >
                    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-28 lg:px-8">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <img
                                className="mx-auto h-24"
                                src="https://cdn.undiksha.ac.id/wp-content/uploads/2018/01/27142711/favicon-logo-undiksha.png"
                                alt=""
                            />
                            <figure className="mt-10">
                                <blockquote className="text-center text-md font-semibold leading-8 text-gray-600 sm:text-xl sm:leading-9">
                                    <p>{value.title}</p>
                                </blockquote>
                                <blockquote className="text-center text-2xl font-bold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                    <p>{value.subtitle}</p>
                                </blockquote>
                            </figure>
                            <div className="flex justify-center pt-5">
                                <span className="relative flex h-5 w-5">
                                    <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative rounded-full h-5 w-5 bg-green-500"></span>
                                </span>
                            </div>
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
export default S3PFinish;
