'use client';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Resume(){
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
            <div className='flex items-center justify-center max-w-2xl m-auto mt-10 p-10  border '>
                <Viewer
                    fileUrl="/Resume_CV_Nick.pdf"
                    plugins={[
                        defaultLayoutPluginInstance,
                    ]}
                />
            </div>
        </Worker>
    );
};