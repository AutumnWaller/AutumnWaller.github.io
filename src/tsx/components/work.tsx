import { Component } from "preact";
import '../../css/work.css'
import { WorkButton } from "./workButton";

export class Work extends Component<{}, {}> {
    render() {
        return <div className={"Work_root"}>
            <WorkButton
                companyName="Frontier Developments"
                year="2023"
                jobRole="Graduate UI Developer"
                jobDescription={<div> 
                                <p>I worked on the RTS game Warhammer Age of Sigmar: Realms of Ruin. </p>
                                <p>in this role I created UI components and pages using Typescript and SASS, using the middleware solution
                                Coherant Gameface. The work was done in Frontier Developments' proprietary game engine. </p>
                                <p>My largest contribution to the game was the Conquest game mode which involved a world for the player
                                to conquer shown on a map screen with various randomly generated nodes which acted as battles against the AI.
                                The work was split between the map screen, the frontend, and some in-game elements such as the pause screen.</p>
                                <p>I also worked on other parts of the game such as the DLC frontend screen and some in-game elements such as the 
                                boss health bar.</p>
                                <p>The work was created collaboratively with designers and the gameplay developers to make sure the data, events, and the UI look and feel was
                                correct.</p>
                                <p>One of the challenges was dealing with translated text. I needed to make sure that the text was translated, using the data from the localisation team. This proved
                                a bit challenging at times when trying to get long words such as in German to fit within the components. Logographic
                                languages were also challenging. </p> </div>
                                }
                link={"https://store.steampowered.com/app/1844380/Warhammer_Age_of_Sigmar_Realms_of_Ruin/"}
                image="RoR/RoR.jpg"
                imageTwo="RoR/RoR_ConquestStart.jpg"
                imageThree="RoR/RoR_ConquestMain.jpg"
                imageFour="RoR/RoR_ConquestMap.jpg"
            />
                        <WorkButton
                companyName="Frontier Developments"
                year="2022"
                jobRole="Graduate Build Engineer"
                jobDescription={ <div>"I worked to create and maintain the build pipelines, primarily for the RTS game Warhammer Age of Sigmar: Realms of Ruin
                                in my role I would monitor the build pipelines to make sure the builds were going out on time and if they weren't, I would 
                                investigate and let the developers know what has caused the issue.
                                I also worked with the test development team to add tests for the game, making sure that they run without errors.
                                My work was primarily within Team City but on some occasions I had to work with Python to make scripts aiding in the build steps.
                                "</div>}
                link={"https://store.steampowered.com/app/1844380/Warhammer_Age_of_Sigmar_Realms_of_Ruin/"}
                image="RoR/RoR.jpg"
            />
            <WorkButton
                companyName="Lockwood Publishing"
                year="2021-2022"
                jobRole="Software Engineer"
                jobDescription={<div><p>I worked in the R&D department within Lockwood, using the Unity engine to develop new features for the mobile game "Avakin Life"</p>
                                <p>These new features usually involved a mix of different elements such as shader programming, UI, and general C# programming.
                                    I helped push ideas forward that would improve the base game and worked with other team members to create new features.
                                </p>
                                </div>}
                link={"https://avakin.com/"}
                image="avakin.png"
            />
            <WorkButton
                companyName="Unity Technologies"
                year="2019-2020"
                jobRole="Software Development Support Intern"
                jobDescription={<div>
                                <p>While working at Unity, my job was to help enterprise customers of the engine with their issues regarding the engine </p>
                                <p>This would involve taking and responsing to tickets, reproducing their issues which would occasionally involve grabbing their project's source code,
                                    and then find a solution for them to use in the short time while notifying the engine developers of the issue.
                                    I would then notify them when the issue has been solved. </p>
                                    <p>On occasion I would need to build and debug the source of the Unity engine to figure out the causes of certain issues. I would also be inspecting C# scripts
                                        and using different devices to figure out issues. These devices ranged widely from PS4 and Xbox One to PC, Android, iOS, and also some stranger hardware such as
                                        mixed reality headsets.</p>
                                        <p>Halfway through my internship I was moved onto the console team to experience that side of things. This meant learning to use the different development
                                            kits and the associated tools.
                                        </p>

                </div>}
                link={"https://unity.com/"}
                image="Icons/Unity.png"
            />

        </div>
    }
}