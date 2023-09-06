import { Link } from "react-router-dom";

const Contact = () => {
  const recipientEmail = "jaime.alcarazc@gmail.com";

  return (
    <>
      <div className="contact">
        <h1>Contact</h1>

        <Link to={`mailto:${recipientEmail}`} target="_blank">
          <h2>Jaime.alcarazc@gmail.com</h2>
        </Link>
      </div>
    </>
  );
};

export default Contact;
