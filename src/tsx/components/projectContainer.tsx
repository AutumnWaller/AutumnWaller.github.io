import { Component} from "preact";
import "../../css/projectContainer.css"
import { GridButton } from "./gridButton";

type Props = 
{
    title: string,
    subtitle: string,
    description: string,
    mainImage: string,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string,
}

export class ProjectContainer extends Component<Props, {}>{
    render(props: Props){
        return <div className={"ProjectContainer_root"}>
            <GridButton title={props.title}
            subtitle={props.subtitle}
            backgroundImage={props.mainImage} />
        </div>
    }
}