import React from "react";
import Layout from "components/layout"; // Import your layout component if you have one
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/member';

import dataImage from 'assets/images/features/data.png'
import programmingImage from 'assets/images/features/programing.png'
import careerImage from 'assets/images/features/career.png'
import educationImage from 'assets/images/features/education.png'

const data = [
    {
      id: 1,
      icon: dataImage,
      path: '#!',
      name: 'Dr.Max',
      title: 'Mentor, Ph.D.',
      description: `Our lectures provides you with the knowledge and skills needed to excel in today's fast-paced academic and professional environments.`,
    },
    {
      id: 2,
      icon: programmingImage,
      path: '#!',
      title: 'Tailored Projects to Ignite Your Passion',
      description: `Transform your interests into impactful projects with our customized programs. We offer cross-discipline exploration, enabling you to merge various fields of study.`,
      list: [
        "Project Based Learning",
        "Personalized Project",
        "Cross-Discipline",
        "Experts Guidance",
        "Research & Analysis",
        "Innovation & Creativity"
      ]
    },
    {
      id: 3,
      icon: educationImage,
      path: '#!',
      title: 'Academic Networking',
      description: "Overwhelmed by Major Choices? Curious About Academic Paths? We connect you to the best experts in the field!",
      list: [
        "Reference Letter",
        "Career Counseling",
        "Mentorship Program",
        "Networking Events",
        "University Picks",
        "Academic Seminars"
      ]
    },
    {
      id: 4,
      icon: careerImage,
      path: '#!',
      title: 'Portfolio Building',
      description: `Enhance your academic and professional profile with our comprehensive portfolio building services.`,
      list:[
        "Personal Websites",
        "LinkedIn Portfolio",
        "Mock Interviews",
        "Resume Writing",
        "Professional Branding"
      ]
    },
  ];

const TeamPage = () => (
  <Layout>
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
  </Layout>
);

export default TeamPage;


const styles = {
    section: {
      backgroundColor: '#F9FBFD',
      pt: [18, null, null, 17, null, null, 0],
      pb: [12, null, null, 12, 7, 11, 0],
    },
    contentWrapper: {
        pt: 20
      },
    heading: {
        marginBottom: [7, null, null, 8, 7],
        alignContents:'center',
        textAlign:'center',
        p: {
          maxWidth: 490,
          margin: ['10px auto 0'],
        },
      },
    grid: {
      gap: [6, null, 0],
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
      borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
      borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    },
  };