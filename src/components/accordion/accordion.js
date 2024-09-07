/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { rgba } from 'polished';
import { jsx, Heading } from 'theme-ui';
import { BaseAccordion } from './base-accordion';
import ActionButton from './action-button';
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from './shared';

export default function Accordion({ items, ...props }) {
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              sx={styles.accordion}
              isOpen={openIndexes.includes(index)}
              className={openIndexes.includes(index) ? 'is-open' : 'is-closed'}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <Heading as="h4" sx={styles.title}>
                  {item.title}
                </Heading>
              </AccordionButton>
              <AccordionContents
                isOpen={openIndexes.includes(index)}
                sx={styles.content}
              >
                {item.contents}
              </AccordionContents>
              <ActionButton
                handleClick={() => handleItemClick(index)}
                isOpen={openIndexes.includes(index)}
              />
            </AccordionItem>
          ))}
        </>
      )}
    </BaseAccordion>
  );
}

const styles = {
  accordion: {
    borderBottom: `1px solid ${rgba('#0F2137', 0.3)}`,
    gap: [2, null, null, 4, 3, 13],
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'flex-start',
    position: 'relative',
    marginBottom: [3, null, null, 6, 8],
    paddingBottom: [3, null, null, 6, 8],
    paddingRight: [0, null, null, 7, 8, 11],
    backgroundColor: 'white',
    '&.is-open': {
      borderWidth: 2,
      borderColor: 'heading',
    },
    '@media screen and (min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  title: {
    color: 'heading',
    color: '#0F2137', // Dark text color for visibility
    fontWeight: 500,
    fontSize: [2, null, null, 4],
    lineHeight: 1.5,
    letterSpacing: 'heading',
    paddingRight: [8, null, null, 0],
  },
  content: {
    color: '#0F2137', // Set content text to dark color for readability
    fontSize: [1, null, null, 2],
    '> div': {
      paddingTop: [1, null, null, 0],
    },
    display: 'block',
    '-webkit-display': 'block',
    visibility: 'visible',
    backgroundColor: 'white', // Ensure background contrast for text
    wordWrap: 'break-word', // Prevent text overflow
    // Ensure content overflow is handled correctly for smaller screens
    '@media screen and (max-width: 768px)': {
      overflow: 'visible',
      paddingRight: 0,
      maxHeight: 'none',  // Ensure content is fully visible
    },
  },
};
