import FaqItem from "./FaqItem";
import React from "react";

export default function FaqList({list}) {
    return (
        <>
            {
                list.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isTrans={item.isTrans}
                    />
                ))
            }
        </>
    )
}
