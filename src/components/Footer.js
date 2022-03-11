import React from 'react';

function Footer() {
  return (
    <footer className="has-background-black">
      <p>
        Info taken from{' '}
        <a
          href="https://dash.valorant-api.com/"
          target="_blank"
          rel="noreferrer"
        >
          valorant-api.com
        </a>{' '}
        | Work by{' '}
        <a
          href="https://github.com/jsmyth1423"
          target="_blank"
          rel="noreferrer"
        >
          Jordan Smyth
        </a>{' '}
        {'&'}{' '}
        <a
          href="https://github.com/calum-m708/"
          target="_blank"
          rel="noreferrer"
        >
          Calum MacEachen
        </a>
      </p>
    </footer>
  );
}

export default Footer;
