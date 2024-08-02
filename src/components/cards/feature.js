/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Grid } from 'theme-ui';
import { LearnMore } from 'components/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';


const Feature = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data?.icon} alt={data?.title} />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
        {/* {data?.path && <LearnMore path={data?.path} />} */}
        {data?.list && <Grid sx={styles.list} as="ul">
          {data?.list.map((item, i) => (
            <Text as="li" key={i}>
              <IoIosCheckmarkCircle
                sx={{ color: 'primary', mr: 2 }}
                size="20px"
              />
              {item}
            </Text>
          ))}
          </Grid>}
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
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
    figure: {
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: [70],
      mb: 6,
    },
    h4: {
      fontSize: 3,
      fontWeight: 700,
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: 2,
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: 1.88,
      color: 'headingSecondary',
    },
    a: {
      mt: [2, null, null, null, 6],
    },
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
