document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function showItem(index) {
        if (index < 0 || index >= totalItems) {
            return;
        }
        const translateX = `translateX(${-index * 100}%)`;
        document.querySelector('.carousel-inner').style.transform = translateX;
        currentIndex = index;
    }

    document.querySelector('.carousel-control.prev').addEventListener('click', function(event) {
        event.preventDefault();
        showItem(currentIndex - 1);
    });

    document.querySelector('.carousel-control.next').addEventListener('click', function(event) {
        event.preventDefault();
        showItem(currentIndex + 1);
    });
});
