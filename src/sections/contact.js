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

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      support: file(relativePath: { eq: "contact us.png" }) {
        publicURL
      }
    }
  `);
  console.log(support);
  return (
    <Box as="section" sx={styles.section} id='contact'>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <img
              src={data.support.publicURL}
              alt="support"
              style={{ maxWidth: '100%',  height: 'auto'}}
            />
            
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Get in Touch
            </Heading>
            <Text as="p" sx={styles.summary}>
            Experience our Project-Based Learning (PBL) program, where lectures and personal projects converge. Gain in-depth knowledge and apply it to create impressive deliverables. 
            By the end of the program, you'll have a completed project with academic rigor and aesthetic visualizations, such as a website or a report.
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

const styles = {
  section: {
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 2],
    backgroundColor: 'white',
    minHeight: '100vh'
  },
  grid: {
    gap: [null, null, null, null, 2],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
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
    maxWidth: 510,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
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
