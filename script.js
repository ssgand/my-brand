const sidepanelVisibility = () => {
    let sidepanel = document.getElementById('home-sidepanel')

    const screenWidth = window.innerWidth

    if (screenWidth < 700) {
        sidepanel.style.display = 'none'
    } else {
        sidepanel.style.display = 'flex'
    }
}

const navToSingleBlog = () => window.location.href = './singleBlog/singleBlog.html';

sidepanelVisibility()

window.onresize = () => {
    sidepanelVisibility()
}