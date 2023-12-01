import { Component } from "preact";
import '../css/page.css'
import { Timeline } from "./components/timeline";
import { Work } from "./components/work";

export class Page extends Component<{}, {}> {
    
    render()
    {
        return <div className={"Page_root"}>
            <div className={"Page_intro"}>
                <div className={"Page_introName"}>Autumn Waller</div>
                <div className={"Page_introRole"}>UI Programmer</div>
                <div className={"Page_introDesc"}>{'Welcome to my portfolio website. I’m a programmer with experience in different roles within games such as UI, game programming, and build engineering. Be wary that this website is a work-in-progress so not everything is covered here and things do not look ideal in certain places.'}</div>
            </div>
            <div className={"Page_workHistory"}>Work History</div>
            <Work/>
            {/* <Timeline/> */}
        </div>
    }
}