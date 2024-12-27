export const getTransactionStatus = (status) => {
    switch (status) {
        case 0:
            return "created";
        case 1:
            return "pending";
        case 2:
            return "cancelled";
        case 3:
            return "success";
        case 4:
            return "paid";
        default:
            return "";
    }
};

export const getTransactionStatusesMap = (t) => {
    return {
        0: t("Created"),
        1: t("Pending"),
        2: t("Cancelled"),
        3: t("Success"),
        4: t("Paid"),
    };
}

export const copyToClipboard = async (value) => {
    try {
        await navigator.clipboard.writeText(value);
        console.log("Copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}
