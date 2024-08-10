import LogoImage from "../../../Assets/logo.png";

/**
 * Represents the logo component.
 * Renders an image as a logo.
 * @returns {JSX.Element} The rendered logo component.
 */
const Logo = () => {
  return <img class="logo" src={LogoImage} alt="Logo" />;
};

export default Logo;