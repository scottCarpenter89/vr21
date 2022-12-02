let contentCard = ` 
<div class="col-md-6 col-lg-3 col-xl-2 d-flex justify-content-center">
            <div class="card container-fluid mb-4" style="width: 18rem;">
                <img src="https://via.placeholder.com/150" class="card-img-top mt-2" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the
                        bulk
                        of the card's content.</p>
                    <div class=" d-flex justify-content-end">
                        <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                            data-bs-target="#updateModal">Update</button>
                        <a href="#" class="btn btn-success ms-2">Release</a>
                    </div>
                </div>
            </div>
        </div>`;
document.querySelector(".row").innerText = contentCard;