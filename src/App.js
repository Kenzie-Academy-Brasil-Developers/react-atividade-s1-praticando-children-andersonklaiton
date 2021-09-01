import './App.css';
import CenteredCard from './components/CenteredCard';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CenteredCard><h1>Curiosidade 1</h1><p>Diferentemente dos humanos os cães utilizam de outra técnica para realizar sua transpiração, eles ofegam constantemente, ou seja, respiram bem rápido e garantem uma maior evaporação dos fluídos pelo nariz. Aquelas gotinhas, que deixem o nariz do cão úmido e frio, nada mais são do que seu próprio suor, e assim eles promovem a perda de calor pelo corpo.</p></CenteredCard>
        <CenteredCard><h1>Curiosidade 2</h1><p>A ordem das letras no teclado é apenas uma cópia do padrão da máquina de escrever, criada e patenteada pelo inventor americano Christopher Scholes. Com o intuito de organizar as teclas aproximando os pares de letras mais usados na língua inglesa, Scholes aperfeiçoou a idéia de James Densmore, seu parceiro comercial, e criou o teclado QWERTY, nome dado devido à disposição das primeiras seis teclas.</p></CenteredCard>
        <CenteredCard><h1>Curiosidade 3</h1><p>O computador mais rápido na atualidade é o SX-9. A máquina, criada com o fim de fazer simulações do ambiente e de materiais da área de nanotecnologia, foi construída pela companhia japonesa NEC. O SX-9 possui uma performance incrível: 839 trilhões de cálculos por segundo.</p></CenteredCard>
      </div>
    </div>
  );
}

export default App;
