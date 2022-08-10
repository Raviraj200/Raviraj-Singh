import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript, DiMongodb, DiReact, DiJava } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
// import { Link } from "react-router-dom";
import './index.css'
import Aos from "aos";
// import { useEffect } from "react";
import 'aos/dist/aos.css';
import Page from "./Page";

const Ravi = () => {



  Aos.init();
  return (
    <>


      <div id="home" class="carousel slide mt-5 mx-3  " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="let.png" class="d-block w-100 h-100 mt-4  " alt="..." />
            {/* <video autoplay w-100 h-100> <source src="" type="Video/mp4"/> <source src="/></video> */}


            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <button type="button" href="#skil" class="btn btn-outline-light w-25 text-center">Dark</button>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="dd.jpg" class="d-block w-100 h-100 mt-4" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100 h-100 mt-4" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>




      {/* About */}
      <section className="about my-5" id="about">
        <div className="container ">
          <div>
            <h1 className="text-center">About <span className="badge h-5  bg-dark  "> Me</span></h1>
            <hr className="bg-dark" />
          </div>
          <div className="row">
            <div className="clo-sm-12 col-md-6 col-lg-6 col-12">
              <h1 className="fs-4 ">What do you want to know?</h1>
              <p>Quickly change the font-size of text. While our heading classes (e.g., .h1.h6) apply font-size, font-weight, and line-height, these utilities only apply font-size. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.</p>
              <button type="button" class="btn btn-dark my-3">More About Me </button>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h1 class="accordion-header text-center" id="headingThree">
                    <button class="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <h5 className="text-center ">My Resume</h5>
                    </button>
                  </h1>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                      <img data-aos="zoom-out-up" src="res.png" className="img img-fluid img-thumbnail rounded-3 " />

                    </div>


                  </div>
                </div>
              </div>





            </div>


            <div className="clo-sm-12 col-md-6 col-lg-6 col-12 my-auto mt-3  d-none d-md-block ">
              <img data-aos="zoom-out-up" src="profile.svg" className=" w-100 h-100 text-center " />

            </div>
          </div>
        </div>
      </section>


      {/* skil*/}
      <section className="services  " id="skil">
        <div className="container">
          <div>
            <h1 className="text-center">My <span className="badge h-5  bg-dark "> Skills</span></h1>
            <hr class="border border-dark  " />
          </div>
          <div className="row  mx-auto">
            <div className="col-sm-12 col-md-12 col-lg-12 col-12">
              <div class="row row-cols-2 row-cols-md-4 g-4">
                <div class="col ">
                  <div class="card border border-dark  ">
                    {/* <img src="r.png" class="card-img-top text-center w-75 mx-auto" alt="..." />
                     */}<AiFillHtml5 className="h-75 w-75 text-center mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></AiFillHtml5>
                    <div class="card-body">
                      <h3 class="card-title text-center">HTML</h3>
                      {/* <div class="progress"> */}

                      <div class="progress">
                        <div class="progress-bar w-75 bg-dark" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                      </div>

                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div class="card border border-dark ">

                    <DiCss3 className="w-75 h-75 mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></DiCss3>

                    <div class="card-body">
                      <h3 class="card-title text-center">CSS</h3>
                      <div class="progress">
                        <div class="progress-bar w-75 bg-dark text-center" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                      </div>

                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border border-dark">
                    {/* <img src="react.png" class="card-img-top text-center w-75 mx-auto " alt="..." /> */}
                    <DiJavascript className="w-75 h-75 mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></DiJavascript>
                    <div class="card-body">
                      <h3 class="card-title text-center my-0">JavaScript</h3>
                      <div class="progress">
                        <div class="progress-bar w-75 bg-dark" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                      </div>
                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border-dark">
                    {/* <img src="js.png" class="card-img-top text-center w-100 mx-auto my-auto py-4 " alt="..." />
                     */}
                    <DiNodejsSmall className="w-75 h-75 mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></DiNodejsSmall>
                    <div class="card-body">
                      <h3 class="card-title text-center">Node JS</h3>
                      <div class="progress">
                        <div class="progress-bar w-75 bg-dark" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                      </div>
                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border-dark">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <DiMongodb className="w-75 h-75 mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></DiMongodb>
                    <div class="card-body">
                      <h3 class="card-title text-center">Mongo DB</h3>
                      <div class="progress">
                        <div class="progress-bar w-50 bg-dark" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                      </div>
                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border-dark">
                    {/* <img src="/" class="card-img-top" alt="..." />
                     */}<DiReact className="w-75 h-75 mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></DiReact>
                    <div class="card-body">
                      <h3 class="card-title text-center">React</h3>
                      <div class="progress">
                        <div class=" react_bar progress-bar  bg-dark" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>
                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card border-dark">
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <FaBootstrap className="w-75 h-75 mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></FaBootstrap>
                    <div class="card-body">
                      <h3 class="card-title text-center">Bootstrap</h3>
                      <div class="progress">
                        <div className="r_e progress-bar bg-dark" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                      </div>
                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card border-dark">
                    {/* <img src="/" class="card-img-top" alt="..." />
                     */}<DiJava className="w-75 h-75 mx-auto " data-aos="zoom-out-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"></DiJava>
                    <div class="card-body">
                      <h3 class="card-title text-center">Java</h3>
                      <div class="progress">
                        <div class="java react_bar progress-bar  bg-dark" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
                      </div>
                      {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* my project */}

      <section className="services py-1   " id="project">
        <div className="container">
          <div>
            <h1 className="text-center mt-5">My <span className="badge h-5  bg-dark ">Projects</span></h1>
            <hr className="bg-dark border border-3" />
          </div>
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-12 col-12">
              <div class="row row-cols-1 row-cols-md-12 g-3">

                <div class="card mb-3 border-dark mx-auto   " >
                  <div class="row g-0">
                    <div class="col-md-4 ">
                      <img src="js.png" class="img-fluid rounded-start text-center w-100 h-100 " alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        {/* <Link to='./Contact' type="button" class="btn btn-dark" >View Project</Link> */}

                      </div>
                    </div>
                  </div>

                </div>
                <div class="card mb-3 border-dark mx-auto  " >
                  <div class="row g-0 ">
                    <div class="col-md-4">
                      <img src="js.png" class="img-fluid rounded-start text-center w-100 h-100 " alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a type="button" class="btn btn-dark">View Project</a>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mb-3 border-dark mx-auto " >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="js.png" class="img-fluid rounded-start text-center w-100 h-100 " alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a data-toggle='tab' href="#" type="button" class="btn btn-dark">View Project</a>




                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>



      </section>

      {/* team */}

      <section className="services py-1" id="team">
        <div className="container">
          <div>
            <h1 className="text-center mt-5">My <span className="badge h-5  bg-dark ">Team</span></h1>
            <hr className="bg-dark border-3 " />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-12">
              <div class="row row-cols-1 row-cols-md-3 g-4">


                <div data-aos="zoom-out-up" class="col text-center">
                  {/* <div class="card"> */}
                  <img src="php.png" class="img-fluid rounded-circle border  border-dark border border-3  p-1 w-50    " alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center mx-3">Raviraj Singh</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    {/* <button type="button" class="btn btn-outline-dark  w-50 text-md-center text-center ">View </button>
                       */}

                    <h3 className="text-center"> <span className="ese_ese badge  bg-dark  ">View Profile</span></h3>
                    {/* </div> */}
                  </div>
                </div>
                <div data-aos="zoom-out-up" class="col text-center">

                  <img src="php.png" class="img-fluid rounded-circle border  border-dark border border-3  p-1 w-50 " alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    <h3 className="text-center"> <span className="ese_ese badge  bg-dark  ">View Profile</span></h3>
                  </div>
                  {/* </div> */}
                </div>



                <div data-aos="zoom-out-up" class="col text-center">
                  {/* <div class="card"> */}
                  <img src="php.png" class="img-fluid rounded-circle border  border-dark border border-3  p-1 w-50 mx-5" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-center">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    {/* <button type="button" class="btn btn-outline-dark w-50">Veiw </button> */}

                    <h3 className="text-center"> <span className="ese_ese badge  bg-dark  ">View Profile</span></h3>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>


        </div>
      </section>

      {/* contact */}


    </>
  )
};
export default Ravi;