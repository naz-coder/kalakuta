const viewport = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('republicContainer');
        }else{
            entry.target.classList.remove('republicContainer');
        }    });
});

const showElements = document.querySelectorAll('.republicContainer');
showElements.forEach((el) => viewport.observe(el));
