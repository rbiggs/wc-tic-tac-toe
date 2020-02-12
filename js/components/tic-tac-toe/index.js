import {LitElement, html, css} from 'https://unpkg.com/lit-element?module'
import {calculateWinner} from './calculate-winner'
import {styleComponent} from './styles'

class TicTacToe extends LitElement {
  constructor() {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  static get styles() {
    return [styleComponent()]
  }

  static get properties() {
    return {
      state: {type: Object}
    };
  }

  renderSquare(i, won) {
    return html`
      <button class=${`square ${won ? 'won' : ''}`}
        @click=${() => this.handleClick(i)}
      >${this.state.history[0].squares[i]}</button>
    `
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.state = {
      history: [...history, {squares}],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    }
    this.state.history[0] = {squares}
  }
  jumpTo(step) {
    this.state.stepNumber = step
    this.state.xIsNext = (step % 2) === 0
    this.state.history[0] = step === 0 ? {squares: Array(9).fill(null)} : this.state.history[step]
    this.update()
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return html`
        <li>
          <button class='button-moves' @click=${() => this.jumpTo(move)}>${desc}</button>
        </li>
      `
    });

    let status
    if (winner) {
      status = 'Winner: ' + winner.who;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return html`
    <div class='game'>
      <div class='board'>
          ${
      this.state.history[0].squares.map((item, idx) => {
        let won
        if (winner) {
          var arr1 = winner.line.map(item => String(item))
          won = arr1.find((item) => item === String(idx))
        }
        return this.renderSquare(idx, won)
      })
      }
      </div>
      <div class="game-info">
        <div class=${/Winner/img.test(status) ? 'status winner' : 'status'}>${status}</div>
        <ol>${moves}</ol>
      </div>
    </div>
    `
  }
}


customElements.define('tic-tac-toe', TicTacToe)
