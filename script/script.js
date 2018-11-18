var mainGame = {
    selectedTool: "axeid",
    matrix: [
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
        ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky",],
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

var setImagesToMenu = function () {
    $("#row-menuid1 #block-menuid1").css('background-image', `url("./images/shovel.png")`);
    $("#row-menuid1 #block-menuid2").css('background-image', `url("./images/pickaxe.png")`);
    $("#row-menuid2 #block-menuid1").css('background-image', `url("./images/image (4).jpg")`);
    $("#row-menuid2 #block-menuid2").css('background-image', `url("./images/image (5).jpg")`);
    $("#row-menuid3 #block-menuid1").css('background-image', `url("./images/image (6).jpg")`);
    $("#row-menuid3 #block-menuid2").css('background-image', `url("./images/image (7).jpg")`);
    $("#row-menuid4 #block-menuid1").css('background-image', `url("./images/image (8).jpg")`);
    $("#row-menuid4 #block-menuid2").css('background-image', `url("./images/image (9).jpg")`);
}

var selectTool = function (event) {
    mainGame.selectedTool = event.target.id
    console.log(mainGame.selectedTool);
}

var changeBlockImage = function (event) {
    var selectedBlockType = event.target.className;
    console.log(selectedBlockType)
    // if(mainGame.selectedTool === "axeid"){

    // }
    // else if(mainGame.selectedTool === "pickaxeid"){

    // }
    // else if(mainGame.selectedTool === "shovelid"){

    // }
    // else{
    //     console.log("Error!!Run for your lives!!")
    // }
}

$(".menu").on("click", selectTool);

$(".contain").on("click", changeBlockImage);

setImagesToBegining();

//setImagesToMenu();