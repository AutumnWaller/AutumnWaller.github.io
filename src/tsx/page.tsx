import { Component } from "preact";
import '../css/page.css'
import { ProjectContainer } from "./components/projectContainer";

export class Page extends Component<{}, {}> {
    
    render()
    {
        return <div className={"Page_root"}>
            <div className={"Page_header"}>
                <div className={"Page_headerBox"}>
                    <div className={"Page_headerText h3"}>
                        Autumn Waller
                    </div>
                    <div className={"Page_headerText"}>About Me</div>
                    <div className={"Page_headerText"}>Projects</div>
                    <div className={"Page_headerText"}>CV</div>
                    <div className={"Page_headerText"}>Contact</div>
                </div>
            </div>

            <div className={"Page_heading"}>About Me</div>
            <div className={"Page_textBox"}>
                <div className={"Page_aboutMe"}>
                I am Autumn, a programmer with experience in various areas within games. 
                I have been making games since I was in secondary school and discovered how to use Game Maker. Eventually, I went to study Game Design in college where
                I self-taught programming C# through Unity which led to me publishing my first two games on the Google Play Store: Dead of Knight and Bun Run.
                For both of these games, I worked with a friend, where he created the art and 3d models and I created the code.
                Following college, I was accepted into Staffordshire University where I achieved a first-class degree in Computer Games Programming. 
                Through University I learned C++, DirectX11, OpenGL, among other things. To be rewritten.
                </div>
            </div>
            <div className={"Page_heading"}>Projects</div>
            <ProjectContainer
                title={"[Redacted]"}
                subtitle={""}
                description={""}
                mainImage={"../assets/ror.jpg"}
            />

        </div>
    }
}