// -------------------- Gloab Variables --------------------
const endDate = "20 September 2023 08:16 PM";
document.getElementById('end-date').innerHTML = endDate;
const inputs = document.querySelectorAll('input');


// -------------------- Function --------------------
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if(diff < 0){
        alert("jklasdfsdfjksdf")
        return;
    } 
    // ---- Logic of Days ----
    inputs[0].value = Math.floor(diff /3600 / 24);
    // ---- Logic of Hourse ----
    inputs[1].value =Math.floor(diff / 3600) % 24;
    // ---- Logic of Minutes ----
    inputs[2].value =Math.floor(diff / 60) % 60;
    // ---- Logic of seconds ----
    inputs[3].value =Math.floor(diff) % 60;
}
setInterval(() => {
    clock()
}, 1000);
