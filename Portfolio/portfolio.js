let sec = document.querySelectorAll('section');
let nav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sec.forEach(s => {
        let top = window.scrollY;
        let ofs = s.offsetTop - 70;
        let height = s.offsetHeight;
        let id = s.getAttribute('id');

        if(top >= ofs && top < ofs+height) {
            nav.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            });
        };
    });
};


