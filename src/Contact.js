import React from "react";
// import { DiJavascript, DiMongodb, DiReact, DiJava } from "react-icons/di";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin, AiFillCopyrightCircle } from "react-icons/ai";
import { FaGitSquare, FaTelegram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
// import './Rema';
import emailjs from "emailjs-com"
import swal from "sweetalert";


import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import './index.css'

const Contact = () => {
  function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('service_31ajznq', 'template_d2jxuad', event.target, 'eCumWrbHi48U_9gB6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);

      });
    event.target.reset()

    let btn = document.getElementById('btn');

    btn.addEventListener("click", function () {
      let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1").value;
      if (exampleFormControlInput1 == "") {
        swal({
          title: "Error",
          text: "Please Enter Detail",
          icon: "error",
          button: "OK ",
        });
      } else {
        swal({
          title: "Good job!",
          text: "Message Sent Successfully!",
          icon: "success",
          button: "Thanks",
        });
      }
    })
  }


  return (
    <>
      <section className="about my-5" id="#">
        <div className="container ">
          <div>
            <h1 className="text-center">Contact <span className="badge h-5  bg-dark  "> Me</span></h1>
            <hr className="bg-dark" />
          </div>

          <div className="row  ">

            <div className="clo-sm-12 col-md-6 order-0  col-lg-6 col-12">
              <form onSubmit={sendEmail}>
                <div >
                  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="xyz" />
                </div>

                <div className="mb-3 my-4">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" name="email" className="form-control" id="exampleFormControlInput" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                  <textarea className="form-control" name="message" id="exampleFormControlTextarea" rows="3"></textarea>
                  <button type="submit" value='send' className="btn btn-dark my-3 text-center w-50    " id="btn">Send    <BiMailSend className=" m-auto " /></button>
                </div>
                {/* 
                <img src="time.svg" alt=""  className=" w-50 text-end m-auto mx-auto justify-content-center h-25   " data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"></img> */}

              </form>
         
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-12 my-auto mt-12 " id="waw">
              {/* <img data-aos="zoom-out-up" src="profile.svg" className="img img-fluid img-thumbnail " /> */}
              {/* {/*   */}

              <div className="card  ">
                <img src="php.png  " className="card-img-top w-50 h-50 my-auto mx-auto border border-dark rounded-circle border border-3 mt-2" alt="..." />
                <div className="card-body">
                  <h2 className="card-title text-center text-dark">Say, Hi to me...</h2>
                  <section className="services py-1" id="team">
                    <div className="container">

                      <div className="row my-auto ">
                        <div className="col-sm-12    col-md-12 col-lg-12 col-12">
                          <div className="row row-cols-3  row-cols-md-3 g-3 row-cols-sm-">


                            <div data-aos="zoom-out-up" className="col text-center">

                              <AiFillInstagram className="for w-50 h-50    " href="#" />

                            </div>

                            <div data-aos="zoom-out-up" className="col text-center">

                              <AiFillLinkedin className="for w-50 h-50  " href="#" />


                            </div>


                            <div data-aos="zoom-out-up" className="col text-center">

                              <FaTelegram className="for w-50 h-50  " href="#" />


                            </div>
                            <div data-aos="zoom-out-up" className="col text-center">

                              <BsFacebook className="for w-50 h-50  " href="#" />

                            </div>

                            <div data-aos="zoom-out-up" className="col text-center">

                              <FaGitSquare className="for w-50 h-50  " href="#" />


                            </div>


                            <div data-aos="zoom-out-up" className="col text-center">

                              < BsGithub className=" w-50 h-50  " href="#" />


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
               


                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div href="#home" className="card text-white bg-dark mb-3 mx-3 " >
        <div className="card-header text-center "><AiFillCopyrightCircle /> copyrights 2022 | Made By <span  href="#home" className=" lodo  text-info ">Raviraj Singh</span> with React JS</div>

      </div>
    </>
  );
};
export default Contact;;