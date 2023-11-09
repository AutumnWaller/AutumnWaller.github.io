import { Component} from "preact";
import "../../css/gridButton.css"

export type GridButtonProps = 
{
    title: string,
    subtitle: string,
    backgroundImage: string,
}

export class GridButton extends Component<GridButtonProps, {}>{
    render(props: GridButtonProps){
        return <div className={"GridButton_root"}>
            <div className={"GridButton_title"}>{props.title}</div>
            <div className={"GridButton_subtitle"}>{props.subtitle}</div>
        </div>
    }
}