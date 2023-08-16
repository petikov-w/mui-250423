import { NavLink, useLocation } from 'react-router-dom';
import {Link } from '@mui/material';

import { TypographyNavLinkStl } from '../../styles/Nav.styled'; 

import { NavigationList } from './NavigationList';

export const Navigations = () => {
            return (
            <>          
            { NavigationList.map((item) => (                                   
                                  <Link color="inherit" underline="none" key={item.id} component={NavLink} state={item.state} 
                                                                      to={item.path}>                                     
                                      <TypographyNavLinkStl>
                                          {item.navItem}
                                      </TypographyNavLinkStl>
                                  </Link>    
                              ))}
            </>
       );
};

   