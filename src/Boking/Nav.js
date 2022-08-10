import "./Nav.css"
import { FaBed, FaPlaneDeparture, FaCarSide } from "react-icons/fa";
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
const Nav = () => {
    // const [date,setDate]=useState([
    //     {
    //         startDate:new Date(),
    //         endDate:null,
    //         key:'selection'
    //     }
    // ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,

    })
    return (

        <>

            <nav class="navbar navbar-light bg-Dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white " href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top text-white " />
                        Romm Booking
                    </a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success text-white" type="submit">Search</button>
                    </form>
                </div>

            </nav>
            <div class=" ravi p-3 mb-2 bg-dark text-white m-3 tex-aling-center ">
                <button class="btn btn-primary m-2 rounded-pill mt-3 w-auto " type="button"><FaBed />  Stays</button>
                <button class="btn btn-primary m-2 rounded-pill  mt-3" type="button"><FaPlaneDeparture />  Flights</button>
                <button class="btn btn-primary m-2 rounded-pill  mt-3" type="button w-25"><FaCarSide />  Car Reantals</button>
                <button class="btn btn-primary m-2 rounded-pill  mt-3" type="button w-25"><FaBed />  Attractions</button>
                <button class="btn btn-primary m-2 rounded-pill  mt-3" type="button w-25"><FaCarSide />  Airport Taxi</button>
                <h5 className="mt-5"> A lifetime of discounts? It's Genius.</h5>
                <p>Get rewarded for your travels-ulock instant savings of 10% or more with a free Lamabooking account</p>
                <h8 className="text-warning">Sing in/Register</h8>
                <br />
                <button class="btn btn-primary m-2 rounded-pill mt-3 w-auto " type="button"><FaBed />  Stays</button>
                <button class="btn btn-primary m-2 rounded-pill mt-3 w-auto " type="button"><FaBed />  Stays</button>

            </div>
            <nav class="navbar navbar-light bg-Dark mt-3 w-100 m-auto ">


                <a class="navbar-brand text-white  m-auto">Navbar</a>
                {/* <DateRange
                editableDateInputs={ture}
                onChange={(item)=>setImmediate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                /> */}
                <a class="navbar-brand text-white  m-auto">Navbar</a>
                <a class="navbar-brand text-white  m-auto">{`${options.adult} adult '${options.children} children'${options.room} room`}
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <button className="opionCounterButton">-</button>
                    <span className="optionCounterNumber">0</span>
                    <button className="opionCounterButton">+</button>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <button className="opionCounterButton">-</button>
                    <span className="optionCounterNumber">0</span>
                    <button className="opionCounterButton">+</button>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <button className="opionCounterButton">-</button>
                    <span className="optionCounterNumber">0</span>
                    <button className="opionCounterButton">+</button>
                </div>


                

                </a>

            </nav>
        </>

    )
};

export default Nav;
