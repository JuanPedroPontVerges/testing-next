import React from "react"
import ScrollToTop from "./ScrollToTop";
import Nav from '@/components/Nav';
import Footer from "./Footer";

const Layout: React.FC<any> = (props) => {
    return (
        <div className="h-screen">
            <Nav />
            <main>
                {props.children}
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Layout;