import { Outlet } from 'react-router-dom';
import { FooterLanding, HeaderLanding } from '../components';

export const LandingLayout = () => {
  return (
    <>
      <HeaderLanding />
      <Outlet />
      <FooterLanding />
    </>
  )
}