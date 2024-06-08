document.addEventListener('DOMContentLoaded', function () {
    const aimsList = document.getElementById('aims-list');
    aims.forEach(function (aim) {
        const listItem = document.createElement('li');
        listItem.textContent = aim;
        aimsList.appendChild(listItem);
    });
});