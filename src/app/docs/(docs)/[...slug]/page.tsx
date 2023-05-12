"use client"

import Leftbar from "@/app/components/leftbar";
import Image from "next/legacy/image";
import { useParams } from "next/navigation"

export default function () {
    const param = useParams()

    console.log(param);

    return (
        <div className="px-28 flex flex-row">
            <div className="flex-half">
                <Leftbar className="border-r-2 border-gray-200 mr-18 pt-10 sticky top-16 mr-12 z-20 h-[calc(100vh-4rem)] overflow-y-auto pb-8" />
            </div>
            <div className="md half-half-more pt-5 text-gray-800 flex flex-row justify-between">
                <div className="left-md leading-8" style={{ width: '68%' }}>
                    <h1 className="text-5xl font-bold my-5">Styling Guide</h1>
                    <p className="text-xl text-slate-500 w-full border-b-2 border-gray-200 pb-3 mb-4">Testing the MDX style guide with Tailwind Typography</p>
                    If you have worked with HTML or CSS already, e.g., by working through these tutorials in order, then you know that text inside an element is laid out inside the element's content box. It starts at the top left of the content area , and flows towards the end of the line. Once it reaches the end, it goes down to the next line and flows to the end again. This pattern repeats until all the content has been placed in the box. Text content effectively behaves like a series of inline elements, being laid out on lines adjacent to one another, and not creating line breaks until the end of the line is reached, or unless you force a line break manually using the br element.
                    <Image
                        src="/styling-md.png"
                        alt="styling"
                        width={0}
                        height={0}
                        sizes="50vw"
                    />
                    Consequuntur dolores asperiores, aperiam neque accusantium, reiciendis provident reprehenderit odit quos repellat quo suscipit facere. Dolorem accusantium tenetur ex cumque reiciendis, excepturi itaque voluptas! Tenetur facere exercitationem, eligendi dicta, ad temporibus ab est impedit adipisci maxime distinctio unde quibusdam nostrum ea voluptatum asperiores consequatur doloremque modi fuga vel mollitia perspiciatis saepe sapiente. Dolor at magni aliquam impedit, odio unde animi rem illum sed officiis. Dicta, exercitationem, sit pariatur voluptatibus amet enim possimus voluptate laborum quibusdam ipsum a iste sint quo, magni ex dolor quas quam quidem nobis hic unde cupiditate? Pariatur inventore unde alias. Quasi, minus? Illum veniam doloribus autem.
                    <br /><br />
                    Dolor, necessitatibus ipsum esse, error velit veritatis eaque similique cum dolorem nobis quidem libero illum, exercitationem natus distinctio debitis? Omnis repudiandae hic aperiam veniam doloremque id corrupti quia a inventore vero, numquam ab consectetur, commodi quae quasi rem suscipit nostrum laborum earum ut deleniti adipisci, dignissimos ratione. Est adipisci ratione, mollitia ab velit ullam aliquam voluptate porro. Explicabo necessitatibus quae quos praesentium nisi doloribus, ex pariatur impedit illum enim voluptate adipisci vel accusantium libero at, nesciunt quaerat rerum dignissimos animi distinctio repudiandae sunt est reprehenderit cumque. Necessitatibus deleniti, modi inventore a possimus voluptates deserunt. Veritatis at nihil molestias corporis aliquam quis commodi eaque sit? Officiis excepturi vero, a repellendus provident laborum eveniet eligendi rem minima pariatur incidunt cumque saepe quasi, magni non dolor, nostrum quia enim! Provident molestias nisi voluptatem iusto deleniti, debitis omnis voluptatibus inventore aliquid tempore ad qui minima maiores consequuntur autem! Blanditiis perferendis reiciendis esse totam explicabo obcaecati aliquid soluta impedit inventore! Voluptatibus illo quam natus voluptatum quia sint fuga voluptate error,
                </div>
                <div className="right-md pt-6" style={{ width: '28%' }}>
                    <h2 className="text-sm font-semibold mb-4 text-gray-500">On this page</h2>
                </div>
            </div>

        </div>
    )
};
