import React, { useState, ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface CustomTableProps {
    numRows: number;
    numCols: number;
    initialData: string[][];
}

const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem("tableData");
    return savedData ? JSON.parse(savedData) : null;
};

const saveToLocalStorage = (data: string[][]) => {
    localStorage.setItem("tableData", JSON.stringify(data));
};

const CustomTable: React.FC<CustomTableProps> = ({
    numRows,
    numCols,
    initialData,
}) => {
    const [data, setData] = useState<string[][]>(
        () => loadFromLocalStorage() || initialData
    );
    const [currentNumCols, setCurrentNumCols] = useState<number>(numCols);

    const addRow = () => {
        const newRow = Array(currentNumCols).fill("");
        setData((prevData) => [...prevData, newRow]);
    };

    const addColumn = () => {
        setData((prevData) => prevData.map((row) => [...row, ""]));
        setCurrentNumCols((prevNumCols) => prevNumCols + 1);
    };

    const resetTable = () => {
        setData(initialData);
    };

    const handleCellChange = (
        rowIndex: number,
        colIndex: number,
        value: string
    ) => {
        setData((prevData) =>
            prevData.map((row, i) =>
                i === rowIndex
                    ? [
                          ...row.slice(0, colIndex),
                          value,
                          ...row.slice(colIndex + 1),
                      ]
                    : row
            )
        );
    };

    const handleImageUpload = (
        rowIndex: number,
        colIndex: number,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            handleCellChange(rowIndex, colIndex, imageUrl);
        }
    };

    useEffect(() => {
        saveToLocalStorage(data);
    }, [data]);

    const { t } = useTranslation("customTable");

    return (
        <div className="bg-white p-6 text-sm border-blue-600 border rounded-lg">
            <table className="min-w-full table-auto">
                <tbody className="bg-white">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-1 py-1 whitespace-nowrap"
                                    style={{
                                        width: `${100 / numCols}%`,
                                    }}
                                >
                                    {typeof cell === "string" ? (
                                        cell.startsWith("blob:") ? (
                                            <img
                                                src={cell as string}
                                                alt="Image"
                                                className="max-w-full h-auto"
                                            />
                                        ) : (
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="..."
                                                    value={cell}
                                                    onChange={(e) =>
                                                        handleCellChange(
                                                            rowIndex,
                                                            colIndex,
                                                            e.target.value
                                                        )
                                                    }
                                                    className="bg-white text-black border border-blue-600 rounded px-2 py-3 w-full text-xs"
                                                />
                                                <label
                                                    htmlFor={`image-upload-${rowIndex}-${colIndex}`}
                                                    className="absolute right-2 top-2 cursor-pointer"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-blue-600"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        id="add-image"
                                                    >
                                                        <path d="M19,10a1,1,0,0,0-1,1v3.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.71L9.41,11.12a2.79,2.79,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19.22A2.79,2.79,0,0,0,4.78,22H17.22a2.88,2.88,0,0,0,.8-.12h0a2.74,2.74,0,0,0,2-2.65V11A1,1,0,0,0,19,10ZM5,20a1,1,0,0,1-1-1V15.43l2.89-2.89a.78.78,0,0,1,1.1,0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.77.77,0,0,1,1.1,0L18,17.21ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z"></path>
                                                    </svg>
                                                </label>

                                                <input
                                                    type="file"
                                                    id={`image-upload-${rowIndex}-${colIndex}`}
                                                    onChange={(e) =>
                                                        handleImageUpload(
                                                            rowIndex,
                                                            colIndex,
                                                            e
                                                        )
                                                    }
                                                    accept="image/*"
                                                    className="hidden"
                                                />
                                            </div>
                                        )
                                    ) : (
                                        <div>
                                            <img
                                                src={URL.createObjectURL(
                                                    cell as File
                                                )}
                                                alt="Image"
                                                className="max-w-full h-auto mb-2"
                                            />
                                            <input
                                                type="file"
                                                onChange={(e) =>
                                                    handleImageUpload(
                                                        rowIndex,
                                                        colIndex,
                                                        e
                                                    )
                                                }
                                                accept="image/*"
                                            />
                                        </div>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-row items-center justify-center gap-2 mt-4">
                <button
                    onClick={resetTable} // Tambahkan event onClick untuk tombol Reset
                    className="bg-red-600 text-white px-2 py-2 rounded" // Anda bisa mengganti warna tombol sesuai preferensi
                >
                    {t("1")}
                </button>
                <button
                    onClick={addRow}
                    className="bg-blue-600 text-white px-2 py-2 rounded"
                >
                    {t("2")}
                </button>
                {/* <button
                    onClick={addColumn}
                    className="bg-blue-600 text-white px-2 py-2 rounded"
                >
                    Add Column
                </button> */}
            </div>
        </div>
    );
};

export default CustomTable;
