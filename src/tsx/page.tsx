import { Component } from "preact";
import '../css/page.css'
import { GridButton } from "./components/gridButton";

export class Page extends Component<{}, {}> {
    
    render()
    {
        return <div className={"Page_root"}>
            <div className={"Page_title"}>
                Placeholder Title
            </div>
            <GridButton/>
        </div>
    }
}