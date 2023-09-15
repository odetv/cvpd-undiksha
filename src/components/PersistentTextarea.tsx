import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PersistentTextarea = ({ id, placeholder }) => {
    const [textareaValue, setTextareaValue] = useState("");

    useEffect(() => {
        const storedValue = localStorage.getItem(id);

        if (storedValue) {
            setTextareaValue(storedValue);
        }
    }, [id]);

    const handleTextareaChange = (event) => {
        const value = event.target.value;
        setTextareaValue(value);
        localStorage.setItem(id, value);
    };

    return (
        <textarea
            className="textarea p-3 border border-indigo-500 rounded-lg w-full h-64"
            placeholder={placeholder}
            value={textareaValue}
            onChange={handleTextareaChange}
        ></textarea>
    );
};

export default PersistentTextarea;
