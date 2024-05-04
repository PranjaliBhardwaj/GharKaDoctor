const SearchSkin = () => {
    const searchbox3 = document.getElementById("searchy").value.toUpperCase();
    const store = document.querySelector(".medy");
    
    if (store) { // Ensure store exists
        const product3 = store.querySelectorAll(".med1");
        
        for (let i = 0; i < product3.length; i++) {
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
}

// Adding event listener for keyup event on the search input
document.getElementById("searchy").addEventListener("keyup", SearchSkin);

