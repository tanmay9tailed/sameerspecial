function onStart() {
    const name = document.getElementById("name").value?.toLowerCase();
    if(!name) return;
    if(name.toLowerCase() === "sameer") {
        alert("Chaman Chutia");
    } else {
        alert(`Hi ${name}`)
    }
}