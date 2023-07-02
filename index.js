/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
unitInfo = [
    {
        unitName: "Length",
        fromName: "meters",
        toName: "feet",
        ratio: 3.281
    },
    {
        unitName: "Volume",
        fromName: "liters",
        toName: "gallons",
        ratio: 0.264
    },
    {
        unitName: "Mass",
        fromName: "kilograms",
        toName: "pounds",
        ratio: 2.204
    }
]
const convertBtn = document.getElementById("convert-btn")
const numToConvertEl = document.getElementById("num-to-convert")
const dataBlocks = document.getElementById("data-blocks")
const mainEl = document.getElementById("main")

const render = (data, numToConvert) => {
    let blockString = ''
    for (let num in data) {
        blockString += `
        <div class="block">
        <div class="block-heading">
            ${data[num].unitName} (${data[num].fromName.toUpperCase()}/${data[num].toName.toUpperCase()})
            
        </div>
        <div class="block-data">${numToConvert} ${data[num].fromName} = ${numToConvert * data[num].ratio} 
${data[num].toName} | ${numToConvert} ${data[num].toName} = ${(numToConvert / data[num].ratio).toFixed(3)} ${data[num].fromName}</div>
    </div>
        
        `
    }
    dataBlocks.innerHTML = blockString
}
convertBtn.addEventListener("click", () => {
    const numToConvert = Number(numToConvertEl.value)
    if (!numToConvert) {
        dataBlocks.innerHTML = `
        <div class="block" >
        <div class="block-heading" style="color: #ff5757;">
            Error!
            
        </div>
        <div class="block-data">Please enter a valid data</div>
    </div>
        
        `
    } else {
        render(unitInfo, numToConvert)
    }

})
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

    mainEl.classList.add("dark")

}
else {
    mainEl.classList.add("light")
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log(newColorScheme)
});