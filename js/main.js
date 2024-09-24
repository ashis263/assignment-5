//smaller device blog button hyperlink
document.getElementById('blog-btn1').
    addEventListener('click', function(){
        window.location.href = './blog.html';
    });

//larger device blog button hyperlink
document.getElementById('blog-btn2').
    addEventListener('click', function(){
        window.location.href = './blog.html';
    });





//donation button clicking hannder
btnToggler('donation-btn', 'donation', 'history-btn', 'history');

//donation button clicking hannder
btnToggler('history-btn', 'history', 'donation-btn', 'donation');





//for noakhali section donation
document.getElementById('noakhali-btn').
    addEventListener('click', function (event) {
        event.preventDefault();
        donation('noakhali-amount', 'noakhali-bal', 'noakhali-heading');
    });

//for feni section donation
document.getElementById('feni-btn').
    addEventListener('click', function (event) {
        event.preventDefault();
        donation('feni-amount', 'feni-bal', 'feni-heading');
    });

//for quota section donation
document.getElementById('quota-btn').
    addEventListener('click', function (event) {
        event.preventDefault();
        donation('quota-amount', 'quota-bal', 'quota-heading');
    });