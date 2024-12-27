import { Trans } from "react-i18next";

export default function FaqItem({ question, answer, isTrans }) {
    return (
        <>
            <span className="faq_q">{question}</span>
            <span className="faq_a">
                {isTrans
                    ? <Trans i18nKey={answer} components={{ br: <br /> }} />
                    : <>&nbsp; &nbsp; {answer}</>
                }
            </span>
        </>
    );
}
