import cn from 'classnames/bind';
import React, { memo } from 'react';
import { Container, Navbar, Nav, NavLink, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import logo from './images/logo.png';
import { useHeader } from './hooks';

import { paths } from '../../constants';

const cx = cn.bind(styles);

const Header = () => {
  const { isActive } = useHeader();

  return (
    <Navbar fixed="top" className="mb-5 shadow-sm" bg="#FFD700">
      <Container className="d-inline-flex align-items-center justify-content-center">
        <Navbar.Brand className="mr-0" as={Link} to={paths.client.HOME}>
          <img
            height="90"
            src={logo}
            className={cx('pd-brand d-inline-block align-top')}
            alt="Pokedex logo"
          />
        </Navbar.Brand>
        <Nav className={cx('pd-nav ml-auto')}>
          <NavLink
            active={isActive(paths.client.HOME)}
            as={Link}
            to={paths.client.HOME}
            className="d-inline-flex align-items-center font-weight-bold"
          >
            <i className="material-icons mr-2">home</i>
            inicio
          </NavLink>
          <NavLink
            active={isActive(paths.client.FAVORITES)}
            as={Link}
            to={paths.client.FAVORITES}
            className="d-inline-flex align-items-center font-weight-bold"
          >
            <i className="material-icons mr-2">favorite</i>
            Favoritos
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default memo(Header);
