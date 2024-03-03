import Link from "next/link";
export default function Publications(){
    return (
        <div className="mt-10 p-8 m-auto max-w-xl flex flex-col gap-y-8 items-center justify-center border bg-gray-500 text-slate-900 rounded-3xl border-green-300">
            <h1 className="font-semibold uppercase underline">Publications Page!</h1>
            <h1><Link className="underline" href="https://link.springer.com/chapter/10.1007/978-3-030-86472-9_4" target="_blank">Hybrid Metadata Classification in Large-scale Structured Data sets"</Link>
             Sophie Pavia, Nick Piraino, Kazi Islam, Anna Pyayt, Michael Gubanov, invited paper in the journal of Data Intelligence, Rinton Press, Special Issue on "Best of DEXA", 2021</h1>

            <h1><Link className="underline" href="https://openproceedings.org/2023/conf/edbt/3-paper-147.pdf" target="_blank">COVIDKG.ORG - a Web-scale COVID-19 Interactive, Trustworthy Knowledge Graph, Constructed and Interrogated for Bias using Deep-Learning"</Link>
             Bhim Kandibedala, Anna Pyayt, Nick Piraino, Chris Caballero, Michael Gubanov, appeared in EDBT, 2023"</h1>
        </div>
    );
}