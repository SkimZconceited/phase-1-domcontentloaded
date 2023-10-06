document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const p = document.querySelector('p');
    p.textContent = 'This is really cool!'
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

console.log(document.querySelector('p').textContent);
