import HomeComponent from './Components/HomeComponent';
import NavbarComponent from './Components/NavbarComponent';
import ProjectComponent from './Components/ProjectComponent';
import ExperienceComponent from './Components/ExperienceComponent';
import ContactComponent from './Components/ContactComponent';
import FooterComponent from './Components/FooterComponent';

export default function App() {
    return (
        <>
            <NavbarComponent />
            <div id="#">
                <HomeComponent />
            </div>
            <div id="project">
                <ProjectComponent />
            </div>
            <div id="experience">
                <ExperienceComponent />
            </div>
            <div id="contact">
                <ContactComponent />
            </div>
            <FooterComponent />
        </>
    );
}