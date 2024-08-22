/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SupportType from 'components/cards/support-type';
import Image from 'components/image';
import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Exclusive University Lab Tour ',
    text: `Gain exclusive access to university labs and witness cutting-edge research. Participate in personal talks with prominent professors and gain valuable insights.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Distinguished Seminars and Workshops',
    text: `Engage in seminars with guest lecturers and scholars from various universities and industrial fields. Workshops to enrich your skills.`,
  },
];

const Support = () => {
  const illustration = useStaticQuery(graphql`
    query {
      support: file(relativePath: { eq: "seminar.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <div sx={styles.grid}>
          <div sx={styles.content}>
            <div sx={styles.heading}>
              <Heading sx={styles.title}>
                Academic Networking: Explore, Connect, and Build Your Future!
              </Heading>
              <Text as="p" sx={styles.summary}>
              Immerse yourself in academic and professional growth. Enhance your journey with university tours and curated portfolio development.
              </Text>
            </div>
            {data.map((support) => (
              <SupportType key={support.id} data={support} />
            ))}
          </div>
          <Box as="figure" sx={styles.illustration} className="illustration">
            <img
              src={illustration.support.publicURL}
              alt="support"
              style={{ maxWidth: '100%',  height: 'auto'}}
            />
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Support;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 17],
    pb: [8, null, null, null, 10, 16],
    backgroundColor: 'white',
  },

  grid: {
    gap: [5, null, null, 10, 4],
    mx: 'auto',
    maxWidth: 1253,
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      null,
      '470px 1fr',
      '549px 1fr',
    ],
  },
  content: {
    display: [null, null, null, 'grid', 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(2, 1fr)', 'unset'],
  },
  heading: {
    gridColumn: [null, null, null, '1/3', 'unset'],
    maxWidth: [null, null, null, 420, 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    textAlign: ['center', null, null, 'left'],
    h2: {
      color: 'heading',
      fontFamily: 'headingAlt',
      fontSize: [4, null, 6, 8, null, null, 11],
      fontWeight: 500,
      lineHeight: [1.33, null, 1.4, 1.53],
      letterSpacing: ['-0.5px', null, null, '-1px'],
      textAlign: ['center', null, null, null, 'left'],
      span: {
        backgroundSize: 'cover',
        px: 2,
      },
      mb: 4,
    },
    p: {
      color: 'textSecondary',
      fontSize: ['13px', null, null, 2, '15px', 2],
      lineHeight: [1.86, null, null, null, 1.86, 2.25],
      // maxWidth: 470,
      m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
      textAlign: ['center', null, null, null, 'left'],
    },
  },
  illustration: {
    maxWidth:'910px'
  },
};
