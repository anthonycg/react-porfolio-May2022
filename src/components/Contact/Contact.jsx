import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>Contact me using the information below.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:anthony.gibson9494@gmail.com">anthony.gibson9494@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone No" />
          <a href="tel:+16015292284">601.529.2284</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}