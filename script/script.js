var mainGame = {
    selectedTool: "axeid",
    selectedBlockToPlaceBack: null,
    matrix: [
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "leaves", "leaves", "leaves", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
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

var updateBlockInventory = function (blockType) {
    if (blockType === "tGrs") {
        var tGrsInInventory = $("#tGrsinventoryid").html();
        if (tGrsInInventory < 6) {
            $("#tGrsinventoryid").html(parseInt($("#tGrsinventoryid").html()) + 1);
        }
    }
    else if (blockType === "earth") {
        var tGrsInInventory = $("#earthinventoryid").html();
        if (tGrsInInventory < 6) {
            $("#earthinventoryid").html(parseInt($("#earthinventoryid").html()) + 1);
        }
    }
    else if (blockType === "wood") {
        var tGrsInInventory = $("#woodinventoryid").html();
        if (tGrsInInventory < 6) {
            $("#woodinventoryid").html(parseInt($("#woodinventoryid").html()) + 1);
        }
    }
    else if (blockType === "leaves") {
        var tGrsInInventory = $("#leavesinventoryid").html();
        if (tGrsInInventory < 6) {
            $("#leavesinventoryid").html(parseInt($("#leavesinventoryid").html()) + 1);
        }
    }
    else if (blockType === "stone") {
        var tGrsInInventory = $("#stoneinventoryid").html();
        if (tGrsInInventory < 3) {
            $("#stoneinventoryid").html(parseInt($("#stoneinventoryid").html()) + 1);
        }
    }
}

var selectTool = function (event) {
    $(`#${mainGame.selectedTool}`).attr("style", "")
    mainGame.selectedTool = event.target.id;
    $(event.target).css("border", "1px dashed yellow");
}

var placeSelectedBlockOnBoard = function () {
    $(`#${mainGame.selectedBlockToPlaceBack}`).attr("style", "");
    var blockType = mainGame.selectedBlockToPlaceBack
    blockType = blockType.substring(0, blockType.indexOf("-menuid"));
    var blockClassToRemove = $(event.target).attr('class');
    blockClassToRemove = blockClassToRemove.substring(6, blockClassToRemove.length);
    var inInventory = parseInt($(`#${blockType}inventoryid`).html());
    if (inInventory > 0) {
        $(event.target).removeClass(blockClassToRemove);
        $(event.target).addClass(blockType);
        $(`#${blockType}inventoryid`).html(parseInt($(`#${blockType}inventoryid`).html()) - 1);
    }
    else if (inInventory === 0) {
        $(`#${blockType}inventoryid`).css("color", "red");
        $(`#${blockType}inventoryid`).css("font-weight", "bold");
        setTimeout(function () {
            $(`#${blockType}inventoryid`).attr("style", "")
        }, 1000);
    }
    $(".contain").off("click");
    $(".contain").on("click", changeBlockImage);
}

var selectBlockToPlaceBack = function (event) {
    if ($(`#${event.target.id}`).hasClass("block-item")) {
        $(`#${mainGame.selectedBlockToPlaceBack}`).attr("style", "");
        mainGame.selectedBlockToPlaceBack = event.target.id;
        $(`#${event.target.id}`).css("border", "1px dashed yellow");
        $(".contain").off("click");
        $(".contain").on("click", placeSelectedBlockOnBoard);
    }
}

var denyToolInStyle = function(selectedTool){
    $(`#${selectedTool}`).css("opacity", "0.3");
    $(`#${selectedTool}`).css("border", "1px solid red");
    setTimeout(function () {
        $(`#${selectedTool}`).attr("style", "");
        $(`#${selectedTool}`).css("border", "1px dashed yellow");
    }, 500);
}

var changeBlockImage = function (event) {
    if (mainGame.selectedTool === "shovelid") {
        if ($(event.target).attr('class') === "block tGrs") {
            updateBlockInventory("tGrs");
            $(event.target).fadeOut("fast");
            $(event.target).removeClass("tGrs");
            $(event.target).fadeIn("fast");
            $(event.target).addClass("sky");
        }
        else if ($(event.target).attr('class') === "block earth") {
            updateBlockInventory("earth");
            $(event.target).fadeOut("fast");
            $(event.target).removeClass("earth");
            $(event.target).fadeIn("fast");
            $(event.target).addClass("sky");
        }
        else {
            denyToolInStyle(mainGame.selectedTool);
        }
    }
    else if (mainGame.selectedTool === "pickaxeid") {
        if ($(event.target).attr('class') === "block stone") {
            updateBlockInventory("stone");
            $(event.target).fadeOut("fast");
            $(event.target).removeClass("stone");
            $(event.target).fadeIn("fast");
            $(event.target).addClass("sky");
        }
        else {
            denyToolInStyle(mainGame.selectedTool);
        }
    }
    else if (mainGame.selectedTool === "axeid") {
        if ($(event.target).attr('class') === "block leaves") {
            updateBlockInventory("leaves");
            $(event.target).fadeOut("fast");
            $(event.target).removeClass("leaves");
            $(event.target).fadeIn("fast");
            $(event.target).addClass("sky");
        }
        else if ($(event.target).attr('class') === "block wood") {
            updateBlockInventory("wood");
            $(event.target).fadeOut("fast");
            $(event.target).removeClass("wood");
            $(event.target).fadeIn("fast");
            $(event.target).addClass("sky");
        }
        else {
            denyToolInStyle(mainGame.selectedTool);
        }
    }
}

var startGame = function () {
    $(`#landingPageId`).addClass("doNotDisplay");
    $(`#gameContainer`).removeClass("doNotDisplay");
    setImagesToBegining();
    $(".tool-item").on("click", selectTool);
    $(".block-item").on("click", selectBlockToPlaceBack);
    $(".contain").on("click", changeBlockImage);
}

var showTutorial = function () {
    if ($("#tutorialPageId").hasClass("doNotDisplay")) {
        $('#tutorialPageId').fadeIn('medium');
    }
    else if (!$("#tutorialPageId").hasClass("doNotDisplay")) {
        $('#tutorialPageId').fadeOut('medium');
    }
    $('#tutorialPageId').toggleClass("doNotDisplay")

}

var showSupport = function () {
    if ($("#supportPageId").hasClass("doNotDisplay")) {
        $('#supportPageId').fadeIn('medium');
    }
    else if (!$("#supportPageId").hasClass("doNotDisplay")) {
        $('#supportPageId').fadeOut('medium');
    }
    $('#supportPageId').toggleClass("doNotDisplay")
}

$(document).ready(function () {
    $(`#gameContainer`).addClass("doNotDisplay");
    $(`#landingPageId`).removeClass("doNotDisplay");
    $("#startGameId").on("click", startGame);
    $("#tutorialId").on("click", showTutorial);
    $("#supportId").on("click", showSupport);
});
