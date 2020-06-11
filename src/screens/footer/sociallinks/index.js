import React from 'react';

import Links from '../../../lib/json/links.json'
import {Container} from './style'
export default function SocialLinks() {
  return (
      <Container>
          {
              Links.map((items, ind) => <a href='/' key={ind}><img
                  
                  src={items.img}
                  alt={items.name}/>
                  </a>)
          }
    </Container>
  );
}
