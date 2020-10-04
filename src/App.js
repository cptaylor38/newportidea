import React, { useEffect, useState } from 'react';
import Desktop from './DesktopView/Desktop';
import Mobile from './MobileView/Mobile';

function App() {
  const [screensize, setscreensize] = useState({ width: window.innerWidth });

  useEffect(() => {
    function resize() {
      setscreensize({ width: window.innerWidth });
    }
    window.addEventListener('resize', resize);
    return window.removeEventListener('resize', resize);
  });

  return <>{screensize.width >= 1024 ? <Desktop /> : <Mobile />}</>;
}

export default App;
