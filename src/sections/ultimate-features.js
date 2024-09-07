/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import dataImage from 'assets/images/features/data.png'
import programmingImage from 'assets/images/features/programing.png'
import careerImage from 'assets/images/features/career.png'
import educationImage from 'assets/images/features/education.png'
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: dataImage,
    path: '#!',
    title: 'Stay Ahead with Our Ph.D.-Led Lectures',
    description: `Our lectures provides you with the knowledge and skills needed to excel in today's fast-paced academic and professional environments.`,
    list: [
      "Computer Science",
      "Machine Learning / AI",
      "Big Data",
      "Database",
      "Neural Network",

    ]
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
    description: "Overwhelmed by major choices? Curious about academic paths? We connect you to the best experts in the field!",
    list: [
      "University Picks",
      "Reference Letter",
      "Major Counseling",
      "Alumini Networking",
      "Academic Seminars"
    ]
  },
  {
    id: 4,
    icon: careerImage,
    path: '#!',
    title: 'Portfolio Building',
    description: `Start your professional career earlier than your peers. Enhance your academic and professional profile with our comprehensive portfolio building services.`,
    list:[
      "Personal Websites",
      "LinkedIn Portfolio",
      "Mock Interviews",
      "Resume Writing",
    ]
  },
];

const UltimateFeatures = () => {
  return (
    <section id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Ideal solutions for you"
          title="Services We Offer"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    // backgroundColor: '#F9FBFD',
    backgroundColor: 'white',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
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
      'repeat(2, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
