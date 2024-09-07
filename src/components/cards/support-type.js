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
    // Ensure proper flex behavior across all devices, keeping the icon on the left
    flexDirection: 'row', // Keep the icon on the left and text on the right
    '@media screen and (max-width: 768px)': {
      flexDirection: 'row', // Maintain the horizontal layout even on smaller screens
      textAlign: 'left', // Ensure text stays aligned left on mobile
    },
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    mr: 4,
    minWidth: [42, null, null, 60], // Icon size adjusts for smaller screens
  },
  content: {
    flex: 1, // Ensure content takes up available space
  },
  heading: {
    fontSize: [2, null, null, 3],
    fontWeight: 700,
    mb: 2,
    display: 'flex',
    alignItems: 'center',
    svg: {
      ml: 2, // Ensure consistent spacing between text and icon
    },
  },
  text: {
    fontSize: [1, null, null, 2], // Font size adapts to screen size
    lineHeight: '1.6',
    color: 'text',
  },
};
