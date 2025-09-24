import { ThemeProvider } from "styled-components";
// import PropTypes from "prop-types";
const theme = {
  colors: {
    white: "white",
    dark: "black",
  },

  fontSizes: {
    xSmall: "0.8rem",
    small: "1rem",
    medium: "1.6rem",
    large: "4rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

// Theme.propTypes = {
//   children: PropTypes.node.isRequired,
// };
export default Theme;
