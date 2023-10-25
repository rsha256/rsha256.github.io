document.getElementById('secret-link').addEventListener('click', function (event) {
    event.preventDefault();
    const password = prompt('Enter the password:');

    if (password) {
        window.location.href += password + '/rahul_shah_resume.pdf';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const now = new Date();

    // Format the date and time as YYYY-MM-DD HH:MM:SS
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} PDT`;

    document.getElementById('current-date-time').textContent = formattedDate;
});
