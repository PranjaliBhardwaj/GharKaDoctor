const searchItem = () => {
    const searchbox = document.getElementById("search").value.toUpperCase();
    const storeItems = document.getElementById("product-list");
    const product = document.querySelectorAll(".square");
    const pname = storeItems.getElementsByTagName("h3");

    for(var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName("h3")[0];

        if(match){
            let textvalue =  match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1 ){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}

const searchUp = () => {
    const searchbox1 = document.getElementById("searchloc").value.toUpperCase();
    const storeItems1 = document.getElementById("product-list");
    const product1 = document.querySelectorAll(".square");
    const pname1 = storeItems1.getElementsByTagName("h5");

    for(var i = 0; i < pname1.length; i++) {
        let match = product1[i].getElementsByTagName("h5")[0];

        if(match){
            let textvalue =  match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox1) > -1 ){
                product1[i].style.display = "";
            }else{
                product1[i].style.display = "none";
            }
        }
    }
}


//check-box
$(document).ready(function() {
    var $filterCheckboxes = $('input[type="checkbox"]');
    
    $filterCheckboxes.on('change', function() {
        var selectedFilters = {};
        
        $filterCheckboxes.filter(':checked').each(function() {
            var filterName = $(this).attr('name');
            var filterValue = $(this).val();
            
            if (!selectedFilters.hasOwnProperty(filterName)) {
                selectedFilters[filterName] = [];
            }
            selectedFilters[filterName].push(filterValue);
        });
        
        var $filteredResults = $('.square');
        
        $.each(selectedFilters, function(name, filterValues) {
            $filteredResults = $filteredResults.filter(function() {
                var matched = false,
                    currentFilterValues = $(this).data('category').split(' ');
                
                $.each(currentFilterValues, function(_, currentFilterValue) {
                    if ($.inArray(currentFilterValue, filterValues) != -1) {
                        matched = true;
                        return false;
                    }
                });
                
                return matched;
            });
        });
        
        $('.square').hide().filter($filteredResults).show();
    });
});
console.log("Selected checkboxes:", $filterCheckboxes);
console.log("Filtered results:", $filteredResults);




const searchXX = () => {
    const searchbox2 = document.getElementById("find").value.toUpperCase();
    const storeXXX = document.querySelector("cards"); // Corrected this line
    const product2 = storeXXX.querySelectorAll(".meddata"); // Corrected this line
    const pname2 = storeXXX.getElementsByTagName("h3");

    for (let i = 0; i < pname2.length; i++) {
        let match = product2[i].getElementsByTagName("h3")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox2) > -1) {
                product2[i].style.display = "";
            } else {
                product2[i].style.display = "none";
            }
        }
    }
}


const SearchSkin = () => {
    const searchbox3 = document.getElementById("searchbar").value.toUpperCase();
    const store = document.querySelector("med"); // Corrected this line
    const product3 = store.querySelectorAll(".med1"); // Corrected this line
    const pname3 = storeXXX.getElementsByTagName("h3");

    for (let i = 0; i < pname3.length; i++) {
        let match = product3[i].getElementsByTagName("h3")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox3) > -1) {
                product3[i].style.display = "";
            } else {
                product3[i].style.display = "none";
            }
        }
    }
}



