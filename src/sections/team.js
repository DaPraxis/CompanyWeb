/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      clients: file(relativePath: { eq: "companies.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, PNG])
        }
      }
    }
  `);
  return (
    <section id="team" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="我们的团队"
          slogan="Our team at your service"
          description="多样化的团队背景：名校毕业生、在读博士/硕士、大厂码农、从 Junior Developer 到 Team Lead； 
          在这里，你不仅能找到你的mentor，还有一群志同道合的朋友。为你打造积极、良性的人脉圈。"
        //   learnMore="Explore Details"
        />
        <Box as="figure" sx={styles.illustration}>
          <Image
            src={data.clients.childImageSharp.gatsbyImageData}
            alt="team"
          />
        </Box>
      </Container>
    </section>
  );
};

export default Team;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [3, null, null, 0],
  },
};
