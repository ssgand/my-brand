const sidepanelVisibility = () => {
    const sidepanel = document.getElementById('sidepanel')

    const screenWidth = window.innerWidth;

    if (screenWidth < 1200) {
        sidepanel.style.display = 'none'
    } else {
        sidepanel.style.display = 'flex'
    }
}

document.querySelectorAll('.anchor').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        document.querySelectorAll('#sidepanel-description p').forEach(para => {
            para.classList.remove('hover-p');
        });
        const p = document.getElementById(anchor.getAttribute('data-target'))
        p.classList.add('hover-p');
    });
    anchor.addEventListener('mouseout', () => {
        document.querySelectorAll('#sidepanel-description p').forEach(para => {
            para.classList.remove('hover-p');
        });
    });
});


document.querySelectorAll('#sidepanel-icons a').forEach(icon => {
    icon.addEventListener('click', () => {
        document.querySelectorAll('#sidepanel-icons a').forEach(anchor => {
            anchor.classList.remove('active-anchor');
        });
        icon.classList.add('active-anchor')
    })
});


const options = {
    root: null, // Null uses the viewport as the root
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the target is visible
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(`Div ${entry.target.id} is in view`);
            // Do something when this div is in view
            document.querySelectorAll('#sidepanel-icons a').forEach(anchor => {
                anchor.classList.remove('active-anchor');
            });
            switch (entry.target.id) {
                case 'home-page': 
                    document.querySelector('.a1').classList.add('active-anchor');
                    break;
                case 'about-page': 
                    document.querySelector('.a2').classList.add('active-anchor');
                    break;
                case 'skills-page': 
                    document.querySelector('.a3').classList.add('active-anchor');
                    break;
                case 'works-page': 
                    document.querySelector('.a4').classList.add('active-anchor');
                    break;
                case 'blogs-page': 
                    document.querySelector('.a5').classList.add('active-anchor');
                    break;
                case 'contact-page': 
                    document.querySelector('.a6').classList.add('active-anchor');
                    break;
            }
        }
        
    });
};

const observer = new IntersectionObserver(callback, options);

document.querySelectorAll('.page').forEach(div => {
    observer.observe(div);
});

sidepanelVisibility();

// window.onresize = () => {
//     console.log('something else')
//     sidepanelVisibility();
// }