import Navbar from "@/app/components/navbar"
import { ReactNode } from "react"

type DocsLayoutProps = {
    children: ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
    return (
        <div className="flex flex-col w-100">
            <Navbar />
            <div className="container m-auto flex-1">
                {children}
            </div>
        </div>
    )
};
