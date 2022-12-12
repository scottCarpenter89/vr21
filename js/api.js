

document.querySelector('#submit-search').addEventListener('click', event => {
    event.preventDefault();
    const client_id = "nC-HrEZjt6alcaaza6NnMw4WxpxF278Fb6WtSMTBuLY"; // Create an account unsplash tp hey client ID;
    const search = document.querySelector('#search').value;
  

    fetch(
        `https://api.unsplash.com/search/photos?query=${search}&per_page=100&client_id=${client_id}`
    )
        .then((response) => response.json())
        .then((data) => {
            const container = document.querySelector(".container");

            for (let i = 0; i < data.results.length - 1; i++) {
                const img = document.createElement("img");

                img.setAttribute("src", data.results[i].urls.thumb);

                container.append(img);
            }
        });
});


