import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import LandingPageLogin from "../components/LandingPageLogin";
import LandingPage from "../components/LandingPage";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <>{user ? <LandingPageLogin /> : <LandingPage />}</>;
};

export default Home;
