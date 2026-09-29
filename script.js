const reserveInput = document.querySelector('.other-input');
const inputButton = document.getElementById('input-button');
const cancelButton = document.getElementById('cancel-button')

const headerInputVisibility = () => {
    const screenWidth = window.innerWidth;

    const headerInput = document.querySelector('#home2 .header-input');

    if (screenWidth < 800) {
        headerInput.style.display = 'none'
        inputButton.style.display = 'flex'
    } else {
        headerInput.style.display = 'flex'
        inputButton.style.display = 'none'
        cancelButton.style.display = 'none'
        reserveInput.style.display = 'none'
    }
}

const headerSocialVisibility = () => {
    const screenWidth = window.innerWidth;
    const socials = document.querySelector('.header-socials');
    if (screenWidth < 600) {
        socials.style.display = 'none';
    } else {
        socials.style.display = 'flex';
    };

};

const onOpenInput = () => {
        reserveInput.style.display = 'flex';
        inputButton.style.display = 'none';
        cancelButton.style.display = 'flex';
};

const onCancelInput = () => {
    reserveInput.style.display = 'none';
    cancelButton.style.display = 'none';
    inputButton.style.display = 'flex'
};

const navToSingleBlog = () => window.location.href = './singleBlog/singleBlog.html';

headerInputVisibility();
headerSocialVisibility();

window.onresize = () => {
    headerInputVisibility();
    sidepanelVisibility();
    headerSocialVisibility();
}