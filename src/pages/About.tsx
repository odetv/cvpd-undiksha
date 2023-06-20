import { PaperClipIcon } from "@heroicons/react/20/solid";
import React from "react";
import FileModuleDownload from "../assets/files/MODULE CVPD 2022.pdf";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="mt-8 px-4 mx-auto max-w-screen-lg mb-8">
            <div className="px-4 sm:px-0 text-center">
                <h1 className="mb-6 text-center marker:text-lg lg:text-xl font-bold text-gray-900">
                    ABOUT
                </h1>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-bold leading-6 text-gray-900">
                            Author
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Luh Mitha Priyanka, S.Pd., M.Pd.<br></br>
                            Dr. Ir. Ketut Srie Marhaeni Julyasih, M.Si.<br></br>
                            I Gede Arjana, S.Pd., M.Sc. RWTH<br></br>
                            Prof. Dr. Susanne Bögeholz<br></br>
                            Finn Matthiesen<br></br>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-bold leading-6 text-gray-900">
                            Editor
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Prof. Dr. I Nengah Suparta, M.Si<br></br>
                            Dr. I Wayan Muderawan, M.S.<br></br>
                            Dr. I Wayan Sukra Warpala, M.Sc.<br></br>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-bold leading-6 text-gray-900">
                            Published by
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            UNDIKSHA PRESS<br></br>
                            Jalan Udayana, Kampus Tengah<br></br>
                            Singaraja-Bali Telp (0362). 22570<br></br>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-bold leading-6 text-gray-900">
                            Printing
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Undiksha<br></br>
                            Jalan Udayana No. 11 Singaraja 81116, Bali.<br></br>
                            ISBN 978-623-7482-52-9<br></br>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-bold leading-6 text-gray-900">
                            About
                        </dt>
                        <dd className="mt-1 text-justify text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Socio-scientific issues are complex and contentious
                            societal issues with substantive connections to
                            scientific ideas and principles. The context of SSI
                            in learning begins in the nearby neighborhood and
                            has reality and meaning in everyday life. SSI is
                            chosen as a context for learning because it may be
                            utilized to make students' science education more
                            relevant while also enhancing their capacity to
                            analyze scientific data. One of the socio-scientific
                            issues that is used in this proposed research is the
                            CVPD disease issue that has been attacking citrus
                            crops in several plantations at Kintamani, Bangli,
                            Indonesia. This issue has become one of the local
                            environmental issues that is not only happening in
                            Bali but also in other areas of Indonesia. In order
                            to help the farmers control the CVPD disease, it is
                            crucial to provide them with enough information on
                            how to comprehend all control techniques. It entails
                            providing information on how to prevent and manage
                            the insect vectors that transmit this CVPD disease.
                            Incorporating knowledge and data regarding the
                            identification of CVPD disease vectors into a
                            learning module is one of the effective methods. The
                            designed SSIbased learning module can inform
                            students about current local issues occurring in
                            their surroundings. In addition to presenting
                            knowledge about the CVPD and the CPVD-carrying
                            insect vectors, students will be encouraged to
                            utilize their critical thinking abilities to analyze
                            the module's content in order to comprehend the CVPD
                            disease's control strategies. Lastly, the students
                            can also share any useful information from the
                            module to educate the local farmers about the vector
                            insect control that can be used as one strategy to
                            cope with the CPVD disease, which has been harming
                            the plantation yields of local farmers. This SSI
                            module is a result of joint research Counterpart CRC
                            990 EFFor-TS between Undiksha and Gottingen
                            University with supported by The Ministry of
                            Education, Culture, Research, and Technology, and
                            IPB.
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-bold leading-6 text-gray-900">
                            Bibliography
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="py-6">
                                <Link
                                    to="/bibliography"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 divide-y divide-gray-100 px-4 py-4 rounded-md border"
                                >
                                    Check Bibliography
                                </Link>
                            </div>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-bold leading-6 text-gray-900">
                            Attachments
                        </dt>
                        <dd className="py-3 first-line:text-sm text-gray-900 sm:col-span-2">
                            <ul
                                role="list"
                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                            >
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon
                                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                MODULE CVPD 2022.pdf
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a
                                            href={FileModuleDownload}
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default About;
