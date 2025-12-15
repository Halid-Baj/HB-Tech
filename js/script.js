// mailto code to prevent spam bots

document.querySelectorAll('.email-link').forEach(link => {
    const user = link.getAttribute('data-user');
    const domain = link.getAttribute('data-domain');
    link.href = 'mailto:' + user + '@' + domain;
});
