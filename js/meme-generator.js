document.querySelector('#generate-meme').addEventListener('click', (e) => {
    let memeURL = document.querySelector('#meme-url').value;
    let topText = document.querySelector('#meme-top-text').value;
    let bottomText = document.querySelector('#meme-bottom-text').value;

    const meme = `
    <div id="meme-container" class="container d-flex justify-content-center" style="position: relative; color: #000; font-size: 36pt; font-weight: 700"> 
        <div id="meme-img">
            <img src="${memeURL}">
        </div>
        <div id="top-text-container" style="position: absolute; top: 16px">
            ${topText}
        </div> 
        <div id="bottom-text-container" style="position: absolute; bottom: 16px">
            ${bottomText}
        </div>
    </div> 
    
    <button id="delete-meme">Censor Meme</button>`

    document.querySelector('#meme-container').insertAdjacentHTML("beforeend", meme);
    

});

document.querySelector('#delete-meme').addEventListener('click', (e) => {
    meme.remove();
});