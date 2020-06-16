function jum() {
    let e = document.getElementById('navPro');
    if (!e) return false;
    if (e.style.display == "block" || e.style.width == "768") {
        e.style.display = "none"
    } else {
        e.style.display = "block"
    }
    return true;
}