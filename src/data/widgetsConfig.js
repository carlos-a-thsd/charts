
export const resumeOptions = () => {
    return [
        {
            xvalues: "date",
            yvalues: ["value"],
            xfmt: null,
            yfmt: "n",
            display: true,
            palette: "custom",
        },
        ["#4D8FD6"],
    ];
}
export const jitterOptions = () => {
    return {
    yvalues: ["avg", "value", "min", "max"],
    palette: "model",
    fill: [null, null, "#FFFFFF", "#E3EEF4"],
    width: [0.5, 2, 0.1, 0.1],
    yfmt: "n1_ms",
    xfmt: null,
    tension: [0.2, 0.2, 0.5, 0.2],
    };
}
export const latencyOptions = () => {
    return {
    yvalues: ["avg", "value", "min", "max"],
    palette: "model",
    fill: [null, null, "#FFFFFF", "#E3EEF4"],
    width: [0.5, 2, 0.1, 0.1],
    yfmt: "n1_ms",
    xfmt: null,
    tension: [0.2, 0.2, 0.5, 0.2],
    };
}
export const lossOptions = () => {
    return {
    yvalues: ["avg", "value", "min", "max"],
    palette: "model",
    fill: [null, null, "#FFFFFF", "#E3EEF4"],
    width: [0.5, 2, 0.1, 0.1],
    yfmt: "p100",
    xfmt: null,
    fillMode: ["+1", "origin"],
    tension: [0.2, 0.2, 0.5, 0.2],
    };
}
export const errorsOptions = () => {
    return {
    xvalues: "name",
    yvalues: ["count"],
    yfmt: "n",
    legend: false,
    palette: "custom",
    };
}
export const querytimeLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n1_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#FF847C", "#8C8C8C"],
    ];
}
export const jitterLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n2_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#4D8FD6", "#8C8C8C"],
    ];
}
export const latencyLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n1_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#D77420", "#8C8C8C"],
    ];
}
export const lossLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "p100",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#B769E9", "#8C8C8C"],
    ];
}
export const ptajitterLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n2_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#355C7D", "#8C8C8C"],
    ];
}
export const ptalatencyLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n1_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#FD9407", "#8C8C8C"],
    ];
}
export const ptalossLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "p100",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#06cc5f", "#8C8C8C"],
    ];
}
export const xferrateLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "MB",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#27CBB9", "#8C8C8C"],
    ];
}
export const resptimeLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n1_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#E7537F", "#8C8C8C"],
    ];
}
export const mosLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n2",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#56cc00", "#8C8C8C"],
    ];
}
export const pdvLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n2_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#AF327F", "#8C8C8C"],
    ];
}
export const ptvjitterLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n2_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#a7b300", "#8C8C8C"],
    ];
}
export const ptvlatencyLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "n1_ms",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#118DAC", "#8C8C8C"],
    ];
}
export const ptvlossLineConfig = () => {
    return [
    {
        xvalues: "date",
        yvalues: ["value", "max"],
        yfmt: "p100",
        xfmt: null,
        display: true,
        palette: "custom",
        width: [2, 1],
    },
    ["#4D8FD6", "#8C8C8C"],
    ];
}