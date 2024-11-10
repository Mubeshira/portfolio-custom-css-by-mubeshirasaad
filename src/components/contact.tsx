import  "../style/contact.css"

function Contact() {
    return (
    <main className="contact-main">
        <div className="form-container">
            <h1 className="con-title">Contact Us</h1>
            <form action="" className="form">
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input className="msg" type="text" placeholder="Enter your message" />
            </form>
            <button className="btn">Submit</button>
        </div>
      

    
    </main>
    )
  }
  
  export default Contact