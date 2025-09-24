import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { StateContext } from "../StateProvider";
// import { AiOutlineShopping } from 'react-icons/ai';
import { FaBars } from "react-icons/fa";
import {
  Navbar,
  Logo,
  // Title,
  // LinkContainer,
  Span,
  StyledStudioLogo,
  // Btn,
  // A,
} from "./heroSectionELements";
import { /* useLocation, useParams, */ Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
// import { Link as InternalLink } from "react-scroll";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
    to: "",
  },
  {
    id: 1,
    navTitle: "Progetti",
    to: "/progetti",
  },
  {
    id: 2,
    navTitle: "Clienti",
    to: "/clienti",
  },
  {
    id: 3,
    navTitle: "Contatti",
    to: "/contatti",
  },
];

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const {
    navbarOver,
    setNavbarOver /* , cart, setShowCart, setChangeTitle */,
  } = useContext(StateContext);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(false);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* const handleShowCart = (e) => {
    e.preventDefault();

    setShowCart(true);
  }; */

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  console.log(
    REACT_APP_API_URL,
    import.meta.env.VITE_REACT_APP_API_URL,
    "REACT_APP_API_URL --- Navbar"
  );
  // const fadeInStart = { opacity: 0 };
  // const fadeInEnd = { opacity: 1 };
  // const fadeInTransition = { duration: 1 };
  return (
    <>
      <Navbar
        scrolled={scrolled}
        onover={navbarOver}
        onMouseOver={() => {
          setNavbarOver(true);
        }}
      >
        <Logo>
          {/* <StyledStudioLogo /> */}
          <Link
            to={""}
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            onClick={() => setMobileNavOpen(false)}
          >
            <AnimatedLogo />
          </Link>
        </Logo>
        <motion.nav
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
          {/* <div className="logo-container">
            <motion.h1 variants={hideNavItemsVariant}>Design Agency</motion.h1>
          </div> */}
          <div className="menu-container">
            <motion.div
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}
            >
              <Span>
                <FaBars />
              </Span>
            </motion.div>
          </div>
          <motion.div variants={mobileMenuVariant} className="mobile-menu">
            <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
            >
              chiudi
            </motion.button>
            <StyledStudioLogo />
            <motion.ul variants={ulVariant}>
              {MOBILE_NAV_ITEMS.map((navItem) => (
                <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                  <motion.div variants={liVariant}>
                    <Link
                      className="menu-item"
                      activeClass="active"
                      //to={`${REACT_APP_API_URL}${navItem.to}`} //"facts"
                      to={navItem.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={300}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {navItem.navTitle}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInVariant} className="socials">
              <a
                href="https://www.linkedin.com/in/studio-tecnico-ingegnere-imbastaro-a162362b3/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size="1.6rem" />
              </a>

              <a
                href="https://www.instagram.com/studio.ing.imbastaro/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size="1.6rem" />
              </a>

              <a
                href="https://www.facebook.com/studioimbastaro/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook size="1.6rem" />
              </a>
            </motion.div>
            <motion.div variants={fadeInVariant} className="contact">
              <h5>STUDIO TECNICO IMBASTARO</h5>
              <p>di Ing. Pierfranco Imbastaro</p>
              <p>Via Tiburtina Valeria, 80</p>
              <p>65122 Pescara</p>
              <br />
              <a href="tel:+390852044410" title="Telefono Studio Imbastaro">
                Tel 085 2044410
              </a>
              <a
                href="tel:+393343724858"
                title="Numero Telefono Ing. Pierfranco Imbastaro"
              >
                Tel 334 3724858
              </a>
              <a
                href="mailto:info@studioimbastaro.it"
                title="info@studioimbastaro.it"
              >
                info@studioimbastaro.it
              </a>
            </motion.div>
          </motion.div>
        </motion.nav>
      </Navbar>
    </>
  );
};

export default NavBar;
