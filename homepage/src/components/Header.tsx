import { useState } from 'react';
import { Mobile, Pc } from './Responsive';

import NavMobile from './layouts/NavMobile';
import NavPc from './layouts/NavPc';

export enum Locales {
  KO = 'ko',
  EN = 'en',
}

export const localeList = [Locales.KO, Locales.EN];

export default function Header() {
  const [useMenu, setUseMenu] = useState(false);

  const toggleMenu = () => {
    setUseMenu(() => !useMenu);
  }

  return (
    <header>
      <div className='inner'>
        <div className='header'>
          <Pc>
            <NavPc />            
          </Pc>

          <Mobile>
            <NavMobile />
          </Mobile>
        </div>
      </div>
    </header>
  );
}