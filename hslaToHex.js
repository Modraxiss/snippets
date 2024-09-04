function hslaToHex(hslaColor, { allowOverflow = false, roundHue = true } = {}) {

    let [h, s, l] = hslaColor
        .split(/\D+/)
        .filter((value) => value !== "")
        .slice(0, 3)
        .map(parseFloat);

    if (roundHue) h = h % 360;

    if (!allowOverflow) {
        h = Math.max(0, Math.min(359, h));
        s = Math.max(0, Math.min(100, s));
        l = Math.max(0, Math.min(100, l));
    }

    if (isNaN(h) || isNaN(s) || isNaN(l)) return;

    const sNorm = s / 100;
    const lNorm = l / 100;
    const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = lNorm - c / 2;

    let r, g, b;

    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255).toString(16).padStart(2, "0");
    g = Math.round((g + m) * 255).toString(16).padStart(2, "0");
    b = Math.round((b + m) * 255).toString(16).padStart(2, "0");

    return `#${r}${g}${b}`;
}
