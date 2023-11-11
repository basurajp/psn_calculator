const varietySamplingRate = {
    "Co-86032(Nira)": 2.14,
    "Co-86032(Foundation)": 2.5,
    "CoM-0265": 2.25,
    "SNK-13374": 3.0,
    "SNK-13436": 2.5,
    "MS-10001": 2.25,
    "VSI-8005": 2.25,
    "CoVC-18061": 2.5,
    "CoVSI-18121": 2.5,
    "CoC-671": 2.5,
    "SNK-049": 2.5,
    "SNK-9293": 2.3,
    "CoVSI-3102": 2.5,
    "PDN-15012": 2.6,
    "Co-92005": 2.5,
    "VCF-0517": 2.5,
    "Co-11015": 2.4,
};

function calculateCost() {
    const rowSpacing = document.getElementById("rowSpacing").value;
    const plantSpacing = document.getElementById("plantSpacing").value;
    const selectedVariety = document.getElementById("sugarcaneType").value;

    const rowsPerAcre = 33 / rowSpacing;
    const plantsPerRow = 33 / plantSpacing;
    const plantsPerAcre = rowsPerAcre * plantsPerRow * 40;

    if (varietySamplingRate[selectedVariety]) {
        const totalCost = Math.round(plantsPerAcre * varietySamplingRate[selectedVariety]);
        document.getElementById("result").innerHTML = `Total Cost = ₹${totalCost}<br/>
      Plants for 1 Acre: ${Math.round(plantsPerAcre)}<br/>
      Price per Plant for '${selectedVariety}' variety: ₹${varietySamplingRate[selectedVariety]}`;
    } else {
        document.getElementById("result").innerHTML = "Please select a valid variety.";
    }
}

function clearInputs() {
    document.getElementById("rowSpacing").value = "";
    document.getElementById("plantSpacing").value = "";
    document.getElementById("sugarcaneType").selectedIndex = 0;
    document.getElementById("result").innerHTML = "";
}

document.querySelector('.calculate').addEventListener('click', calculateCost);
document.querySelector('.reset').addEventListener('click', clearInputs);