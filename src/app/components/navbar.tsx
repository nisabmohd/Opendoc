import Link from "next/link";
import { github, logo } from "../assets/Images";


export default function Navbar() {
    return (
        <div className="h-16 border-b-2 border-gray-200 sticky top-0 bg-white z-40">
            <div className="container px-28 m-auto flex flex-row justify-between items-center h-full">
                <div className="flex flex-row items-center gap-10 w-fit">
                    <div className="logo flex flex-row gap-2">
                        <span>{logo}</span>
                        <span className="font-bold">
                            Opendoc
                        </span>
                    </div>
                    <div className="links flex flex-row gap-4">
                        <Link className="text-sm text-slate-600" href="/docs/getting-started">Documentation</Link>
                        <Link className="text-sm text-slate-600" href="/guides">Guides</Link>
                    </div>
                </div>
                <div className="right-side flex flex-row gap-6">
                    <div className="searchbox border px-2 rounded flex flex-row items-center h-8">
                        <input className="text-sm outline-none border-none ml-2 mr-2 py-1 placeholder:text-gray-600" type="text" placeholder="Search documentation..." />
                        <div className="ctrlkbox flex flex-row items-center justify-center border px-1 rounded test-xs w-fit text-slate-600 h-5">
                            <span className="text-xs smallest mr-1">⌘ </span>
                            <span className="text-xs smaller">k</span>
                        </div>
                    </div>
                    <Link href="http://github.com/nisabmohd" target="_blank">{github}</Link>
                </div>
            </div>
        </div>
    )
};
