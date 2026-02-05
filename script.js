const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.mobile-menu-button');
const sidebarShadow = document.createElement('div');
sidebarShadow.classList.add('sidebar-shadow');
const pageContainer = document.querySelector('.main-container');

menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('is-collapsed');
    sidebar.classList.add('is-active');
    pageContainer.appendChild(sidebarShadow);
    pageContainer.classList.toggle('no-overflow');
});

sidebarShadow.addEventListener('click', () => {
    sidebar.classList.remove('is-active');
    sidebar.classList.add('is-collapsed');
    pageContainer.removeChild(sidebarShadow);
    pageContainer.classList.toggle('no-overflow');
});

const mainSectionHeadings = document.querySelectorAll('h3');

mainSectionHeadings.forEach((heading) => {
        heading.addEventListener('click', (event) => {
        event.target.nextElementSibling.classList.toggle('is-hidden');
    });
});

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});