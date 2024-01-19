import router from "./router.js";
document.addEventListener('click', (event) => {
    if (!event.target.className.includes('nav-link')) {
        return false;
    }
    event.preventDefault();
    urlRoutes(event);
});
function urlRoutes(event) {
    window.history.pushState({}, "", event.target.href);
    locationHandlear();
}
async function locationHandlear() {
    const loc = window.location.pathname;
    const route = router[loc] || router['/not'];
    const html = await fetch(route.template).then(res => res.text());
    document.getElementById('all').innerHTML = html;
    document.title = route.title;
}
window.onpopstate = locationHandlear();

console.log(typeof (undefined));
