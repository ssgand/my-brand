const xValues = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const blogsValues = [25, 54, 89, 89, 65]
const likesValues = [0, 50, 30, 89, 68]
const commentsValues = [0, 12, 30, 65, 78]

const colors = ['#9747FF', '#12F7D6', '#ffffff']

const crt = document.getElementById('chart')

new Chart(crt, {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [
            {
                label: 'blogs',
                data: blogsValues,
                borderColor: '#12F7D6'
            },
            {
                label: 'likes',
                data: likesValues,
                borderColor: '#9747FF'
            },
            {
                label: 'comments',
                data: commentsValues,
                borderColor: '#ffffff'
            }
        ]
    }
})

tinymce.init({
    selector: 'textarea',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    // tinycomments_mode: 'embedded',
    // tinycomments_author: 'Author name',
    height: 250,
    width: 700,
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
});

const menu = document.getElementById('menu')
const img = document.getElementById('admin-image')
const dash = document.getElementById('dash')
// const blogs = document.getElementById('blogs')
const users = document.getElementById('users')
const sidepanel = document.getElementById('sidepanel')
const admin = document.getElementById('admin')
const sidepanelButtons = document.querySelectorAll('.sidepanel-buttons')
const headerButtons = document.querySelectorAll('.header-button')
const content = document.getElementById('content')
const blogs = document.getElementById('blogs')
const querries = document.getElementById('querries')
const addBlog = document.getElementById('add-blog')
const newBlog = document.getElementById('new-blog')
const imageInput = document.getElementById('pic-input')
let toggleMenu = false;
// let toggleAddBlog = false;


console.log(sidepanelButtons)

sidepanelButtons.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        element.classList.add('active')
    })
})

headerButtons.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('.active-icon')?.classList.remove('active-icon')
        element.classList.add('active-icon')

    })
})

function activateContent () {
    blogs.style.display = 'none'
    querries.style.display = 'none'
    content.style.display = 'flex'
    addBlog.classList.add('disappear')
}

function activateBlogs () {
    blogs.style.display = 'flex'
    querries.style.display = 'none'
    content.style.display = 'none'
    addBlog.classList.remove('disappear')
}

function activateQuerries () {
    blogs.style.display = 'none'
    querries.style.display = 'flex'
    content.style.display = 'none'
    addBlog.classList.add('disappear')
}

function activateAddBlog () {
    blogs.style.display = 'none'
    querries.style.display = 'none'
    content.style.display = 'none'
    newBlog.style.display = 'flex'
}

// function changeImg() {
    imageInput.addEventListener('change', () => {
        let image = event.target.files
        console.log('Image ----> ', image)
    })
// }