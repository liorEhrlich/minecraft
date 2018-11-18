var mainGame = {
    selectedBlock: `url("./images/image (9).jpg")`,
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

var selectBlock = function (event) {
    mainGame.selectedBlock = $(event.target).css("background-image")
    console.log(mainGame.selectedBlock);
}

var changeBlockImage = function (event) {
    //var clickedBlock = event.target.id;
    $(event.target).css('background-image', mainGame.selectedBlock)
}

$(".menu").on("click", selectBlock);

$(".contain").on("click", changeBlockImage);

setImagesToBegining();

//setImagesToMenu();