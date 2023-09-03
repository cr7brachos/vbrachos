// It works like the main component. It uses the Header and the Footer
// and then utilizes the Outlet component to show anyhting inside

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


const MainCell = () => {
    return (
        <div>
          <Header />
          <Outlet />
          <Footer />  
        </div>
    )
}

export default MainCell;