import "./Login.css"
let Login=()=>{
    return(
      <div className="main">
        <div className="login">
          <input type="text" placeholder=" enter name"/>
          <input type="mail" placeholder="enter mail"/>
          <input type="password" placeholder="password"/>
          <input type="password" placeholder="confirm password"/>
          <button>submit</button>
        </div>
      </div>
    )
  }
  export default Login