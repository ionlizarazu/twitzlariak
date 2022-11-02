import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import twitzlariak from '../config/twitzlariak.json';
import { getErabiltzaileak } from '../store/actions';

const initialLoader = (App) => {
  const twitzlariList = twitzlariak.twitzlariak;
  return (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getErabiltzaileak(twitzlariList));
    }, [dispatch]);
    return <App {...props}>{props.children}</App>;
  };
};

export default initialLoader;
