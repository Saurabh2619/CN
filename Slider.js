import React from 'react'

export default function Slider() {
  

  return (
    <>
    <div className="container" style={{marginTop:"20px"}}>
    <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="im 3.jpg" className="d-block w-100" alt="..." width="400" height="550"/>
    </div>
    <div className="carousel-item">
      <img src="im 2.jpg" className="d-block w-100" alt="..." width="400" height="550" />
    </div>
    <div className="carousel-item">
      <img src="im 1.jpg" className="d-block w-100" alt="..." width="400" height="550" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

   
   </div>
   <div className="width" style={{width:"100px", height:"200px", marginLeft:"150px",marginTop:"20px",marginBottom:"15px", background:"#D3D3D3",}}><img src="food.jpg"/>
   
    </div>
    </>

      )
}
