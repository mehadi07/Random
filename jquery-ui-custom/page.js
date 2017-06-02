$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false,
        position: "top",
        buttons: {
            "Yes, I do!": function () {
                $("#dialog").dialog("close");
                $("#dialogDecision").text("Yes You did !!");
                $("#hide").hide();
            },
            "No": function () {}
        }
    });
    $("#opener").click(function () {
        $("#dialog").dialog("open");

    });

    $("#progress").progressbar({
        value: 100
    });
    var value = 100;
    countdown();

    function countdown() {
        value--;
        $("#progress").progressbar("option", "value", value);
        $("#countdown").text(value);

        if (value > 0) {
            setTimeout(countdown, 100);
        } else {
            $("#countdown").text("completed");
            $("#progress").progressbar("disable");

        };
    };

});
