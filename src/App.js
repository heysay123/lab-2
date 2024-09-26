import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <>
    <div className='container-fluid bg-dark'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizza House</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-danger" type="submit"><i className='fa fa-search'></i>Search</button>
      </form>
    </div>
  </div>
            </nav>
          </div>
        </div>
        <div className='col-lg-12 mb-5'>
          <div className='row'>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./Images/pizza1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/pizza2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/pizza3.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/pizza4.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/pizza5.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
        </div>
          <div className='text-white mb-5'>
            <div className='container'>
              <h2>Our Menu</h2>
              <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="Images\Menu1.jpg" className="card-img-top" alt="Margherita Pizza" />
              <div className="card-body">
                <h5 className="card-title">Margherita Pizza</h5>
                <p className="card-text">$24.00</p>
                <button className="bg-while">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="Images\Menu2.jpg" className="card-img-top" alt="Mushroom Pizza" />
              <div className="card-body">
                <h5 className="card-title">Mushroom Pizza</h5>
                <p className="card-text">$25.00</p>
                <button className="bg-while">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="Images\Menu3.jpg" className="card-img-top" alt="Hawaiian Pizza" />
              <div className="card-body">
                <h5 className="card-title">Hawaiian Pizza</h5>
                <p className="card-text">$26.00</p>
                <button className="bg-while">Buy</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="Images\Menu4.jpg" className="card-img-top" alt="Pesto Pizza" />
              <div className="card-body">
                <h5 className="card-title">Pesto Pizza</h5>
                <p className="card-text">$27.00</p>
                <button className="bg-while">Buy</button>
              </div>
            </div>
          </div>
        </div>
              </div>
          </div>
          <h2 className="bg-dark text-white text-center">Book Your Table</h2>

        <form>
          <div className="row mb-5">
            <div className="col">
              <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <select className="form-control" id="service" placeholder="Select a Service">
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group mb-5">
            <textarea className="form-control" id="comment" placeholder="Please write your comment"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        </div>
      </div>
    </>
  );
}

export default App;
