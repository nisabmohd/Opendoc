import Navbar from "@/app/components/navbar"
import { ReactNode } from "react"

type DocsLayoutProps = {
    children: ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
    return (
        <div className="flex flex-col gap-5 w-100">
            <Navbar />
            <div className="container m-auto">
                {children}
            </div>
        </div>
    )
};
