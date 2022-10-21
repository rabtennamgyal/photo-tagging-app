export default function resetAll() {
    // 1. Change back the opacity
    const bulba = document.getElementById('Bulbasaur');
    const croc = document.getElementById('Croconaw');
    const slug = document.getElementById('Slugma');

    const arr = [bulba, croc, slug].forEach((el) => {
        el.style.opacity = '1';
    });

    // 2. hide the last pokemon's div
    const popup = document.getElementById('popup');
    const h1 = document.querySelector('.thetext')

    popup.style.display = 'none';
    popup.removeChild(h1);

    // 3. hide the submit div
    const gameOver = document.getElementById('gameOver');
    gameOver.style.display = 'none';
};