const varietySamplingRate = {
    'CO-86032': 2.14,
    'COM-0265': 2.28,
    'SNK-1374': 3.0,
    'SNK-13436': 3.50
};

function compute() {
    let rowSpacing = document.getElementById('rowSpacing').value;
    let plantSpacing = document.getElementById('plantSpacing').value;
    let selectedVariety = document.getElementById('sugarcaneType').value;

    let rowsPerAcre = 33/rowSpacing;
    let plantsPerRow = 33/plantSpacing;

    let plantsPerAcre = (rowsPerAcre * plantsPerRow) * 40;

    if(selectedVariety in varietySamplingRate) {
        let totalCost = Math.round(plantsPerAcre * varietySamplingRate[selectedVariety]);
        document.getElementById("output").innerHTML = `Total Cost = ₹${totalCost}<br>Plants for 1 Acre: ${Math.round(plantsPerAcre)}<br>Price per Plant for '${selectedVariety}' variety: ₹${varietySamplingRate[selectedVariety]}`;
    } else {
        document.getElementById("output").innerHTML = "Please select a valid variety.";
    }
}

function resetFields() {
    document.getElementById('rowSpacing').value = "";
    document.getElementById('plantSpacing').value = "";
    document.getElementById('sugarcaneType').value = "";
    document.getElementById("output").innerHTML = "";
}