import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeadings/ScreenHeading'
import ScrollServices from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" }
    ];

    //here we have
    const programmingSkillsDetails = [
        { skill: 'React Js', ratingPercentage: 85 },
        { skill: 'JavaScript', ratingPercentage: 85 },
        { skill: 'React Native', ratingPercentage: 70 },
        { skill: 'Express Js', ratingPercentage: 80 },
        { skill: 'Node Js', ratingPercentage: 85 },
        { skill: 'HTML', ratingPercentage: 85 },
        { skill: 'CSS', ratingPercentage: 80 }
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2021", toDate: "2022" },
            description: "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
            title: "Blocal Web app -A platform for ordering daily needs",
            duration: { fromDate: "2021", toDate: "2021" },
            description: "Blocal app is a ecommerce platform for ordering groceries and daily needs through online,\
            which can be delivered within 30 minutes with the distance less than 5km.",
            subHeading: "Front End – React Js, Backend – Node Js, Database - SQL",
        },
        {
            title: "Easykrishi",
            duration: { fromDate: "2021", toDate: "2020" },
            description: "It is an Integrated Footwear Company. Have been in the business of Manufacturing, Retail,\
             and Distribution of International and Domestic Fashion & Lifestyle Brands. It is recognised as the best \
             value innovation company in the Online Footwear Industry in India.",
            subHeading: "Front End - React Js, Backend - ExpressJs, Database - SQLDB",
        },



    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Sea College of Engineering and Technology, Karnataka"}
                subHeading={"Electronics and Communication Engineering"}
                fromDate={"2014"}
                toDate={"2018"} />
            <ResumeHeading
                heading={"Sree Venkateshwara PU College, Karnataka"}
                subHeading={"Science"}
                fromDate={"2012"}
                toDate={"2014"} />
            <ResumeHeading
                heading={"Sree Venkateshwara English High School, Karnataka"}
                subHeading={"SSLC"}
                fromDate={"2012"}
                toDate={"2011"} />
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Aitron ITC Ventures Pvt Ltd"}
                    subHeading={"Full Stack Developer"}
                    fromDate={"2019"}
                    toDate={"Present"} />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Currently working as MERN stack web and mobile developer and also an
                        online instructor on udemy.
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Developed an ecommerce website for client with the dashboard for
                        managing the products, managing reviews, users, payment etc. .
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Integrated the web app with backend services to create new user
                        onboarding application with dynamic form content.{" "}
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - I stretch my mental capacity to develope UI as per the given
                        designs.
                    </span>
                    <br />
                </div>
            </div>
        </div>,

        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /* Interests */
        // <div className="resume-screen-container" key="interests">
        //     <ResumeHeading
        //         heading="Teaching"
        //         description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
        //     />
        //     <ResumeHeading
        //         heading="Music"
        //         description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
        //     />
        //     <ResumeHeading
        //         heading="Competitive Gaming"
        //         description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
        //     />
        // </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div
            className="resume-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;