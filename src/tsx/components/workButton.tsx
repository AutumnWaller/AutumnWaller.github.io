import { Component } from "preact";
import '../../css/workButton.css'

type Props = {
    companyName: string,
    year: string,
    jobRole: string,
    jobDescription: preact.VNode,
    link: string,
    image?: string,
    imageTwo?: string,
    imageThree?: string,
    imageFour?: string,
}

export class WorkButton extends Component<Props, {}> {
    render() {
        return <div className={"WorkButton_root"}>
            <div className={"WorkButton_imageBox"}>
                <div className={"WorkButton_imageBoxHor"}>
                    <div className={"WorkButton_image"} style={{backgroundImage: `url('${this.props.image ?? ""}')` }}></div>
                    { this.props.imageTwo &&
                    <div className={"WorkButton_image"} style={{backgroundImage: `url('${this.props.imageTwo ?? ""}')` }}></div>
                    }
                </div>
                { this.props.imageThree &&
                    <div className={"WorkButton_imageBoxHor"}>
                    { this.props.imageThree &&
                        <div className={"WorkButton_image"} style={{backgroundImage: `url('${this.props.imageThree ?? ""}')` }}></div>
                        }
                        { this.props.imageFour &&
                        <div className={"WorkButton_image"} style={{backgroundImage: `url('${this.props.imageFour ?? ""}')` }}></div>
                        }
                    </div>
                }
            </div>
            <div className={"WorkButton_textBox"}>
                <div className={"WorkButton_title"}>{this.props.companyName}, {this.props.year}</div>
                <div className={"WorkButton_subtitle"}>{this.props.jobRole}</div>
                <div className={"WorkButton_text"}>{this.props.jobDescription}</div>
            </div>

        </div>
    }

}