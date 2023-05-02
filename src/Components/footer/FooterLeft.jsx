export default function FooterLeft(){

  return(
    <div className="footer_left">
      <h3 className="footer_contact">CONTACT US</h3>
      <form className="footer_conact-form">
        <label for="name">Name</label>
        <input className="footer_input" type="text" id="name" name="name" placeholder="Enter your name" />

        <label for="email">Email</label>
        <input className="footer_input" type="email" id="email" name="email" placeholder="Enter your email" />

        <label for="phone">Phone</label>
        <input className="footer_input" type="phone" id="phone" name="phone" placeholder="Enter your phone" />

        <label for="message">Message</label>
        <textarea  className="footer_input" type="text" id="message" name="message" placeholder="Enter your message"></textarea>

        <button className="footer_submit" type="submit">Submit</button>
      </form>
      
    </div>
  )
}