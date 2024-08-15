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
      title: 'Mentor, Researcher',
      description: `Our lectures provides you with the knowledge and skills needed to excel in today's fast-paced academic and professional environments.`,
      email: 'max.jiang@fasttrackacademy.net',
      linkedin: 'https://www.linkedin.com/in/haoyan-jiang/'
    },
    {
      id: 2,
      icon: xinyiL,
      name: 'Xinyi',
      path: '#!',
      title: 'Mentor, Technical Consultant',
      description: `Transform your interests into impactful projects with our customized programs. We offer cross-discipline exploration, enabling you to merge various fields of study.`,
      linkedin: 'https://www.linkedin.com/in/xinyi-l-505647b9/'
    },
    {
      id: 3,
      icon: stevenL,
      path: '#!',
      name: 'Steven',
      title: 'Career Coach, Marketing Guru',
      description: "Overwhelmed by Major Choices? Curious About Academic Paths? We connect you to the best experts in the field!",
      linkedin:'https://www.linkedin.com/in/stevenbinghuiliu/'
    },
    {
      id: 4,
      icon: clintJ,
      path: '#!',
      name: 'Clint',
      title: 'Career Coach, Financial Specialist',
      description: `Enhance your academic and professional profile with our comprehensive portfolio building services.`,
      linkedin: 'https://www.linkedin.com/in/clint-jin-53340711b/'
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
      // borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
      // borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    },
  };