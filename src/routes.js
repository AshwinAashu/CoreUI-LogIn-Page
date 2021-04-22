import React from 'react';

const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  
]; 

export default routes;
