document.addEventListener('DOMContentLoaded', () => {
    
    const hireMeButton = document.getElementById('hireMeBtn');

    if (hireMeButton) {
        hireMeButton.addEventListener('click', showMessage);
    }

});

function showMessage() {
    alert("Thank you for visiting my portfolio!");
}
