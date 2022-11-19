import React from 'react';

export default function SignOutButton({accountId, onClick}) {
    return (
      <button style={{ float: 'right' }} onClick={onClick}>
        <h3>User <span>{accountId}</span></h3> 
      </button>
    );
  }