import { Footer } from "../mainParts/Footer";
import { NavBar } from "../mainParts/NavBar";
import { Body } from "../mainParts/body";
import { useSelector } from "react-redux";

function Home() {
  const color = useSelector((state: any) => state.page.value.color);
  const image = useSelector((state: any) => state.page.value.backgroundImage);

  const containerStyle = {
    backgroundImage: image
      ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${URL.createObjectURL(
          image
        )})`
      : undefined,
    backgroundSize: "cover",
    backgroundBlendMode: "darken",
  };

  return (
    <div
      className={`flex flex-col justify-between items-center min-h-[103vh] sm:min-h-[100vh] bg-${color}`}
      style={containerStyle}
    >
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
