function Ajouter() {
    const child = document.createElement("div")

    child.setAttribute("class", "umwibutsa");
    const umwibutsa = document.getElementById("input-value")
    child.innerHTML = umwibutsa.value;
    const parent = document.getElementById("conteneur")
    parent.append(child);

    // child.innerHTML = "MErci"

    // const body = document.getElementsById("body")
    // body.insertBefore(body, div)
}



// function removeElement(id) {
//     var suppr = 0;
//     if (intTextBox != 0) {
//         var contentID = document.getElementById('contenteneur');
//         //alert(contentID);
//         contentID.removeChild(document.getElementById('Hosp' + id));
//         suppr = suppr - 1;
//     }
// }