

function Contact () {
  return (
   <>
    <div className="contact">
    <div>
      <img src="images/contact page2.avif" alt="contact" />
    </div>
    <div className="contactright">

    <div className="contactheading">
      <h1>
        contact us
      </h1>
    </div>
    <form >

    <label for="First Name">First Name</label>
    <input type="text" id="First Name" />

    <label for="Last Name">Last Name</label>
    <input type="text" id="Last Name"/>

    <label for="phone number">Phone Number</label>
    <input type="number" />

    <label for="Email">Email</label>
    <input type="text" id="Email"/>

    <label for="Query">What you would like to discuss</label>
<textarea id="Query" cols="30" rows="5"></textarea> 

<input type="submit" />

    </form>

    </div>

    </div>
   </>
  );
}

export default Contact;
