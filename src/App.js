import { Footer } from "./somecomponents/Footer/Footer";
import { Header } from "./somecomponents/Header/Header";
import { Introduction } from "./somecomponents/Introduction/introduction";
import { OurClients } from "./somecomponents/OurClients/OurClients";
import { OurTeam } from "./somecomponents/OurTeam/";
import { OurServices } from "./somecomponents/OurServices";

export const App = () => {
  return (
    <div>
        <Header />
        <Introduction />
        <OurServices />
        <OurClients />
        <OurTeam />
        <Footer />
    
    </div>
  );
};

export default App;
