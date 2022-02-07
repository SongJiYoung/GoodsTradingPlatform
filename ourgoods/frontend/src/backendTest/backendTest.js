import { useEffect, useState } from 'react';

import React from 'react';

const BackendTest = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/hello',
    }).then((res) => {
      setMessage(res.data);
    });
  }, []);

  // useEffect(() => {
  //   fetch('/hello')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       setMessage(data);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {message.map((text, index) => (
            <li key={`${index}-${text}`}>{text}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};
export default BackendTest;
