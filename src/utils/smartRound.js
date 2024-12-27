export function smartRound(value) {
    if (value === 0) return 0;

    const absValue = Math.abs(value);
    if (absValue < 0.0001) {
        const rounded = parseFloat(value.toPrecision(6));
        return rounded;
    }

    const rounded = parseFloat(value.toFixed(5));
    return rounded;
}
