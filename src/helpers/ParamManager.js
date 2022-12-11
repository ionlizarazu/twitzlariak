import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const ParamManager = (name, defaultValue) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const valueParam = searchParams.get('itemBgC') || defaultValue;
  const [value, setValue] = useState(valueParam);
  const onChangeHandler = (val) => {
    let newParams = {};
    for (const [k, v] of searchParams.entries()) {
      newParams[k] = v;
    }
    setSearchParams({ ...newParams, [name]: val });
    setValue(val);
  };
  return [onChangeHandler, value, setValue];
};
