import { Component } from "preact";
import '../../css/timeline.css'

export class Timeline extends Component<{}, {}> {
    render() {
        return <div className={"Timeline_root"}>
            <div className={"Timeline_header"}>Experience</div>
            <div className={"Timeline_vLine"}/>
            <div className={"Timeline_jobs"}>
                <JobDetails
                companyName="Company"
                jobTitle="Job Title"
                jobDescription="Job Description"
                year="2019"
                />
                                {/* <JobDetails
                companyName="Company 2"
                jobTitle="Job Title 2"
                jobDescription="Job Description 2"
                year="2020"
                /> */}
            </div>
            <div className={"Timeline_job"}>
                <div className={"Timeline_company"}>Company</div>
                <div className={"Timeline_role"}>Role</div>
                <div className={"Timeline_description"}>Description</div>
           </div>
        </div>
    }
}


type JobDetailsProps = {
    companyName: string,
    jobTitle: string,
    jobDescription: string,
    year: string
}

class JobDetails extends Component<JobDetailsProps, {}> {
    render(props: JobDetailsProps){
        return <div className={"JobDetails_root"}>

        <div className={"JobDetails_job"}>
            <div className={"JobDetails_companyName"}>
                {props.companyName}
            </div>
            <div className={"JobDetails_jobTitle"}>
                {props.jobTitle}
            </div>
            <div className={"JobDetails_jobDescription"}>
                {props.jobDescription}
            </div>
        </div>
        <div className={"JobDetails_yearLabel"}>
            <div className={"JobDetails_circle"}/>
            <div className={"JobDetails_hLine"}/>
            <div className={"JobDetails_year"}>{props.year}</div>
        </div>
    </div>
    }
}