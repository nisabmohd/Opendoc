"use client"

import Leftbar from "@/app/components/leftbar";
import { useParams } from "next/navigation"

export default function () {
    const param = useParams()

    console.log(param);

    return (
        <div className="px-16 flex flex-row">
            <Leftbar className="flex-half border-r-2 border-gray-200 min-h-screen max-h-full mr-12 pt-10 sticky top-0" />
            <div className="md half-half-more pt-10">

            </div>

        </div>
    )
};
