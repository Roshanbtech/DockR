import React, { useRef } from 'react'
import Card from './Card'

const foreground = () => {
    const ref = useRef(null);

    const data = [
        {
            desc: "Hey Roshan!.. How are you doing?...",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'green'
            },
            imageSrc: "4j.gif"  // Add your image URL here
        },
        {
            desc: "I'm gonna rock this party till the end.",
            filesize: "1mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: 'Upload Now',
                tagColor: 'blue'
            },
            imageSrc: "2j.jpg"  // Add your image URL here
        },
        {
            desc: "I can't bear this situation any longer.",
            filesize: ".87mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Delete Now',
                tagColor: 'red'
            },
            imageSrc: "3j.jpg"  // Add your image URL here
        },
        {
            desc: "I'm a MERN Stack Developer.",
            filesize: ".5mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Upload Now',
                tagColor: 'blue'
            },
            imageSrc: "5j.gif"  // Add your image URL here
        }
    ]
    return (
        <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
            <Card key={index} data={item} reference={ref} imageSrc={`/images/${item.imageSrc}`} />
        ))}
    </div>
    )
}

export default foreground
