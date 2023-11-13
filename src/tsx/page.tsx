import { Component } from "preact";
import '../css/page.css'
import { Timeline } from "./components/timeline";

export class Page extends Component<{}, {}> {
    
    render()
    {
        return <div className={"Page_root"}>
            <div className={"Page_intro"}>
                <div className={"Page_introName"}>Autumn Waller</div>
                <div className={"Page_introRole"}>Programmer</div>
                <div className={"Page_introDesc"}>{'Welcome to my portfolio website. I’m a programmer with experience in different roles within games such as UI, game programming, and build engineering.'}</div>
            </div>
            <div className={"Page_skills"}/>
            <Timeline/>
        </div>
    }
}