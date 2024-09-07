import React from "react";
import Layout from "components/layout"; // Import your layout component if you have one
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/member';

import dataImage from 'assets/images/features/data.png'
import programmingImage from 'assets/images/features/programing.png'
import careerImage from 'assets/images/features/career.png'
import educationImage from 'assets/images/features/education.png'
import maxJ from 'assets/images/features/max.png'
import stevenL from 'assets/images/features/steven.png'
import xinyiL from 'assets/images/features/xinyi.png'
import clintJ from 'assets/images/features/clint.png'


const data = [
    {
      id: 1,
      icon: maxJ,
      path: '#!',
      name: 'Dr. Max',
      title: 'Founder, Mentor, Researcher',
      description: `Dr. Max is an experienced research scientist specializing in computer science, AI, machine learning, 
                    and data science. He holds an Honours Bachelor of Science from the University of Toronto, with a 
                    double major in Computer Science and Statistics, followed by a direct-entry Ph.D. in Industrial Engineering, 
                    focusing on autonomous driving and driver mental workload prediction. Dr. Max has worked as a research 
                    scientist for companies like Sun Life, Huawei, and Environics Analytics. He is passionate about turning 
                    real-world problems into research and publications. With over four years of teaching assistant experience at 
                    UofT, he has supported courses in statistics, mathematics, AI, and computer science. Additionally, he has mentored
                    high school students for 6+ years, leading them in data and mathematics competitions and helping them gain 
                    admission to top-tier STEM programs.`,
      // email: 'max.jiang@fasttrackacademy.net',
      // linkedin: 'https://www.linkedin.com/in/haoyan-jiang/'
    },
    {
      id: 2,
      icon: xinyiL,
      name: 'Xinyi',
      path: '#!',
      title: 'Mentor, Head of STEM Mentor',
      description: `Xinyi is a skilled software developer with a strong foundation in computer science and engineering. She holds a 
                    Master of Engineering in Electrical and Computer Engineering, and a Bachelor of Science in Computer Science, both 
                    from the University of Toronto. With four years of experience as a 
                    full-stack software developer, she has developed expertise in a range of programming languages and frameworks, 
                    including Java, JavaScript, Python, React, and Redux. Her technical expertise is complemented by her teaching 
                    assistant experience at the University of Toronto, where she supported programming courses and mentored students 
                    in their coding journey. Xinyi is passionate about leveraging her knowledge to create innovative software 
                    solutions that address real-world challenges.`,
      // linkedin: 'https://www.linkedin.com/in/xinyi-l-505647b9/'
    },
    {
      id: 3,
      icon: stevenL,
      path: '#!',
      name: 'Steven',
      title: 'Career Counselor, Marketing Director',
      description: `Steven is a seasoned brand management professional, graduated from Western University’s business program with a 
                    specialization in Consumer Behaviour and Marketing. His 5+ years of experience spans across managing corporate 
                    media programs, building talent brand strategies and managing high-profile global campaigns. Steven is also an 
                    expert in building professional brand and have helped many industry leaders and C-suite executives to strength 
                    their social impact on LinkedIn. Besides his passion toward marketing, Steven is always getting involved in 
                    campus events, sharing his career journey & insights with students, and providing guidance to help build their 
                    professional path.`,
      // linkedin:'https://www.linkedin.com/in/stevenbinghuiliu/'
    },
    {
      id: 4,
      icon: clintJ,
      path: '#!',
      name: 'Clint',
      title: 'Career Counselor, Business Development',
      description: `Clint is a dedicated investment banker with a Chartered Professional Accountant designation. He attended 
                    Columbia International College in Hamilton and earned his bachelor’s degree in Business Management and 
                    Organization Studies from Western University. Clint brings a wealth of experience from the education sector. 
                    As the former Vice President of Events for a local educational company in London, Ontario, he successfully 
                    organized multiple events that attracted thousands of students. His enthusiasm for education extends to engaging 
                    students from all backgrounds, providing them with meaningful and impactful experiences. Clint leverages his 
                    expertise to expand the organization’s impact and make meaningful collaborations happen with educational 
                    institutions.`,
      // linkedin: 'https://www.linkedin.com/in/clint-jin-53340711b/'
    },
  ];

const Team = () => (
    <section id='team' sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
            <SectionHeading
                sx={styles.heading}
                title="Our Team"
                />
                <Box sx={styles.grid}>
                {data?.map((item) => (
                    <TeamMember className="feature-item" key={item.id} data={item} />
                ))}
            </Box>
        </Box>
      </Container>
    </section>
);

export default Team;


const styles = {
  section: {
    backgroundColor: 'white', // Ensure the background is white on all devices
    pt: [18, null, null, 17, null, null, 0],
    pb: [12, null, null, 12, 7, 11, 0],
  },
  contentWrapper: {
    pt: 10
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    alignContents: 'center',
    textAlign: 'center',
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    backgroundColor: 'white', // Ensure the background is white on all devices
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
    ],
  },
};
