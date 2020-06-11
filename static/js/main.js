const domain = document.domain;
const varDomain = domain.replace(/\./g, '-');
const uiData = {
    colors: [
        ["#ff22cc", "#ff78cc", "#8833ff"]
    ]
};

function setColor(index) {
    $(":root").css({ cssText: "--color-0: " + uiData.colors[index][0] + "; --color-1: " + uiData.colors[index][1] + "; --color-2: " + uiData.colors[index][2] });
    localStorage.removeItem(varDomain + "-color");
    localStorage.setItem(varDomain + "-color", String(index));
}
$(function() {
    var colorsIndex = Boolean(localStorage.getItem(varDomain + "-color")) ? Number(localStorage.getItem(varDomain + "-color")) : 0;
    var color = uiData.colors[colorsIndex % uiData.colors.length];
    $(":root").css({ cssText: "--color-0: " + color[0] + "; --color-1: " + color[1] + "; --color-2: " + color[2] });
    for (var i = 0; i < uiData.colors.length; ++i) {
        $("#color-selector").append("<i class=\"fa fa fa-dot-circle-o grad-txt\" style=\"cursor: pointer; background-image: linear-gradient(to bottom right, " + uiData.colors[i][0] + ", " + uiData.colors[i][1] + ", " + uiData.colors[i][2] + ")\" onclick=\"setColor(" + String(i) + ")\"><\/i>");
    }
    alert({
        doShow: false,
        txt: "<div id=\"comment-editor\"><\/div>",
        cap: "发表评论",
        okTxt: "发&ensp;表",
        okDo: "postComment();",
        hasCancel: true,
        txtAlign: "left"
    });
    editormd("comment-editor", {
        width: "100%",
        height: "50vh",
        tex: true,
        placeholder: "输入 Markdown",
        path: "https://cdn.jsdelivr.net/npm/editor.md/lib/"
    });
});