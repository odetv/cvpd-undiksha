import React from "react";
import { Link } from "react-router-dom";

const S1P3 = () => {
    return (
        <section className="bg-indigo-50">
            <div className="pt-8 pb-8 px-4 mx-auto max-w-screen-lg lg:p-8">
                <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-gray-900">
                    Section 1
                </h1>
                <h1 className="pb-6 text-center lg:text-lg font-bold text-gray-500">
                    CVPD THAT ATTACK CITRUS PRODUCTION
                </h1>
                <h1 className="pb-2 text-left text-sm lg:text-base font-bold text-gray-500">
                    The effects of CVPD in Citrus Plantation
                </h1>
                <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                    Citrus production in Indonesia has fluctuated since the last
                    decade. After reaching nearly 2.4 million tons in 2008,
                    production fell to a low of 1.5 million tons in
                    2015.Positive production trends then resumed, reaching 2.2
                    million tons in 2017 (Indonesian Statistic Bureau
                    2017).Citrus production has fluctuated due to a variety of
                    issues, particularly pest and disease attacks, particularly
                    CVPD or Huanglongbing (HLB), in several major production
                    centers (Widyaningsih et al., 2017).
                </p>
                <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                    Typical disease symptoms include yellowing leaves, dark
                    green leaf bones, leaves that are more rigid and thicker
                    than healthy leaves, and leaves that are smaller and harder.
                    The spread of the disease occurs primarily through insect
                    vectors such as Diaphorina citri Kuwayama (Homoptera:
                    Psyllidae). The spread of the disease can also be caused by
                    the spread of citrus plant seeds that have been infected by
                    pathogens that cause CVPD (tissue graft) (Capoor et al.,
                    1974; Mead, 1998). Wijaya (2007) says that the number of D.
                    citri as a vector insect and the presence of a source of
                    inoculum affect how CVPD spreads in the wild.
                </p>
                <div className="mx-auto relative w-10/12 sm:w-[500px] md:w-[500px] xl:w-[500px] lg:w-[500px] mt-8 mb-8 shadow-lg">
                    <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                        <h1 className="text-base text-white font-bold text-center">
                            Figure 3
                        </h1>
                    </div>
                </div>
                <p className="indent-8 font-light text-justify text-gray-500 text-base pb-2">
                    Based on a 2015 study, it was found that 98% of citrus
                    plants in Buleleng Regency and 60% in Karangasem Regency
                    were infected with CVPD. Due to the CVPD outbreak, a
                    largescale eradication was carried out until it reached
                    almost 100% in 1990. It's done specifically to siem oranges
                    and tangerines caused by an infectious CVPD (Citrus Vein
                    Phloem Degeneration) disease caused by the bacteria
                    Liberobacter asiaticum, which is common in citrus crops in
                    the field, so that the citrus fruit breaks into small pieces
                    and changes color, which is not good (Wirawan et al., 2014).
                    In addition, it is reported that this disease continues to
                    damage citrus crops in various plantation regions in
                    Kintamani, Bangli, Indonesia.
                </p>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between w-full max-w-screen-lg mx-auto mt-12">
                    <button className="px-4 bg-none border border-indigo-400 hover:bg-indigo-100 text-indigo-900 py-2 rounded-lg">
                        <Link to="/section1/2/" className="text-sm text-left">
                            <div className="flex items-center">
                                <span className="mr-4" aria-hidden="true">
                                    &larr;
                                </span>
                                <p>
                                    <p className="font-bold uppercase">
                                        Kembali
                                    </p>
                                    <p>
                                        Citrus Vein Phloem Degeneration that
                                        Attack Citrus Production
                                    </p>
                                </p>
                            </div>
                        </Link>
                    </button>
                    <button className="bg-green-600 border border-green-600 hover:bg-green-700 text-indigo-900 py-2 px-4 rounded-lg">
                        <Link to="/section1/4/" className="text-sm text-left">
                            <div className="flex items-center text-end justify-end text-white">
                                <p>
                                    <p className="font-bold uppercase">
                                        Selanjutnya
                                    </p>
                                    <p>Task 1</p>
                                </p>
                                <span className="ml-4" aria-hidden="true">
                                    &rarr;
                                </span>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default S1P3;