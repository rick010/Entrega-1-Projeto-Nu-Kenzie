import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const DefaultTemplate = ({ children }) => {
   return (
    <>
        <Header />
            <main>{children}</main>
        <Footer />
    </>
   )
};