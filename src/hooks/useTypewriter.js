import { useState, useRef, useEffect } from 'react';

const useTypewriter = (message = []) => {
  const [txt, setTxt] = useState('');

  const intervalRef = useRef();

  useEffect(() => {
    let index = 0;
    clearInterval(intervalRef.current);
    if (!message.length) return;

    intervalRef.current = setInterval(() => {
      setTxt((txt) => txt.concat(message[index]));
      index += 1;
      if (index === message.length) clearInterval(intervalRef.current);
    }, 130);

    return () => clearInterval(intervalRef.current);
  }, [message, intervalRef, setTxt]);

  return [txt];
};

export default useTypewriter;
