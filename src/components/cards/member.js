/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Grid } from 'theme-ui';

const TeamMember = ({ data, ...props }) => {
  return (
    <Box sx={styles.card} {...props}>
      <Box sx={styles.profile}>
        <Image src={data?.icon} alt={data?.name} sx={styles.image} />
        <Box sx={styles.info}>
          <Heading as="h4" sx={styles.name}>{data?.name}</Heading>
          <Text as="p" sx={styles.title}>{data?.title}</Text>
        </Box>
      </Box>
      <Text as="p" sx={styles.description}>{data?.description}</Text>
    </Box>
  );
};

export default TeamMember;

const styles = {
  card: {
    borderBottom: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderRight: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    padding: [
      null,
      null,
      null,
      '45px 30px 55px',
      '40px 25px 50px 35px',
      '60px 45px 60px 50px',
    ],
    textAlign: ['center', null, null, null, null, 'left'],
    transition: '0.3s ease 0s',
    '@media only screen and (min-width:768px)': {
      ':hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
        transform: 'translate(-1px, -1px)',
      },
    },
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    mb: 6,
  },
  image: {
    borderRadius: '50%',
    width: 100,
    height: 100,
    objectFit: 'cover',
    mr: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 3,
    fontWeight: 700,
    lineHeight: 1.28,
    color: 'heading',
    marginBottom: 2,
  },
  title: {
    fontSize: [1, null, null, null, 2],
    lineHeight: 1.88,
    color: 'headingSecondary',
  },
  description: {
    fontSize: [1, null, null, null, 2],
    lineHeight: 1.88,
    color: 'headingSecondary',
    mt: 4,
  },
};
