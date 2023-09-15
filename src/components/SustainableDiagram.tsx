import React, { useState } from "react";

const SustainableDiagram: React.FC = () => {
    // State untuk menyimpan teks di masing-masing lingkaran
    const [textA, setTextA] = useState<string>("");
    const [textB, setTextB] = useState<string>("");
    const [textC, setTextC] = useState<string>("");

    return (
        <div className="flex flex-col-reverse items-center justify-center h-full">
            <svg width="300" height="300">
                {/* Lingkaran B */}
                <circle cx="100" cy="200" r="100" fill="blue" opacity={0.5} s />
                <text
                    x="50"
                    y="220"
                    textAnchor="middle"
                    fill="white"
                    fontSize="24"
                >
                    {textA || "B"}
                </text>

                {/* Lingkaran A */}
                <circle cx="150" cy="100" r="100" fill="green" opacity={0.5} />
                <text
                    x="150"
                    y="70"
                    textAnchor="middle"
                    fill="white"
                    fontSize="24"
                >
                    {textB || "A"}
                </text>

                {/* Lingkaran C */}
                <circle cx="200" cy="200" r="100" fill="red" opacity={0.5} />
                <text
                    x="250"
                    y="220"
                    textAnchor="middle"
                    fill="white"
                    fontSize="24"
                >
                    {textC || "C"}
                </text>
            </svg>
            {/* Tulisan "Sustainable Development" */}
            <div className="text-center text-xs font-bold absolute bg-blue-900 text-white rounded-md p-2">
                <p>Sustainable</p>
                <p>Development</p>
            </div>
        </div>
    );
};

export default SustainableDiagram;
