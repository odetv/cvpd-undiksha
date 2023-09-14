import { PaperClipIcon } from "@heroicons/react/20/solid";
import React from "react";
import FileModuleDownload from "../assets/files/Module CVPD Undiksha.pdf";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation("about");

    return (
        <section className="bg-indigo-50">
            <div className="pt-8 mx-auto max-w-screen-lg pb-8">
                <div className="px-4 sm:px-0 text-center">
                    <h1 className="mb-6 text-center marker:text-lg lg:text-xl font-bold text-gray-900">
                        {t("1")}
                    </h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-bold leading-6 text-gray-900">
                                {t("2")}
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Luh Mitha Priyanka, S.Pd., M.Pd.<br></br>
                                Dr. Ir. Ketut Srie Marhaeni Julyasih, M.Si.
                                <br></br>I Gede Arjana, S.Pd., M.Sc. RWTH
                                <br></br>
                                Prof. Dr. Susanne Bögeholz<br></br>
                                Finn Matthiesen<br></br>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-bold leading-6 text-gray-900">
                                {t("3")}
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Prof. Dr. I Nengah Suparta, M.Si<br></br>
                                Dr. I Wayan Muderawan, M.S.<br></br>
                                Dr. I Wayan Sukra Warpala, M.Sc.<br></br>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-bold leading-6 text-gray-900">
                                {t("4")}
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                UNDIKSHA PRESS<br></br>
                                Jalan Udayana, Kampus Tengah<br></br>
                                Singaraja-Bali Telp (0362). 22570<br></br>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-bold leading-6 text-gray-900">
                                {t("5")}
                            </dt>
                            <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Undiksha<br></br>
                                Jalan Udayana No. 11 Singaraja 81116, Bali.
                                <br></br>
                                ISBN 978-623-7482-52-9<br></br>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="font-bold leading-6 text-gray-900">
                                {t("6")}
                            </dt>
                            <dd className="mt-1 text-justify leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {t("7")}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 items-center">
                            <dt className="font-bold leading-6 text-gray-900">
                                {t("8")}
                            </dt>
                            <dd className="py-4 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <div>
                                    <Link
                                        to="/bibliography"
                                        className="font-medium text-sm text-indigo-600 hover:text-indigo-500 px-4 py-4 rounded-md border border-blue-400"
                                    >
                                        {t("10")}
                                    </Link>
                                </div>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 items-center">
                            <dt className="font-bold leading-6 text-gray-900">
                                {t("9")}
                            </dt>
                            <dd className="first-line:text-gray-900 sm:col-span-2">
                                <ul
                                    role="list"
                                    className="rounded-md border border-blue-400"
                                >
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon
                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                aria-hidden="true"
                                            />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">
                                                    {t("12")}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a
                                                href={FileModuleDownload}
                                                className="font-medium text-sm text-indigo-600 hover:text-indigo-500"
                                            >
                                                {t("11")}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default About;
