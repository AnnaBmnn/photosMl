import Head from "./Head";
import Header from "./Header";


const Layout = props => (
    <div>
        <Head />
        <Header />
        {props.children}
    </div>
);

export default Layout;
