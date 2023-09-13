import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Thapar University, Patiala, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree in Software Engineering
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2018 - July 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern at Wipro
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune, India
          </h4>
          <p>Developed a desktop application to compare and analyze CSV files using Python</p>
          <p>Worked on automating daily tasks using python scripts</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" July 2018 - Jan 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer, PartsAvatar 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gurgaon, India
          </h4>
          <p>
            Implemented 5 new features in webapp used by Fulfillment Associates.
          </p>
          <p>
            Implemented optimal database normalization techniques to standardize the database structure. 
          </p>
          <p>
            Migrated legacy codebase of category page of automative ecommerce.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 - July 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer 2, PartsAvatar 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gurgaon, India
          </h4>
          <p>
           Integrated new payment methods(Sezzle, Apple Pay and google pay) from scratch and deploying till production in the website improving the checkout flow which were 25% of all checkout traffic.
          </p>
          <p>
           Completed medium to large features independently api design, coding and testing of services till production.
          </p>
          <p>
            Migrated legacy codebase of category page of automative ecommerce.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2022 - Jan 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Engineer2 at Amazon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Banglore, India
          </h4>
          <p>
           Migrated two customer impacting services to JDK11 version and new Amazon hosts, improving price to performance ratio by 40%.
          </p>
          <p>
           Prepared services for Black friday event with over 20+ billion requests worldwide.
          </p>
          <p>
            Reduced the deployment time of the service by 25% leading to faster rollback times.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2022 - Jan 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Engineer2 at Amazon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vancouver, Canada
          </h4>
          <p>
           Identified and solved a legacy feature gap in the data pipeline leading to improved business metrics and collaborated across various teams. 
          </p>
          <p>
          Leading and building a migration project involving a critical legacy distributed system in Payments to new architecture which serves billions of customers. 
          It requires focus on non-functional requirements like availability and latency to ensure the end-user experience did not regress.
          </p>
          <p>
           Working on implementing customer based throttling on the service to reduce bot attacks on the service.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
