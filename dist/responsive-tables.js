document.addEventListener('DOMContentLoaded', function() {
    // Select all tables on the page
    var tables = document.querySelectorAll('table');

    tables.forEach(function(table) {
        // Create a container div
        var container = document.createElement('div');
        container.className = 'responsive-table-container';

        // Wrap the table with the container
        table.parentNode.insertBefore(container, table);
        container.appendChild(table);

        // Add 'responsive-table' class to the table
        table.className += ' responsive-table';

        // Add data-label to each td based on th
        var headers = table.querySelectorAll('thead th');
        var headerArray = [];
        headers.forEach(function(header) {
            headerArray.push(header.textContent);
        });

        var cells = table.querySelectorAll('tbody td');
        cells.forEach(function(cell, index) {
            var headerText = headerArray[index % headerArray.length];
            cell.setAttribute('data-label', headerText);
        });
    });
});
