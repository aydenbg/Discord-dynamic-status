const socialLinks = {
    twitter: {
        url: 'https://twitter.com/yourprofile',
        visible: true
    },
    github: {
        url: 'https://github.com/yourprofile',
        visible: true
    },
    discord: {
        url: 'https://discord.com/users/youruserid',
        visible: true
    },
    email: {
        url: 'mailto:youremail@example.com',
        visible: true
    }
};

async function fetchStatus() {
    const response = await fetch('/status');
    const data = await response.json();

    document.getElementById('avatar').src = data.avatarUrl || 'default-avatar.png';
    document.getElementById('status').textContent = data.status;
    document.getElementById('activity').textContent = data.activity;
    document.getElementById('rich-presence').textContent = data.richPresenceDetails || 'None';
}

document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        starsContainer.appendChild(star);
        moveStarRandomly(star);
    }

    function moveStarRandomly(star) {
        const speed = Math.random() * 1 + 0.5;
        let angle = Math.random() * 360;

        function move() {
            let top = parseFloat(star.style.top);
            let left = parseFloat(star.style.left);

            top += Math.sin(angle) * speed;
            left += Math.cos(angle) * speed;

            if (top < 0) top = window.innerHeight;
            if (left < 0) left = window.innerWidth;
            if (top > window.innerHeight) top = 0;
            if (left > window.innerWidth) left = 0;

            star.style.top = top + 'px';
            star.style.left = left + 'px';

            requestAnimationFrame(move);
        }

        move();
    }

    document.addEventListener('mousemove', (e) => {
        attractStars(e.clientX, e.clientY);
    });

    function attractStars(x, y) {
        const stars = document.querySelectorAll('.star');
        const attractionRadius = 150;

        stars.forEach(star => {
            const rect = star.getBoundingClientRect();
            const starX = rect.left + rect.width / 2;
            const starY = rect.top + rect.height / 2;

            const distX = x - starX;
            const distY = y - starY;

            const distance = Math.sqrt(distX * distX + distY * distY);

            if (distance < attractionRadius) {
                const moveX = (distX / distance) * 2;
                const moveY = (distY / distance) * 2;

                star.style.top = parseFloat(star.style.top) + moveY + 'px';
                star.style.left = parseFloat(star.style.left) + moveX + 'px';

                if (distance < 5) {
                    star.remove();
                    createStar();
                }
            }
        });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function attractStarsContinuously() {
        attractStars(mouseX, mouseY);
        requestAnimationFrame(attractStarsContinuously);
    }

    attractStarsContinuously();

    if (socialLinks.twitter.visible) {
        document.getElementById('twitter').href = socialLinks.twitter.url;
    } else {
        document.getElementById('twitter').style.display = 'none';
    }

    if (socialLinks.github.visible) {
        document.getElementById('github').href = socialLinks.github.url;
    } else {
        document.getElementById('github').style.display = 'none';
    }

    if (socialLinks.discord.visible) {
        document.getElementById('discord').href = socialLinks.discord.url;
    } else {
        document.getElementById('discord').style.display = 'none';
    }

    if (socialLinks.email.visible) {
        document.getElementById('email').href = socialLinks.email.url;
    } else {
        document.getElementById('email').style.display = 'none';
    }

    setInterval(fetchStatus, 5000);
    fetchStatus();
});
