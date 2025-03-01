var links = ['https://nyarchlinux.moe/', 'https://uwuntuos.site/', 'https://hub.docker.com/r/tiagoad/suicide-linux/', 'https://ulbsd.ru/', 'https://www.opensuse.org/', '../assets/videos/hannahmontana.mp4', 'https://astralinux.ru/', 'https://www.gentoo.org/', '../assets/videos/stupidmeme.mp4', '../assets/videos/lesson.mp4'];
const button = document.querySelector('.buybutton');
button.addEventListener('click', () => {
    var randomlink = links[Math.floor(Math.random() * links.length)];
    window.open(randomlink, '_blank');
    console.log(randomlink);
});