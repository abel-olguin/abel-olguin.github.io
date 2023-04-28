import '../css/main.css';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

window.onload = () => {
    document.getElementById('theme-toggle').addEventListener('click', () => {
        localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';

        if(localStorage.theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    })
}

