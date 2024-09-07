/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeamMember = ({ data, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setIsTruncated(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight);
    }
  }, [data?.description]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={styles.card} {...props}>
      <Box sx={styles.profile}>
        <Image src={data?.icon} alt={data?.name} sx={styles.image} />
        <Box sx={styles.info}>
          <Heading as="h4" sx={styles.name}>{data?.name}</Heading>
          <Text as="p" sx={styles.title}>{data?.title}</Text>
          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href={"mailto:" + data?.email} style={{ marginRight: '10px' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: 'darkgrey' }} />
            </a>
            <a href={data?.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: 'darkgrey' }} />
            </a>
          </div> */}
        </Box>
      </Box>
      <Text
        as="p"
        ref={descriptionRef}
        sx={{
          ...styles.description,
          ...(isExpanded ? styles.expanded : styles.collapsed),
        }}
      >
        {data?.description}
      </Text>
      {isTruncated && (
        <Text as="button" onClick={toggleExpansion} sx={styles.toggleButton}>
          {isExpanded ? '--' : '++'}
        </Text>
      )}
    </Box>
  );
};

export default TeamMember;

const styles = {
  card: {
    backgroundColor: 'white',
    padding: [
      null,
      null,
      null,
      '45px 30px 55px',
      '40px 25px 50px 35px',
      '60px 45px 60px 40px',
    ],
    textAlign: ['center', null, null, null, null, 'left'],
    transition: '0.3s ease 0s',
    '@media only screen and (min-width:768px)': {
      ':hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.05)', // Optional: add a subtle shadow for better visual separation
        '@media only screen and (min-width:768px)': {
          ':hover': {
            backgroundColor: 'white',  // Maintain white background on hover
            borderColor: 'white',
            boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
            transform: 'translate(-1px, -1px)',
          },
        },
        transform: 'translate(-1px, -1px)',
      },
    },
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    mb: 6,
    gap: '20px',  // Add gap between the image and the description
  },
  image: {
    borderRadius: '50%',      // Ensures a perfect circle
    width: '100px',           // Force the width to 100px
    height: '100px',          // Force the height to 100px
    objectFit: 'cover',       // Ensures the image fills the circle without distortion
    objectPosition: 'center', // Centers the image within the circle
    flexShrink: 0,            // Prevents the image from shrinking
    // Avoid margins that would push the image
    // mr: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // marginLeft: '20px',
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
    transition: 'max-height 0.3s ease',
    overflow: 'hidden',
  },
  collapsed: {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    maxHeight: '5.5em',
  },
  expanded: {
    display: 'block',
    maxHeight: 'none',
    whiteSpace: 'normal',
  },
  toggleButton: {
    cursor: 'pointer',
    color: 'blue',
    background: 'none',
    border: 'none',
    padding: 0,
    marginTop: '5px',
    fontSize: [1, null, null, null, 2],
  },
};

