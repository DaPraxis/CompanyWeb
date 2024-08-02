/** @jsx jsx */
import { jsx, Flex, Input, Button, Label} from 'theme-ui';
import { LearnMore } from 'components/link';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor="email" variant="styles.srOnly">
        Email
      </Label>
      <Input type="email" id="email" placeholder="Enter Email address" />
      <Button as="a" href = "https://form.jotform.com/221316375057251">Contact Us</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
    },
  },
};
