
import About from '../About';
import Skills from '../Skills';
import Navigationbar from '../Navigationbar';
function Home(props) {
    return (
        <div className="home">
            <div className="header">
                <Navigationbar />
            </div>
            <div className="main">
                <About />

                <Skills />
            </div>
        </div>
            );
}
export default Home;