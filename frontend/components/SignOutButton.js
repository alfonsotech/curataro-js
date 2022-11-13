import React from 'react';

export default function SignOutButton({accountId, onClick}) {
    return (
      <button style={{ float: 'right' }} onClick={onClick}>
        User {accountId}
      </button>
    );
  }