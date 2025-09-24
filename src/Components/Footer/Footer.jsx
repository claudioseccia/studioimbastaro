import {
  FooterWrapper,
  // LinkToTopContainer,
  // StyledLink,
  FooterFlexContainer,
  FooterLink,
  LinkContainer,
  StyledUl,
  StyledLi,
  Input,
  BtnSend,
  Title,
  InfoText,
  SubscribeContainer,
  LastFooterContainer,
  InfoContainer,
  AddressContainer,
} from "./FooterElements";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useRef } from "react";
const Footer = () => {
  const GOOGLE_RECAPTCHA_KEY = import.meta.env.VITE_GOOGLE_RECAPTCHA;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });
  const [status, setStatus] = useState("");
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      if (form.file) formData.append("file", form.file);
      formData.append("recaptcha", token);

      const res = await fetch("/mail.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("✅ Mail sent successfully!");
      } else {
        setStatus("Error: " + result.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to server.");
    }
  };
  return (
    <>
      <FooterWrapper>
        {/* <LinkToTopContainer>
          <StyledLink to="Hero" activeClass="active" smooth={true}>
            Back to top
          </StyledLink>
        </LinkToTopContainer> */}
        <FooterFlexContainer>
          <FooterLink>
            {/**/}
            <Title>Studio di progettazione Imbastaro</Title>
            <LinkContainer>
              <StyledUl>
                {/* <StyledLi>Lo Studio</StyledLi> */}
                {/* <StyledLi>Il Team</StyledLi> */}
                <StyledLi>
                  <Link className="menu-item" activeClass="active" to="">
                    Home
                  </Link>
                </StyledLi>
                <StyledLi>
                  <Link
                    className="menu-item"
                    activeClass="active"
                    to="/progetti"
                  >
                    Progetti
                  </Link>
                </StyledLi>
                <StyledLi>
                  <Link
                    className="menu-item"
                    activeClass="active"
                    to="/clienti"
                  >
                    Clienti
                  </Link>
                </StyledLi>
                <StyledLi>
                  <Link
                    className="menu-item"
                    activeClass="active"
                    to="/contatti"
                  >
                    Contatti
                  </Link>
                </StyledLi>
                {/* <StyledLi>Contattaci</StyledLi> */}
              </StyledUl>
              <StyledUl>
                {/* <StyledLi>Privacy Policy</StyledLi>
                <StyledLi>Terms & conditions</StyledLi> */}
                <StyledLi>
                  <a
                    href="https://www.linkedin.com/in/studio-tecnico-ingegnere-imbastaro-a162362b3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size="1.6rem" />
                  </a>
                </StyledLi>
                <StyledLi>
                  <a
                    href="https://www.instagram.com/studio.ing.imbastaro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram size="1.6rem" />
                  </a>
                </StyledLi>
                <StyledLi>
                  <a
                    href="https://www.facebook.com/studioimbastaro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook size="1.6rem" />
                  </a>
                </StyledLi>
              </StyledUl>
            </LinkContainer>

            <AddressContainer>
              <p>
                <b>Indirizzo:</b>
              </p>
              <p>Via Tiburtina Valeria, 80</p>
              <p>65122 Pescara (PE) - Italia</p>
              <p>
                <b>P.Iva</b> 02132540689
              </p>
              <br />
              <p>
                <b>Email:</b>{" "}
                <a
                  href="mailto:info@studioimbastaro.it"
                  title="Invia una email allo Studio Imbastaro"
                >
                  info@studioimbastaro.it
                </a>
              </p>
              <p>
                <b>Tel:</b> <a href="tel:+390852044410">(+39) 085 2044410</a>
              </p>
              <p>
                <b>Mobile:</b> <a href="tel:+393343724858">(+39) 334 3724858</a>
              </p>
            </AddressContainer>
          </FooterLink>
          <SubscribeContainer>
            <Title>Resta in contatto con noi</Title>
            <InfoText>
              Richiedi informazioni sui nostri servizi o chiedi un incontro con
              il nostro team di esperti, sarai ricontattato entro breve tempo.
            </InfoText>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Inserisci il tuo nome."
                value={form.name}
                onChange={handleChange}
                required
              ></Input>
              <Input
                type="email"
                name="email"
                placeholder="Inserisci il tuo indirizzo email."
                value={form.email}
                onChange={handleChange}
                required
              ></Input>
              <Input
                type="text"
                placeholder="Inserisci il tuo messaggio."
              ></Input>

              <BtnSend>Invia</BtnSend>
              <ReCAPTCHA
                sitekey={GOOGLE_RECAPTCHA_KEY}
                size="invisible"
                ref={recaptchaRef}
              />
              <p>{status}</p>
            </form>
          </SubscribeContainer>
        </FooterFlexContainer>

        <LastFooterContainer>
          <InfoContainer>
            <InfoText>STUDIO DI PROGETTAZIONE IMBASTARO </InfoText>
            {/* - Via Tiburtina 123, 65129 Pescara */}
          </InfoContainer>
          <InfoContainer>
            <InfoText>
              <a href="tel:+390852044410">Tel.+39 085 2044410</a> -{" "}
              <a href="mailto:info@studioimbastaro.it">
                info@studioimbastaro.it
              </a>
            </InfoText>
          </InfoContainer>
        </LastFooterContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
