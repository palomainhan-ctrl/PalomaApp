import { useState } from 'react'
import {
  BookOpen, Brush, Check, ChevronRight, Heart, Home, LockKeyhole,
  Palette, Puzzle, RotateCcw, Sparkles, Star, Volume2,
  X
} from 'lucide-react'

type Section = 'inicio' | 'pintura' | 'letras' | 'jogos' | 'responsaveis'

const letters = [
  { letter: 'A', word: 'Abelha', emoji: '🐝', color: 'sun' },
  { letter: 'B', word: 'Bola', emoji: '⚽', color: 'sky' },
  { letter: 'C', word: 'Casa', emoji: '🏡', color: 'pink' },
  { letter: 'D', word: 'Dado', emoji: '🎲', color: 'mint' },
]

const colors = ['#ff6b6b', '#ffb703', '#5aa9ff', '#66cdaa', '#b48aff', '#ff8fc7', '#805ad5', '#333333']

function App() {
  const [section, setSection] = useState<Section>('inicio')
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [colored, setColored] = useState<Record<number, string>>({})
  const [letterIndex, setLetterIndex] = useState(0)
  const [answer, setAnswer] = useState<string | null>(null)
  const [memoryOpen, setMemoryOpen] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [showParentGate, setShowParentGate] = useState(false)
  const [notice, setNotice] = useState('')

  const currentLetter = letters[letterIndex]
  const memoryCards = ['🐸', '🌈', '🐸', '🌈']

  const chooseSection = (next: Section) => {
    if (next === 'responsaveis') {
      setShowParentGate(true)
      return
    }
    setSection(next)
    setNotice('')
  }

  const checkAnswer = (choice: string) => {
    setAnswer(choice)
    if (choice === currentLetter.letter) setNotice('Muito bem! Você encontrou a letra! ⭐')
    else setNotice('Quase! Vamos tentar mais uma vez? 💛')
  }

  const flipCard = (index: number) => {
    if (memoryOpen.includes(index) || matched.includes(index) || memoryOpen.length >= 2) return
    const next = [...memoryOpen, index]
    setMemoryOpen(next)
    if (next.length === 2) {
      if (memoryCards[next[0]] === memoryCards[next[1]]) {
        setMatched((previous) => [...previous, ...next])
        setTimeout(() => setMemoryOpen([]), 450)
      } else {
        setTimeout(() => setMemoryOpen([]), 850)
      }
    }
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={() => chooseSection('inicio')} aria-label="Ir para o início">
          <span className="brand-mark"><Sparkles size={24} /></span>
          <span>Paloma<span className="brand-app">App</span><small>aprender brincando</small></span>
        </button>
        <div className="side-label">MEU CANTINHO</div>
        <nav className="main-nav" aria-label="Menu principal">
          <button className={section === 'inicio' ? 'nav-item active' : 'nav-item'} onClick={() => chooseSection('inicio')}><Home size={19} /> Início</button>
          <button className={section === 'pintura' ? 'nav-item active' : 'nav-item'} onClick={() => chooseSection('pintura')}><Palette size={19} /> Desenhar e pintar <span className="nav-dot coral" /></button>
          <button className={section === 'letras' ? 'nav-item active' : 'nav-item'} onClick={() => chooseSection('letras')}><BookOpen size={19} /> Aprender letras <span className="nav-dot blue" /></button>
          <button className={section === 'jogos' ? 'nav-item active' : 'nav-item'} onClick={() => chooseSection('jogos')}><Puzzle size={19} /> Jogos divertidos <span className="nav-dot green" /></button>
        </nav>
        <div className="sidebar-bottom">
          <div className="mascot-card">
            <span className="mascot">🦊</span>
            <strong>Você consegue!</strong>
            <p>Aprender fica mais legal quando a gente brinca.</p>
            <div className="mascot-stars">⭐ ✨ ⭐</div>
          </div>
          <button className="parent-link" onClick={() => chooseSection('responsaveis')}><LockKeyhole size={16} /> Área dos responsáveis</button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="welcome">
            <span className="eyebrow">SEU ESPAÇO DE DESCOBERTAS</span>
            <h1>{section === 'inicio' ? 'Oi, pequeno explorador!' : section === 'pintura' ? 'Hora de criar!' : section === 'letras' ? 'Vamos brincar com as letras!' : section === 'jogos' ? 'Vamos jogar?' : 'Área dos responsáveis'}</h1>
          </div>
          <div className="top-actions">
            <span className="streak"><Star size={17} fill="currentColor" /> Meu cantinho feliz</span>
            <button className="avatar-button" onClick={() => setShowParentGate(true)} aria-label="Configurações do responsável">🦋</button>
          </div>
        </header>

        {section === 'inicio' && (
          <div className="page-content">
            <section className="hero">
              <div className="hero-copy">
                <div className="pill"><Sparkles size={14} /> UM MUNDO DE DESCOBERTAS</div>
                <h2>Brincar, descobrir<br />e <span>aprender!</span></h2>
                <p>Um montão de cores, letras e jogos para descobrir o mundo do seu jeitinho.</p>
                <button className="primary-button" onClick={() => chooseSection('letras')}>Vamos começar <ChevronRight size={19} /></button>
                <div className="hero-foot"><Heart size={15} fill="currentColor" /> Feito para aprender no seu ritmo</div>
              </div>
              <div className="hero-art" aria-label="Ilustração de arco-íris e estrelas">
                <div className="sun-shape" />
                <div className="rainbow"><span /><span /><span /><span /></div>
                <div className="cloud cloud-one">☁️</div><div className="cloud cloud-two">☁️</div>
                <span className="float-star star-one">✦</span><span className="float-star star-two">✧</span>
                <div className="hero-character">🦊</div>
                <div className="hero-speech">Oi, vamos brincar?</div>
              </div>
            </section>

            <section className="section-heading">
              <div><span className="eyebrow">ESCOLHA SUA AVENTURA</span><h2>O que vamos fazer hoje?</h2></div>
              <span className="tiny-note"><Sparkles size={15} /> Tudo no seu tempo</span>
            </section>
            <div className="activity-grid">
              <button className="activity-card paint-card" onClick={() => chooseSection('pintura')}>
                <span className="activity-icon"><Palette size={27} /></span><span className="card-emoji">🖍️</span>
                <strong>Desenhar e pintar</strong><p>Solte a imaginação com muitas cores.</p><span className="card-link">Quero pintar <ChevronRight size={16} /></span>
              </button>
              <button className="activity-card letters-card" onClick={() => chooseSection('letras')}>
                <span className="activity-icon"><BookOpen size={27} /></span><span className="card-emoji letter-emoji">Aa</span>
                <strong>Aprender as letras</strong><p>Descubra letras, sons e palavras.</p><span className="card-link">Vamos aprender <ChevronRight size={16} /></span>
              </button>
              <button className="activity-card games-card" onClick={() => chooseSection('jogos')}>
                <span className="activity-icon"><Puzzle size={27} /></span><span className="card-emoji">🧩</span>
                <strong>Jogos divertidos</strong><p>Memória, cores, formas e desafios.</p><span className="card-link">Vamos jogar <ChevronRight size={16} /></span>
              </button>
            </div>

            <section className="bottom-banner">
              <div className="banner-art">🌱</div><div><span className="eyebrow">CADA DESCOBERTA CONTA</span><h3>Pequenos passos, grandes descobertas!</h3><p>Aprender pode ser uma aventura cheia de alegria.</p></div><span className="banner-spark">✦</span>
            </section>
          </div>
        )}

        {section === 'pintura' && (
          <div className="page-content">
            <div className="activity-intro"><div><span className="eyebrow">ATELIÊ DE ARTE</span><h2>Escolha uma cor e pinte!</h2><p>Toque nas formas para colori-las. Você pode mudar de cor quantas vezes quiser.</p></div><span className="big-art-emoji">🎨</span></div>
            <div className="paint-layout">
              <section className="paint-board">
                <div className="board-top"><span><Brush size={17} /> Meu desenho</span><button className="subtle-button" onClick={() => setColored({})}><RotateCcw size={15} /> Recomeçar</button></div>
                <div className="coloring-scene">
                  <button className="color-shape sun-doodle" style={{ backgroundColor: colored[0] || '#ffe7a3' }} onClick={() => setColored({ ...colored, 0: selectedColor })} aria-label="Pintar o sol">☀</button>
                  <button className="color-shape flower-doodle" style={{ color: colored[1] || '#ff8fc7' }} onClick={() => setColored({ ...colored, 1: selectedColor })} aria-label="Pintar a flor">✿</button>
                  <button className="color-shape butterfly-doodle" style={{ color: colored[2] || '#8ecbff' }} onClick={() => setColored({ ...colored, 2: selectedColor })} aria-label="Pintar a borboleta">🦋</button>
                  <button className="color-shape hill-doodle" style={{ backgroundColor: colored[3] || '#a5e6bd' }} onClick={() => setColored({ ...colored, 3: selectedColor })} aria-label="Pintar a colina" />
                  <span className="scene-cloud">☁️</span><span className="scene-cloud second">☁️</span>
                </div>
                <p className="helper-note"><Sparkles size={15} /> Seu desenho fica aqui enquanto você brinca.</p>
              </section>
              <aside className="palette-panel"><h3><Palette size={19} /> Minha paleta</h3><p>Qual cor você escolhe?</p><div className="swatches">{colors.map((color) => <button key={color} className={selectedColor === color ? 'swatch selected' : 'swatch'} style={{ backgroundColor: color }} onClick={() => setSelectedColor(color)} aria-label={'Selecionar cor ' + color}>{selectedColor === color && <Check size={18} color="white" />}</button>)}</div><div className="selected-color"><span style={{ backgroundColor: selectedColor }} /> Cor escolhida</div><div className="palette-tip">💡 <span>Não existe jeito errado de criar. Use a imaginação!</span></div></aside>
            </div>
          </div>
        )}

        {section === 'letras' && (
          <div className="page-content">
            <div className="activity-intro"><div><span className="eyebrow">CLUBE DAS LETRINHAS</span><h2>Uma letra de cada vez!</h2><p>Conheça a letra, veja uma imagem e escolha a letra certa.</p></div><span className="big-art-emoji">📚</span></div>
            <div className="letter-learning">
              <div className={'letter-picture ' + currentLetter.color}><span className="letter-big">{currentLetter.letter}</span><span className="letter-emoji-big">{currentLetter.emoji}</span><strong>{currentLetter.word}</strong><button className="sound-button" onClick={() => setNotice('Peça a um responsável para ativar o áudio quando estiver disponível.')}><Volume2 size={17} /> Ouvir a letra</button></div>
              <div className="letter-quiz"><span className="quiz-step">DESAFIO DAS LETRAS · {letterIndex + 1} DE {letters.length}</span><h3>Qual é a letra de <span>{currentLetter.word.toLowerCase()}</span>?</h3><p>Escolha uma letra abaixo:</p><div className="letter-choices">{letters.map((item) => <button key={item.letter} className={'letter-choice ' + (answer === item.letter ? (item.letter === currentLetter.letter ? 'correct' : 'wrong') : '')} onClick={() => checkAnswer(item.letter)}>{item.letter}</button>)}</div>{notice && <div className={answer === currentLetter.letter ? 'feedback success' : 'feedback'}>{notice}</div>}<button className="primary-button next-letter" onClick={() => { setLetterIndex((letterIndex + 1) % letters.length); setAnswer(null); setNotice('') }}>Próxima letra <ChevronRight size={18} /></button></div>
            </div>
          </div>
        )}

        {section === 'jogos' && (
          <div className="page-content">
            <div className="activity-intro"><div><span className="eyebrow">JOGOS PARA PENSAR</span><h2>Encontre os pares!</h2><p>Toque em duas cartas e descubra as figuras iguais.</p></div><span className="big-art-emoji">🧩</span></div>
            <section className="memory-game"><div className="memory-top"><div><h3>Jogo da memória</h3><p>Vamos encontrar os dois pares?</p></div><button className="subtle-button" onClick={() => { setMemoryOpen([]); setMatched([]) }}><RotateCcw size={15} /> Jogar de novo</button></div><div className="memory-grid">{memoryCards.map((card, index) => <button key={index} className={'memory-card ' + (memoryOpen.includes(index) || matched.includes(index) ? 'revealed' : '')} onClick={() => flipCard(index)} aria-label={'Carta ' + (index + 1)}>{memoryOpen.includes(index) || matched.includes(index) ? card : <span>✦</span>}</button>)}</div>{matched.length === 4 && <div className="feedback success">Você encontrou todos os pares! Que memória incrível! ⭐</div>}</section>
          </div>
        )}

        {section === 'responsaveis' && (
          <div className="page-content">
            <div className="parent-panel"><div className="parent-icon"><LockKeyhole size={28} /></div><span className="eyebrow">ESPAÇO DA FAMÍLIA</span><h2>Área dos responsáveis</h2><p>Este espaço terá acesso protegido para que os responsáveis gerenciem o perfil infantil, acompanhem as atividades e cuidem da assinatura.</p><div className="parent-features"><div><Check size={17} /> Perfis infantis e progresso</div><div><Check size={17} /> Plano e pagamentos recorrentes</div><div><Check size={17} /> Privacidade e configurações</div></div><div className="setup-warning"><LockKeyhole size={18} /><span><strong>Configuração pendente</strong><br />Autenticação e pagamentos reais ainda precisam ser conectados ao backend. Nenhuma cobrança está sendo feita nesta versão inicial.</span></div><button className="primary-button" onClick={() => setSection('inicio')}>Voltar ao PalomaApp <ChevronRight size={18} /></button></div>
          </div>
        )}

        <footer className="footer"><span>PalomaApp <span>♥</span> aprender brincando</span><span>Um espaço colorido para descobrir o mundo.</span></footer>
      </main>

      {showParentGate && <div className="modal-backdrop" role="presentation" onClick={() => setShowParentGate(false)}><div className="parent-modal" role="dialog" aria-modal="true" aria-labelledby="parent-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowParentGate(false)} aria-label="Fechar"><X size={20} /></button><div className="modal-lock"><LockKeyhole size={25} /></div><span className="eyebrow">ESPAÇO DA FAMÍLIA</span><h2 id="parent-modal-title">Olá, responsável!</h2><p>As configurações da família ficam separadas das brincadeiras infantis.</p><div className="setup-warning"><LockKeyhole size={18} /><span>A autenticação segura será habilitada na próxima etapa de configuração do projeto.</span></div><button className="primary-button modal-action" onClick={() => { setShowParentGate(false); setSection('responsaveis') }}>Continuar <ChevronRight size={18} /></button></div></div>}
    </div>
  )
}

export default App