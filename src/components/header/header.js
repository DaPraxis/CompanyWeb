/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { useState, useEffect } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Logo from 'components/logo';
import { navigate } from 'gatsby';

import menuItems from './header.data';

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });

  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  const handleClick = (path) => {
    const [pathname, hash] = path.split('#');

    // Check if we are on the correct page
    if (window.location.pathname === pathname) {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Scroll to the section with smooth behavior
          window.scrollTo({
            top: element.offsetTop - 50, // Adjust offset as necessary
            behavior: 'smooth',
          });
        }
      } else {
        // If no hash, just scroll to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to the correct page
      navigate(pathname, {
        state: { hash }, // Pass the hash as state to handle scrolling after navigation
      });

      // After navigation, scroll to the section once the page has loaded
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 50, // Adjust offset as necessary
            behavior: 'smooth',
          });
        }
      }, 500); // Adjust the delay if necessary to ensure the page has loaded
    }
  };

  useEffect(() => {
    // Handle scrolling after navigation
    const hash = window.history.state?.state?.hash;
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50, // Adjust offset as necessary
          behavior: 'smooth',
        });
      }
    }
  }, []);

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
            <Logo sx={styles.logo} />
            <nav as="nav" sx={styles.navbar} className={'navbar'}>
              {menuItems.map(({ path, label }, i) => (
                <div
                  key={i}
                  onClick={() => handleClick(path)}
                  sx={label === 'Home' ? styles.homeNavItem : styles.navItem} // Apply homeNavItem style for Home
                >
                  {label}
                </div>
              ))}
            </nav>
            <NavbarDrawer />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    backgroundColor: 'transparent',
    position: 'fixed',
    left: 0,
    right: 0,
    py: [5],
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: 'white',
      boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
      py: [3],
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 30, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
  },
  navItem: {
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 400,
    padding: '0 10px',
    transition: 'color 0.3s ease-in-out',
    textDecoration: 'none',
    color: 'black', // Default color
    '&:hover': {
      color: '#5271FF',  // Change color on hover
    },
    '&.active': {
      color: '#5271FF',  // Change color when active
    },
  },
  homeNavItem: {
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 400,
    padding: '0 10px',
    color: '#5271FF', // Constant color for the Home tab
  },
};
