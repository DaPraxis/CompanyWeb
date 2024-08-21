/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news1 from 'assets/images/blog/1.png';
import news2 from 'assets/images/blog/2.png';
import news3 from 'assets/images/blog/3.png';
import news4 from 'assets/images/blog/4.png';
import crawler from 'assets/images/blog/crawler.gif';
// import why from 'assets/images/blog/why-Photoroom.jpg'
import why from 'assets/images/blog/why.png'
import AI from 'assets/images/blog/AI.png'
import AI2 from 'assets/images/blog/AI2.png'
import zoom from 'assets/images/blog/zoom.png'
import image from 'assets/images/blog/image.png'
import robot from 'assets/images/blog/robot.gif'

const data = [
  {
    id: 5,
    image: AI2,
    title: "Teach AI to paint using different keywords and to learn from various artists' styles.",
    desc: '',
    // link: '#',
  },
  {
    id: 3,
    image: zoom,
    title: 'LLM-based virtual meeting assistant.',
    desc: '',
    // link: '#',
  },
  {
    id: 0,
    image: robot,
    title: 'Robot arm training with reinforcement learning.',
    desc: '',
    // link: '#',
  },
  {
    id: 2,
    image: crawler,
    title:
      'Automated web crawler conducting Social Network Analysis (SNA).',
    desc: '',
    // link: '#',
  },
  {
    id: 4,
    image: image,
    title: 'AI image understanding.',
    desc: '',
    link: '',
  },
  
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
          slogan="Latest alumini work"
          title="Our recent student projects"
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
    backgroundColor: 'white',
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
