import {css} from 'https://unpkg.com/lit-element?module'

export const styleComponent = () => css`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }

  ol, ul {
    padding-left: 30px;
  }

  .board {
    width: 120px;
  }
  .board:after {
    clear: both;
    content: "";
    display: table;
  }
  * {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    font-size: 62.5%;
    font: 14px "Century Gothic", Futura, sans-serif;
  }
  button {
    border-radius: 0;
    border: solid 1px #ccc;
    background-color: #ccc;
    overflow: hidden;
  }
  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 3rem;
    font-weight: bold;
    line-height: 34px;
    height: 4rem;
    width: 4rem;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    transition: all .25s ease-out;
  }
  .square:hover {
    background-color: #999;
    color: #fff;
  }
  .square.won {
    background-color: green;
    color: #fff;
  }
  .square.won:hover {
    background-color: green;
    color: #fff;
  }
  .square:focus {
    outline: none;
    background: #ddd;
  }
  .game {
    width: 340px;
    display: grid;
    grid-template-columns: auto auto;
  }
  .status {
    transition: all .5s ease-out;
  }
  .winner {
    color: #007AFF;
    font-size: 2rem;
  }
  .button-moves {
    background-color: #fff;
    border-radius: 4px;
    margin: 0 0 10px 0;
    transition: all .25s ease-out;
    font-size: 1.6rem;
  }
  .button-moves:hover {
    background-color: #007AFF;
    border-color: #007AFF;
    color: #fff
  }
`
