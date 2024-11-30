document.querySelector('#container-links .dropdown-toggle').addEventListener('click', ActiveDropdown);

function ActiveDropdown() {
    const dropdown = document.getElementById('dropdown-acess');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}