import React from 'react';

import SignalFilterButtons from '../components/CIS/content/signals/SignalFilterButtons';
import SignalCards from '../components/CIS/content/signals/SignalCards';
import LocomotiveSignals from '../components/CIS/content/signals/LocomotiveSignals';
import SignFilterButtons from '../components/CIS/content/signs/SignFilterButtons';
import SignCards from '../components/CIS/content/signs/SignCards';

const CISPage = () => {
  return (
    <main>
      <heading className="page-heading">
        <h1>Signals from CIS Region</h1>
        <p>
          These signals are used on the territories of the former USSR countries
          such as Belarus, Russia, Ukraine and so on
        </p>
      </heading>
      <SignalFilterButtons />
      <SignalCards />
      <LocomotiveSignals />
      <SignFilterButtons />
      <SignCards />
      <p>
        <strong>Sources:</strong>{' '}
        <a href="https://wiki.nashtransport.ru/wiki/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D1%81%D0%B8%D0%B3%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8_%D0%BD%D0%B0_%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D0%B4%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D0%BE%D0%BC_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B5_%D0%A0%D0%A4">
          Wiki Nash Transport
        </a>{' '}
        <a href="http://www.transstroyug.org.ua/sites/default/files/library/archive/ISI_UZ_2008_transstroyug_library.pdf">
          Transstroyug
        </a>
        .
      </p>
      <p>
        <strong>Translated by:</strong>{' '}
        <a href="https://github.com/art-ch">art-ch</a>
      </p>
    </main>
  );
};

export default CISPage;
