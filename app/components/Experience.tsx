import Link from "next/link";
export default function Experience(){
    return(
        <div className="m-auto max-w-2xl flex flex-col items-center justify-center mt-10 gap-y-7 p-7 border rounded-xl">
            <h1 className="font-semibold underline uppercase">Experience Page!</h1>
            <div className="flex flex-col items-center justify-center text-center gap-y-4 my-7">
                <h1>Researcher</h1>
                <div>
                    Supervised by Michael <Link href="https://www.mgubanov.com">https://www.mgubanov.com</Link> Gubanov | June 2021 Dec. 2023 | Department Computer Science, FSU | 1017 Academic Way, Tallahassee, FL
                    https://www.covidkg.org Focused Project: covidkg.org
                </div>
                <div>
                    Experience in an experimental startup, where I was the team lead of up to 8 other collaborators working daily. Oversaw each individuals role and progression towards creating a trustworthy, up-to-date medical resource for any audience. Our team successfully completed NSF I-corps innovation regional and national program, received funding from Amazon.
                    Manually configuring and troubleshooting 6 physical hardware mounted rack servers. Integrated Amazon web Services S3 buckets and custom EC2 instances. Attributed to the front-end(Bootstrap, JQuery D3JS, Observablehq, Apache echarts, phpMongo Driver), back-end(mongod) and machine learning(tensorflow, spark) requirements of our system. 
                    Determined user requirements alongside Dr. Gubanov, to design and implement new code or modify existing code. Held weekly team meetings to discuss our results.
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-y-4 my-7">
                <h1>Assistant Systems Administrator</h1>
                <div>
                    James Wang | July 2018 - Dec 2021 | Systems Group, Department of
                    Computer Science
                </div>
                <div>
                    Assisted computer science department networks and staff. Very team
                    oriented work space.
                    Online and in-person IT technical support/customer services. Maintaining
                    and repairing over 20 of the departments printers, scanners, and copiers,
                    maintaining inventory database, administering department's backup and
                    restore system.
                    Maintaining the backup disk drives, making custom length CAT5e cables,
                    installing departments testing DNS and DHCP servers in CentOS 7,
                    downloading Software, setting up workstations for labs.
                </div>
            </div>
        </div>
    );
}