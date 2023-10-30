import "./Details.css"
import logo from "./logo.png"
let Details=()=>{
    return(
        <div>
            <div className="reg">
                <div className="reg1">
                    <img src={logo} />
                    <h1>PUSHPA &nbsp;&nbsp;<i class="fa-solid fa-heart fa-beat"></i> &nbsp;&nbsp;FASHIONS</h1>
                    <p>Style is a way to say who you are without having to speak.Some of the most iconic designers of all time are not just revolutionary with their designs, but also great wordsmiths</p>
                    <div className="btn">
                        <button>Knowmore</button>
                       <div className="p"><button>Get Started</button></div>
                    </div>
                </div>
                <div className="reg2">
                <h3><i class="fa-solid fa-registered"></i>&nbsp;&nbsp;Registration Form &nbsp;&nbsp;<i class="fa-solid fa-arrow-right fa-beat-fade"></i> </h3>
                <p><i class="fa-solid fa-user"></i>&nbsp;&nbsp;<input type="text" placeholder="Enter Your name"/></p>
                <p><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;<input type="text" placeholder="Enter Your mail"/></p>
                <p><i class="fa-solid fa-lock"></i>&nbsp;&nbsp;<input type="password" placeholder="Enter Your password"/></p>
                <p><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;<input type="number" placeholder="Enter Your number"/></p>
                <p><i class="fa-solid fa-f"></i>&nbsp;&nbsp;<input type="text" placeholder="Type of Fashions"/></p>
                <div className="b1">Register</div>
                <div className="d"></div>
                <div className="c">
                    <p className="a1"><i class="fa-brands fa-facebook"></i></p>
                    <p className="a2"><i class="fa-brands fa-instagram"></i></p>
                    <p className="a3"><i class="fa-brands fa-apple"></i></p>
                    <p className="a4"><i class="fa-brands fa-twitter"></i></p>
                    <p className="a5"><i class="fa-brands fa-whatsapp"></i></p>
                </div>
                </div>

            </div>
            
        </div>
    )
}
export default Details