function openTab(tabName) {
    const content = document.querySelectorAll('.content');
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = 'block';
}