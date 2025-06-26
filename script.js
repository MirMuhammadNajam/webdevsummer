function closeWebsite() {
    
    window.open('', '_self', '');
    window.close();

}
function openMultipleTabs() {
    for (let i = 0; i < 3; i++) {
        window.open(window.location.href, '_blank');
    }
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}