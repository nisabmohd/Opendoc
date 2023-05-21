import Leftbar from "@/app/components/leftbar";
import { getDocBySlug } from "./getDocBySlug";

type Props = {
    params: {
        slug: string[]
    }
}

export default function Page({ params: { slug } }: Props) {
    const Markdown = getDocBySlug(slug)
    return (
        <div className="px-28 flex flex-row">
            <div className="flex-half">
                <Leftbar className="border-r-2 border-gray-200 mr-18 pt-10 sticky top-16 mr-12 z-20 h-[calc(100vh-4rem)] overflow-y-auto pb-8" />
            </div>
            <div className="md half-half-more pt-5 text-gray-800 flex flex-row justify-between">
                <div className="left-md leading-8" style={{ width: '68%' }}>
                    {Markdown && <Markdown key={slug} />}
                </div>
                <div className="right-md pt-6 sticky top-20 z-20 h-[calc(100vh-4rem)] overflow-y-auto pb-8 pl-2" style={{ width: '28%' }}>
                    <h2 className="text-sm font-semibold mb-2 text-gray-500">On This Page</h2>
                    <div className="text-slate-500 text-sm py-2 ml-2">
                        <h2>
                            What to expect from here on out
                        </h2>
                        <div className="child-topics ml-4 my-2 flex flex-col gap-3">
                            <span>Typography should be easy</span>
                        </div>

                    </div>
                    <div className="text-slate-500 text-sm py-2 ml-2">
                        <h2 className="mb-2">
                            What if we stack headings?
                        </h2>
                        <div className="child-topics ml-4 my-2 flex flex-col gap-3">
                            <span>We should make sure that looks good</span>
                            <span>When a heading comes after a paragraph</span>
                        </div>

                    </div>
                    <div className="text-slate-500 text-sm py-2 ml-2">
                        <h2 className="mb-2">
                            What if we stack headings?
                        </h2>
                        <div className="child-topics ml-4 my-2 flex flex-col gap-3">
                            <span>We should make sure that looks good</span>
                            <span>Typography should be easy</span>
                        </div>

                    </div>
                    <div className="text-slate-500 text-sm py-2 ml-2">
                        <h2 className="mb-2">
                            GitHub falvoured markdown.
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    )
};
