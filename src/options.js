const optionsFL = {
    theme: "light2", // "light1", "dark1", "dark2"
    animationEnabled: true, //Change to false
    animationDuration: 1200, //Change it to 2000
    title : {
        text: "FL dynamic"
    },
    toolTip: {
        shared: true,
        updated: this.showTooltip
    },
    data: [{
        type: "line",
        dataPoints : dps
    }]
}
const optionsFR = {
    theme: "light2", // "light1", "dark1", "dark2"
    animationEnabled: true, //Change to false
    animationDuration: 1200, //Change it to 2000
    title : {
        text: "FR dynamic"
    },
    toolTip: {
        shared: true,
        updated: this.showTooltip
    },
    data: [{
        type: "line",
        dataPoints : dps
    }]
}
const optionsRL = {
    theme: "light2", // "light1", "dark1", "dark2"
    animationEnabled: true, //Change to false
    animationDuration: 1200, //Change it to 2000
    title : {
        text: "RL dynamic"
    },
    toolTip: {
        shared: true,
        updated: this.showTooltip
    },
    data: [{
        type: "line",
        dataPoints : dps
    }]
}
const optionsRR = {
    theme: "light2", // "light1", "dark1", "dark2"
    animationEnabled: true, //Change to false
    animationDuration: 1200, //Change it to 2000
    title : {
        text: "RR dynamic"
    },
    toolTip: {
        shared: true,
        updated: this.showTooltip
    },
    data: [{
        type: "line",
        dataPoints : dps
    }]
}