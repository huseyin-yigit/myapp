import React, { useState, useEffect } from 'react';

const useDebounce = (value, timeout) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
};

function Autosave({ data, onSave }) {
 // console.log('inside autosave');
  const debounceData = useDebounce(data, 5000);
  useEffect(() => {
    onSave(debounceData);
  }, [debounceData]);
  return null;
}
export default React.memo(Autosave);