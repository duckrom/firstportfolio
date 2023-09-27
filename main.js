        // Initialize Masonry layout
        var grid = document.querySelector('.grid');
        var masonry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            gutter: 20
        });