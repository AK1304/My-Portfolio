import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/footerComponent";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import ContactScreen from "./screens/ContactScreen";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Router>
            <Layout className="mainLayout">
                <Header>
                    <HeaderComponent />
                </Header>
                <Content>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/portfolio" component={PortfolioScreen} />
                    <Route path="/contact" component={ContactScreen} />
                </Content>
                <Footer>
                    <FooterComponent />
                </Footer>
            </Layout>
        </Router>
    );
}

export default App;
