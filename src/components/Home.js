import React,{useState} from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import "../styles/Contact.css";

function Home() {
  const [userData, setUserData] = useState({
    firstName: "",
    phone: "",
    email: "",
    companyname:"",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, phone, email, companyname, message } = userData;

    if (firstName  && phone && email && companyname && message) {
      const res = fetch(
        "https://portfolioform-5aeb2-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            phone,
            email,
            companyname,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          phone: "",
          email: "",
          companyname: "",
          message: "",
        });
        alert("Your Details Successfully Submitted");
      } else {
        alert("Please fill the complete form");
      }
    } else {
      alert("Please fill the complete form");
    }
  };
  return (
 
    <div className="homecontainer">  
      <div className="myself"> 
      <h2 className="firsth2">Welcome to my Portfolio</h2>
      <br></br> <br></br>
        <h2> Hello, I am Varun</h2>
        <div className="vinfo">
          <p className="varunp">I am a Web Developer</p>
            <a href="https://www.linkedin.com/in/varun-pratap-singh-984826270/" target="blank">
              <LinkedInIcon /></a>
          <a href="https://github.com/VivamV" target="blank"> 
          <GithubIcon /> 
          </a>
        </div>
        <div className="varconnect">
       <a href="#contact" >Let's Connect</a>
      </div>
      </div>
      
       <section id="contact">
        <h1 className="contact1">Contact Me</h1>
        <div id="contact-box">
            <form method="POST">
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="firstName" id="name" 
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                </div>
                <div className="form-group">
                    <label for="email">Email: </label>
                    <input type="email" name="email" id="email" 
                      value={userData.email}
                      onChange={postUserData}/>
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number: </label>
                    <input type="phone" name="phone" id="phone" 
                     value={userData.phone}
                     onChange={postUserData}/>
                </div>
                <div className="form-group">
                    <label for="phone">ComapanyName: </label>
                    <input type="address" name="companyname" id="address" 
                     value={userData.companyname}
                     onChange={postUserData}/>
                </div>
                <div className="form-group">
                    <label for="message">Message: </label>
                    <input type="text" name="message" id="message" 
                     value={userData.message}
                     onChange={postUserData}/>  
                </div>
                <button type="submit" className="varbtn" onClick={submitData}>Submit </button>
            </form>
        </div>
    </section>
    </div>
  );
}

export default Home;