'use client';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Resume(){
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className='flex flex-col items-center justify-center max-w-xl m-auto mt-10 p-10 gap-y-7 border  bg-gray-500 text-slate-900 rounded-xl '>
            <h1 className="font-semibold uppercase underline">Resume Page!</h1>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                    <Viewer
                        fileUrl="/Resume_CV_Nick.pdf"
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
            </Worker>
        </div>
    );
};