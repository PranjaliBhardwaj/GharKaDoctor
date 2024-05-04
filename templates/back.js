var $filterCheckboxes = $('input[type="checkbox"]');
var filterFunc = function() {
    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {
        if (!selectedFilters.hasOwnProperty(this.name)) {
            selectedFilters[this.name] = [];
        }
        selectedFilters[this.name].push(this.value);
    });

    var $filteredRows = $('#product-list tr');

    $filteredRows.each(function() {
        var $row = $(this);
        var shouldShow = true;

        $.each(selectedFilters, function(name, filterValues) {
            var category = $row.find('.square').data('category').split(' ');
            var matches = false;

            $.each(category, function(_, categoryValue) {
                if ($.inArray(categoryValue, filterValues) !== -1) {
                    matches = true;
                    return false; // Break the loop if we found a match
                }
            });

            // If the row doesn't match any of the selected filters, hide it
            if (!matches) {
                shouldShow = false;
                return false; // Break the loop if the row doesn't match
            }
        });

        // Show or hide the row based on the filtering result
        if (shouldShow) {
            $row.show();
        } else {
            $row.hide();
        }
    });
};

$filterCheckboxes.on('change', filterFunc);
