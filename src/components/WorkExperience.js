import React from 'react';
import { Paper, Typography,} from '@mui/material';

const WorkExperience = () => {
    return (
        <article id="work-experience">
            <Typography variant="h4" gutterBottom>Work Experience</Typography>

            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                <Typography variant="h6">IT Intern, ACC Rock Island</Typography>
                <Typography variant="subtitle1" color="textSecondary">May/2023 - Present</Typography>
                <ul>
                    <li>Utilized SQL for efficient data management, Python for automating tasks, and VBA and Macros for data sorting in Excel.</li>
                    <li>Developing scripts in Python to automate routine tasks, thereby improving overall operational efficiency.</li>
                    <li>Applying Java knowledge to contribute to software development projects.</li>
                    <li>Using VBA and Macros to automate and optimize data sorting tasks in Excel, a skill I learned during my tenure.</li>
                    <li>Collaborating with professionals on various projects to expand knowledge and skills in the field.</li>
                    <li>Participating in real-world projects and experiencing first-hand how operations are carried out within a professional environment.</li>
                </ul>
            </Paper>

            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                <Typography variant="h6">SERVICE LEADER, CHIPOTLE MEXICAN GRILL</Typography>
                <Typography variant="subtitle1" color="textSecondary">Aug/2017 - Present</Typography>
                <ul>
                    <li>Managed a team of employees as the youngest manager in the district, demonstrating exceptional leadership and organizational skills.</li>
                    <li>Enforced company policies, procedures, and safety protocols to maintain a safe and hygienic work environment for office and equipment.</li>
                    <li>Fostered positive relationships with new team members while supporting existing staff's career growth and development, creating a positive and safe workspace environment.</li>
                    <li>Delivered outstanding customer service while facilitating the onboarding and development of one team member per month.</li>
                    <li>Managed a team of six employees per shift and facilitated ongoing employee development, resulting in our store being recognized as the district's first certified training restaurant.</li>
                </ul>
            </Paper>
        </article>
    );
};

export default WorkExperience;
