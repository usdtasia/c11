export const AFFILIATE_LEVELS = [
    { level: 1, refs: "$0", yours: "5%" },
    { level: 2, refs: "$10,000", yours: "10%" },
    { level: 3, refs: "$50,000", yours: "15%" },
    { level: 4, refs: "$100,000", yours: "20%" },
    { level: 5, refs: "$250,000", yours: "25%" },
];

export const FAQ_ITEMS = (t) => {
    return [
        { question: t("HomeQuestionsBlock1"), answer: t("HomeAnswersBlock1"), isTrans: false },
        { question: t("HomeQuestionsBlock2"), answer: "HomeAnswersBlock2", isTrans: true },
        { question: t("HomeQuestionsBlock3"), answer: t("HomeAnswersBlock3"), isTrans: false },
        { question: t("HomeQuestionsBlock4"), answer: t("HomeAnswersBlock4"), isTrans: false },
        { question: t("HomeQuestionsBlock5"), answer: t("HomeAnswersBlock5"), isTrans: false },
        { question: t("HomeQuestionsBlock6"), answer: t("HomeAnswersBlock6"), isTrans: false },
    ];
}

export const SUPPORT_ITEMS = (t) => {
    return [
        { question: t("Support_q1"), answer: t("Support_a1"), isTrans: false },
        { question: t("Support_q2"), answer: t("Support_a2"), isTrans: false },
        { question: t("Support_q3"), answer: t("Support_a3"), isTrans: false }
    ];
}
