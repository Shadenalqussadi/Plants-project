import React from 'react';

function NavBttn({ des, message, onClick }) {
  return (
    <button className={des} onClick={onClick}>
      {message}
    </button>
  );
}

export default NavBttn;
