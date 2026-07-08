import PortfolioPage from '../features/portfolio/PortfolioPage';
import SoSoProjectPage from '../features/portfolio/SoSoProjectPage';
import LocalZipPage from '../features/portfolio/LocalZipPage';

const portfolioRoutes = [
  {
    index: true,
    element: <PortfolioPage />
  },
  {
    path: 'project/soso',
    element: <SoSoProjectPage />
  },
  {
    path: 'project/localzip',
    element: <LocalZipPage />
  }
];

export default portfolioRoutes;
