/** @jsx jsx */
import { jsx, Flex, Heading, Image, Text } from 'theme-ui';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { rgba } from 'polished';

const SupportType = ({ data }) => {
  return (
    <div sx={styles.card}>
      <Flex as="figure" sx={styles.icon}>
        <Image src={data.icon} alt={data.title} />
      </Flex>
      <div sx={styles.content}>
        <Heading as="h3" sx={styles.heading}>
          {data.title}{' '}
          <HiOutlineArrowNarrowRight color={rgba('#0F2137', 0.3)} />
        </Heading>
        <Text as="p" sx={styles.text}>
          {data.text}
        </Text>
      </div>
    </div>
  );
};

export default SupportType;

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    mt: 7,
    backgroundColor: 'white', // Ensure the background is light
    color: '#0F2137', // Set text color to dark for visibility
    '@media screen and (max-width: 768px)': {
      flexDirection: 'row', // Keep the icon on the left and text on the right for mobile
      textAlign: 'left', // Ensure text stays aligned left
    },
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    mr: 4,
    minWidth: [42, null, null, 60],
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: [2, null, null, 3],
    fontWeight: 700,
    mb: 2,
    display: 'flex',
    color: '#0F2137', // Ensure heading text color is dark for contrast
    alignItems: 'center',
    svg: {
      ml: 2,
    },
  },
  text: {
    fontSize: [1, null, null, 2],
    lineHeight: '1.6',
    color: '#0F2137', // Ensure body text color is dark for readability
  },
};

