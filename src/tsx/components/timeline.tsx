import { Component } from "preact";
import '../../css/timeline.css'

export class Timeline extends Component<{}, {}> {
    render() {
        return <div className={"Timeline_root"}>
            <div className={"Timeline_header"}>Experience</div>
            <div className={"Timeline_vLine"}/>

            <div className={"Timeline_dateEvent"}>
                <div className={"Timeline_circle"}/>
                <div className={"Timeline_hLine"}/>
                <div className={"Timeline_year"}>2019</div>
            </div>
        </div>
    }
}