import { Component } from "preact";
import '../../css/socialLinks.css'

export class SocialLinks extends Component<{}, {}> {
    render(){
        return <div className={"SocialLinks_root"}>
            <a href={"https://www.linkedin.com/in/daniel-waller/"}>
                <div className={"SocialLinks_linkedIn"}></div>
            </a>
            <a href={"https://github.com/AutumnWaller"}>
                <div className={"SocialLinks_github"}></div>
            </a>
        </div>
    }
}