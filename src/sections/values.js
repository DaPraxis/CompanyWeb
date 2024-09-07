/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import support from 'assets/images/support.png';

const list = [
  'Lectures + Project',
  '20-Hour Program',
  'Customized Topic',
  'Ph.D. Guidance',
];

const Values = () => {
  const data = useStaticQuery(graphql`
    query {
      support: file(relativePath: { eq: "values 3.png" }) {
        publicURL
      }
    }
  `);
  console.log(support);
  return (
    <Box as="section" sx={styles.section} id='value'>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Our Story
            </Heading>
            <Text as="p" sx={styles.summary}>
            While teaching at UofT, Dr. Max identified key gaps between university and high school Computer Science curricula, as well as the need to improve students' mindsets and self-learning skills. With a strong desire to bridge this gap, <span style={{ color: '#5271FF' }}><strong>FastTrack</strong></span> was born.
            </Text>
            <Text as="p" sx={styles.summary}>
            Here, we don't just teach you the fundamentals of computer science—we show you what you can build with the skills you've learned.
            </Text>
            <Text as="p" sx={styles.summary}>
            <em> -- We help you fast-track your journey; this is just the start of what you can achieve.</em>
            </Text>

            {/* <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid> */}
          </Box>
          <Box sx={styles.illustration}>
            <img
              src={data.support.publicURL}
              alt="support"
              style={{ maxWidth: '100%',  height: 'auto'}}
            />
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Values;

const styles = {
  section: {
    pt: [8, 8, 18, 16, null, 20],
    pb: [null, null, null, 8, 0],
    backgroundColor: 'white',
    // minHeight: [null, null, null, '100vh'], // Use 100vh on mobile, auto on larger screens
    '@media screen and (min-width: 1025px)': { // Only apply 100vh for screens larger than 1024px
      minHeight: '100vh',
    },
  },
  grid: {
    gap: [null, null, null, null, 1],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 689px'],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  title: {
    color: 'heading',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.53],
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 550,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    textIndent: ['10px', null, null,  null, '30px'],
    mb:['0px', null, null, null, '2px']
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
