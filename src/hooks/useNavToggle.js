import React, {useState, useEffect} from 'react';

const useNavToggle = ()=> {
    const [toggleNav, setToggle] = useState(false);

    return [toggleNav, setToggle];
}

export default useNavToggle;