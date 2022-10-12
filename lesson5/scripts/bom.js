const button = document.getElementById("myBtn");
const input = document.getElementById("favchap");
const list = document.querySelector(".list");

function empty(input) {
    if (input.value.length === 0) {
        alert("Please type your favorite chapter!");
        return false;
    }
    return true;
}
button.addEventListener('click', function () {
    empty(input)
    const chap = input.value;
    

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = chap;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
        input.focus()
    });
    input.value = '';
    input.focus();
});