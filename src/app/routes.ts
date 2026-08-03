import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { GoGirl } from './pages/GoGirl';
import { CheckoutV3 } from './pages/CheckoutV3';
import { PortalAssinante } from './pages/PortalAssinante';
import { Backoffice } from './pages/Backoffice';
import { DesignSystemCase } from './pages/DesignSystemCase';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'go-girl', Component: GoGirl },
      { path: 'checkout-v3', Component: CheckoutV3 },
      { path: 'portal-assinante', Component: PortalAssinante },
      { path: 'backoffice', Component: Backoffice },
      { path: 'design-system', Component: DesignSystemCase },
    ],
  },
]);
