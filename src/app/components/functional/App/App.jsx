import { Outlet } from "react-router";
import Footer from "../../design/Footer/Footer";
import Header from "../../design/Header/Header";


const App = () => {
 
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;