/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    id: 1,
    title: `01. What is the application process for the PBL program?`,
    contents: (
      <div>
        <p>Please contact our team via email, attach your <b>resume</b> and a <b>recent transcript</b>. We'll arrange a 30-minute chat to discuss your needs and interests, after which we'll provide a tailored syllabus and quote for you.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: `02. What is the PBL program start date?`,
    contents: (
      <div>
        <p>The PBL program accepts students on a <b>rolling basis</b> throughout the year with limited seats. Please contact us if you are interested so that we can schedule your lectures as soon as possible.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: `03. What is the price of the program?`,
    contents: (
      <div>
        <p>There is no fixed price, since we customize for each student based on their unique background and interests. Please contact us for a quote.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Where will the program be held?`,
    contents: (
      <div>
        <p>The PBL program can be held entirely online. However, if needed, we can also arrange in-person sessions for students located in the Toronto GTA area.</p> 
        <p>The networking events are held in-person mostly during summer in the University of Toronto campus.</p>
      </div>
    ),
  },
  {
    id: 5,
    title: `05. What networking opportunities do you offer?`,
    contents: (
      <div>
        <p>We organize regular <b>academic seminars</b> with guest lecturers and scholars from various university and industrial fields.</p> 
        <p>During summer, you can also participate in our <b>university tours</b>, gain exclusive access to university labs, and have personal talks with prominent professors and Ph.D. students.</p>
        <p>We also organize various <b>workshops</b> to help you build up your resume and personal profiles</p>
      </div>
    ),
  },
  {
    id: 6,
    title: `06. What kind of projects can I work on?`,
    contents: (
      <div>
        <p>Projects are customized based on your interests. </p>
        <p>For example, one of our students was deeply interested in psychology, particularly social anxiety. We helped her research and develop a thesis on using VR-simulated social environments to assess people's stress levels and conduct research based on the results.</p>
        <p>Another student was interested in e-commerce and product trends. We helped him create a web crawler to automate product trend data fetching and used machine learning to predict sales cycle.</p>
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          // slogan="Get your question answer"
          title="FAQ"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Button as="a" href = "https://form.jotform.com/221316375057251">Still Question? Contact us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
