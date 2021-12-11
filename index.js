// SHOW POST 180 Characters
function truncateText(selector, maxLength) {
    let element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}
let posts = document.querySelectorAll("#post_messages"), i;
for (i = 0; i < posts.length; ++i) {
    posts[i].innerText = truncateText('p', 180);
  }
// Modal Initialize
M.AutoInit();