import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { CardMedia, Container } from "@mui/material";
import ContactsMenu from "../../components/ContactsMenu/ContactsMenu";

const HomePage = () => {
  const isLogged = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <CardMedia
        alt="login-please"
      />
      {!isLogged && <ContactsMenu />}
    </Container>
  );
};

export default HomePage;
