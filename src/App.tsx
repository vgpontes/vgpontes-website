import React, { useEffect, useState } from 'react';
import VictorNavbar from "./components/VictorNavbar";
import "./images/banner.jpg";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import Block from "./components/Block";
import BlockItem from "./components/BlockItem";
import ListItem from "./components/ListItem";
import {ListItemProps} from "./components/ListItem";
import Social from "./components/Social";

function App() {
    const description =
        <p>Hi, I'm Victor and I am a Software Engineer.
            <p>
                I am a recent Computer Science graduate from Arizona State University who is passionate about software
                engineering. I previously interned at Amazon where I worked on automating the installation and updating
                of Stata, a data science tool, in AWS SageMaker for the Research Science team.
                <p>In my free time, I enjoy watching movies, playing video games, and lots of ping-pong.
                    {String.fromCodePoint(0x1F3D3)}
                </p>
            </p>
        </p>

    const amazonListItemProps : ListItemProps = {
        items: [
            "Designed and implemented the automated integration, installation, testing, and updating of Stata on a " +
            "custom AWS SageMaker image",
            "Reduced Docker image size by 35% resulting in faster pulling and uploading to AWS ECR",
            "Collaborated with stakeholders to gather requirements and resolve ambiguities",
            "Built package and defined CI/CD Pipeline for Research Science team to automate deployment and testing " +
            "through ALPHA, BETA, and PROD stages",
            "Documented configuration, licensing, and testing procedures to facilitate handover of project after " +
            "internship",
            "Contributed towards code involved in VP-level goal outside of project scope",
            "Worked in an Agile framework, participating in daily stand-up meetings and biweekly Sprint meetings, " +
            "fostering collaboration and iterative development"
        ]
    }

    const amazonListItems = <ListItem {...amazonListItemProps}/>

    const amazonBlockItem = <BlockItem itemHeading={"Amazon Propel Intern"}
                                       itemDate={"May 2023 - Aug. 2023"} itemCompany={"Amazon"}
                                       itemLocation={"Seattle, WA"} itemList={amazonListItems}/>;

    const srpListItemProps : ListItemProps = {
        items: [
            "Monitored critical systems and devices",
            "Called out to support groups or device owners when services were down or alarming",
            "Ran batch jobs, managed devices, and other operations that are requested to the Data Center",
            "Took overflow calls from the Support Desk, providing excellent troubleshooting and problem-solving to " +
            "internal customers"
        ]
    }

    const srpListItems = <ListItem {...srpListItemProps}/>

    const srpBlockItem = <BlockItem itemHeading={"Data Center Operations Intern"}
                                       itemDate={"Sep. 2022 - Apr. 2023"} itemCompany={"Salt River Project"}
                                       itemLocation={"Tempe, AZ"} itemList={srpListItems}/>;

    const experienceList = [amazonBlockItem, srpBlockItem]

    const stataProjectProps : ListItemProps = {
        items: [
            "Developed a package to automatically integrate Stata into AWS SageMaker for the Research Science team",
            "Used AWS CDK in TypeScript to deploy CodePipeline infrastructure and Stata Package to AWS account in S3 " +
            "Bucket",
            "Managed and handled licensing requirements in a secure fashion by using AWS SecretsManager to safely store " +
            "Stata license key",
            "Created secure IAM Roles with controlled permissions tailored to specific functions",
            "Wrote automated unit testing in Python to ensure Stata and PyStata works in Docker container",
            "Used secure encrypted constructs for storage of CodePipeline artifacts and Stata package in S3 Buckets"
        ]
    }

    const stataListItems = <ListItem {...stataProjectProps}/>

    const stataProjectItem = <BlockItem itemHeading="Stata On SageMaker" itemCompany="AWS CDK, TypeScript,
                                        Docker, AWS Suite, Bash, Python" itemDate="May 2023 - Aug. 2023"
                                        itemList={stataListItems}/>

    const javaFxProjectProps : ListItemProps = {
        items: [
            "Collaborated with two Computer Science students to develop a restaurant takeout application",
            "Designed an efficient back-end system in Java and user-friendly user interface with JavaFX",
            "Implemented user creation and deletion and integrated menu management capabilities",
            "Worked in an Agile framework, ensuring efficiency and adaptability"
        ]
    }

    const javaFxListItems = <ListItem {...javaFxProjectProps}/>

    const javaFxProjectItem = <BlockItem itemHeading="Restaurant JavaFX Application" itemCompany="Java,
                                            JavaFX, Git" itemDate="Jan 2022 - May 2022" itemList={javaFxListItems}/>

    const arduinoProjectProps : ListItemProps = {
        items: [
            "Led a small team of Computer Science students as the Programming Team Lead",
            "Worked closely with team members to define project goals and requirements",
            "Developed a timer with dynamic functionality, allowing users to increase or decrease time duration during runtime",
            "Collaborated with Circuits team to make code fit Arduino and circuitry demands"
        ]
    }

    const arduinoListItems = <ListItem {...arduinoProjectProps}/>

    const arduinoProjectItem = <BlockItem itemHeading="Arduino Based Timer" itemCompany="C++, Arduino IDE"
                                          itemDate="Oct. 2021 - Nov. 2021" itemList={arduinoListItems}/>

    const projectList = [stataProjectItem, javaFxProjectItem, arduinoProjectItem]

    const [isBannerRendered, setIsBannerRendered] = useState(false);

    useEffect(() => {
        // Set the flag to true after the first component has fully rendered
        setIsBannerRendered(true);
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className="App">
            <header className="App-header">
                <VictorNavbar/>
                <Banner onRender={() => setIsBannerRendered(true)}/>
                {isBannerRendered && (
                    <>
                        <Block blockTitle="About Me" blockId="aboutme" blockElement={description}/>
                        <Block blockTitle="Experience" blockId="experience" blockElement={experienceList}/>
                        <Block blockTitle="Projects" blockId="projects" blockElement={projectList}/>
                        <Block blockTitle="Social" blockId="social" blockElement=<Social/> dark={true}/>
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
