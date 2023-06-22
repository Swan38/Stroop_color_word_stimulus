
var word_elem = document.getElementById("word")
var langage_select = document.getElementById("langage_select")

var colors = [
    "White",
    "DodgerBlue",
    "red",
    "HotPink",
    "OrangeRed",
    "Yellow",
    "Indigo",
    "Lime",
]
var langages = {
    "English": [
        "White",
        "Blue",
        "Red",
        "Pink",
        "Orange",
        "Yellow",
        "Purple",
        "Green",
    ],
    "Français": [
        "Blanc",
        "Bleu",
        "Rouge",
        "rose",
        "orange",
        "Jaune",
        "violet",
        "Vert",
    ],
    "Czech": [
        "Bílá",
        "Modrá",
        "Červená",
        "Růžová",
        "Oranžová",
        "Žlutá",
        "Fialová",
        "Zelená",
    ],
}
var choosen_langage = undefined


for (const langage in langages) {
    let lang_elem = document.createElement("option")
    lang_elem.setAttribute("value", langage)
    lang_elem.innerText = langage
    langage_select.insertAdjacentElement("beforeend", lang_elem)
}


function pick_random(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function change_word() {
    word_elem.innerText = pick_random(langages[choosen_langage])
    word_elem.style.color = pick_random(colors)
}

function start() {
    choosen_langage = langage_select.value

    document.querySelector("form").remove()
    word_elem.style.display = null
    change_word()
    setInterval(change_word, 1500)
}
