import { DetailedHTMLProps, HTMLAttributes } from "react"
import leftbarData from '../content/leftbar.json'
import Link from "next/link"

type LeftbarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Leftbar(props: LeftbarProps) {
    return (
        <div {...props} className={`${props.className} flex flex-col gap-10`}>
            {
                leftbarData.headers.map(item => {
                    return <div key={item.name + item.slug}>
                        <h2 className="text-sm font-semibold mb-4 text-gray-500">{item.name}</h2>
                        <div className="children flex flex-col gap-4">
                            {item.child.map(child => {
                                return child.link ? <Link key={item.slug + child.link} className="text-sm text-gray-800 " href={`/docs/${item.slug}/${child.link}`}>{child.name}</Link> : <span key={item.slug + child.name} className="text-sm text-gray-400 cursor-not-allowed">{child.name}</span>
                            })}
                        </div>
                    </div>
                })
            }
        </div>
    )
};
