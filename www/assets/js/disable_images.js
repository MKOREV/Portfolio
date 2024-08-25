/* Disable drag and drop images */
<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const images = document.querySelectorAll('.slideshow-container img');
        images.forEach(img => {
            img.addEventListener('dragstart', (e) => {
                e.preventDefault(); // Prevent dragging
            });
        });
    });
</script>


/* Disable right-click on images */

<script>
    document.addEventListener('contextmenu', (event) => {
        if (event.target.tagName === 'IMG') {
            event.preventDefault(); // Prevent right-click on images
        }
    });
</script>