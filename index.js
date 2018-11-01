//random Hexcolor
var getRandomColor = function() {
    return (
        "#" +
    (function(color) {
        return (color += "0123456789abcdef"[Math.floor(Math.random() * 16)]) &&
        color.length == 6
            ? color
            : arguments.callee(color);
    })("")
    );
};

$(".itemimg").on("mouseenter", function(e) {
    let color = getRandomColor();
    var target = $(e.target);
    var src = target.attr("src");
    target.css({ "border-color": color });
    if (src === "images/easyPCB.png") {
        target.attr("src", "images/easyPCC.png");
    }
    if (src === "images/socialB.png") {
        target.attr("src", "images/socialC.png");
    }
    if (src === "images/petitionB.png") {
        target.attr("src", "images/petitionC.png");
    }
});

$(".itemimg").on("mouseleave", function(e) {
    var target = $(e.target);
    var src = target.attr("src");
    if (src === "images/easyPCC.png") {
        target.attr("src", "images/easyPCB.png");
    }
    if (src === "images/socialC.png") {
        target.attr("src", "images/socialB.png");
    }
    if (src === "images/petitionC.png") {
        target.attr("src", "images/petitionB.png");
    }
});

$(".headerLinks1").on("click", function() {
    $("#about")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});

$(".headerLinks2").on("click", function() {
    $("#projects")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});

$(".headerLinks3").on("click", function() {
    $("#contact")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
});
