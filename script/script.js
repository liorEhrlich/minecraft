var mainGame = {
    selectedTool: "axeid",
    lastBlock: null,
    matrix: [
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "leaves", "leaves", "leaves", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "leaves", "wood", "leaves", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "wood", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "wood", "sky", "sky", "sky", "sky", "sky", "sky", "stone", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "wood", "sky", "sky", "sky", "sky", "sky", "sky", "stone", "stone", "sky", "sky",],
        ["tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs", "tGrs"],
        ["earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth"],
        ["earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth", "earth"]
    ]
}

var setImagesToBegining = function () {
    for (var i = 0; i < mainGame.matrix.length; i++) {
        var parDiv = $("<div></div>", { "class": "row" });
        for (var j = 0; j < mainGame.matrix[i].length; j++) {
            var newDiv = $("<div></div>", { "class": `block ${mainGame.matrix[i][j]}` });
            parDiv.append(newDiv);
        }
        $(".contain").append(parDiv);
    }
}

var updateBlockInventory = function(blockType){
    if(blockType === "tGrs"){
        var tGrsInInventory = $("#tGrsinventoryid").html();
        if(tGrsInInventory<6){
            $("#tGrsinventoryid").html(parseInt($("#tGrsinventoryid").html()) + 1);
        }
    }
    else if(blockType === "earth"){
        var tGrsInInventory = $("#earthinventoryid").html();
        if(tGrsInInventory<6){
            $("#earthinventoryid").html(parseInt($("#earthinventoryid").html()) + 1);
        }
    }
    else if(blockType === "wood"){
        var tGrsInInventory = $("#woodinventoryid").html();
        if(tGrsInInventory<6){
            $("#woodinventoryid").html(parseInt($("#woodinventoryid").html()) + 1);
        }
    }
    else if(blockType === "leaves"){
        var tGrsInInventory = $("#leavesinventoryid").html();
        if(tGrsInInventory<6){
            $("#leavesinventoryid").html(parseInt($("#leavesinventoryid").html()) + 1);
        }
    }
    else if(blockType === "stone"){
        var tGrsInInventory = $("#stoneinventoryid").html();
        if(tGrsInInventory<3){
            $("#stoneinventoryid").html(parseInt($("#stoneinventoryid").html()) + 1);
        }
    }
}

var selectTool = function (event) {
    mainGame.selectedTool = event.target.id
    console.log(mainGame.selectedTool);
}

var changeBlockImage = function (event) {
    if (mainGame.selectedTool === "shovelid") {
        if ($(event.target).attr('class') === "block tGrs") {
            updateBlockInventory("tGrs");
            $(event.target).removeClass("tGrs");
            $(event.target).addClass("sky");
        }
        else if ($(event.target).attr('class') === "block earth") {
            updateBlockInventory("earth");
            $(event.target).removeClass("earth");
            $(event.target).addClass("sky");
        }
    }
    else if (mainGame.selectedTool === "pickaxeid") {
        if ($(event.target).attr('class') === "block stone") {
            updateBlockInventory("stone");
            $(event.target).removeClass("stone");
            $(event.target).addClass("sky");
        }
    }
    else if (mainGame.selectedTool === "axeid") {
        if ($(event.target).attr('class') === "block leaves") {
            updateBlockInventory("leaves");
            $(event.target).removeClass("leaves");
            $(event.target).addClass("sky");
        }
        else if ($(event.target).attr('class') === "block wood") {
            updateBlockInventory("wood");
            $(event.target).removeClass("wood");
            $(event.target).addClass("sky");
        }
    }
}

$(".menu").on("click", selectTool);

$(".contain").on("click", changeBlockImage);

setImagesToBegining();

