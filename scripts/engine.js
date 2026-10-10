// Diminuindo volume do fundo
document.getElementById('music').volume = 0.2;

document.getElementById('switch-theme-button').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.classList[0] == 'light-theme') {
        document.getElementById('music').src = 'assets/musics/normal-world.mpeg';
    } else {
        document.getElementById('music').src = 'assets/musics/dragonballgtgeradonaIa.mp3';
    }
});