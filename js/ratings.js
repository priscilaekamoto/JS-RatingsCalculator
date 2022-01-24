// const { replaceWith } = require("cheerio/lib/api/manipulation");

let ratings = {
    count: 0,
    sum: 0,
    average:0,
    
}

function collect_ratings() {

    let rating = 0;

    const elements = document.querySelectorAll(".rating");

    elements.forEach(element => {

        // quantidade de estrelas
        rating = parseInt(element.id.replace("star",""));

        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value)*rating;
       
    });

    if(ratings.count != 0) {
        ratings.average  = ratings.sum / ratings.count;
    }
    
    return ratings
}

document.addEventListener("change", () => {
    

    let ratings = collect_ratings();
    
    document.querySelector("#average").value = ratings.average.toFixed(2);
});



