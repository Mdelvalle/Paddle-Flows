import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-icons">
      <a href="https://github.com/Mdelvalle/Paddle-Flows" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/migdelv/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:migdelv@gmail.com" target="_blank" rel="noreferrer">
        <FaRegEnvelope />
      </a>
    </div>
  )
}

export default Contact
