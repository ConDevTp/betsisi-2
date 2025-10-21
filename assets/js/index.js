/* section1 */
function ShowHambergerMenu() {
    if (document.getElementById("hambergerbox").classList.contains("menu-header-hamberger"))

    {
        document.getElementById("hambergerbox").classList.remove("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.add("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.add("fa-bars");
        document.getElementById("baricon").classList.remove("fa-times");
    } else {
        document.getElementById("hambergerbox").classList.add("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.remove("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.remove("fa-bars");
        document.getElementById("baricon").classList.add("fa-times");
    }
}
/* section1 */