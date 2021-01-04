import React from 'react';
import { useSetLang, useT } from './context';

const Screen = () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <div>
      <h1>{t('Hello!')}</h1>
      <button onClick={() => setLang('es')}>{t('Translate')}</button>
    </div>
  );
};

export default Screen;
