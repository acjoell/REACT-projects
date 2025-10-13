import './App.css'
import { Card } from './components/Card.jsx'
import { CardCSS } from './components/CardCSS/CardCSS.jsx'
import { Counter } from './components/Counter.jsx'
import { EffecCounter } from './components/EffectCounter.jsx'
import { NameForm } from './components/NameForm.jsx'
import { ToggleButton } from './components/ToggleButton.jsx'
import { StaticComponent } from './components/StaticComponent/StaticComponent.jsx'
import { UserList } from './components/UserLits/Userlist.jsx'
import { PostList } from './components/UserLits/Postlist.jsx'
import { CounterReducer } from './components/CounterReducer/CounterReducer.jsx'
import { ThemeProvider, ThemeButton } from './components/ThemeContext/ThemeProvider.jsx'
import { Demo } from './components/DemoMemo.jsx'

function App() {
  const info = [
    {title: 'Card 1', description: 'descripcion de la card 1'},
    {title: 'Card 2', description: 'descripcion de la card 2'}
  ]

  return (
    <>
      <h1 className='underline decoration-sky-400 hover:decoration-sky-600'>Vite + React</h1>

      <Counter /> {/* Hook useState */}
      <br /><br />
      <ToggleButton />  {/* Eventos sinteticos */}
      <br /><br />
      <NameForm />  {/* Eventos sinteticos */}
      <br /><br />
      <EffecCounter /> {/* Hook useEffect */}

      {info.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          desc={card.description}
        />
      ))}

      <br /><br />
      <CardCSS /> {/* Styled Components */}
      <br /><br />
      <UserList />  {/* Dinamic Component */}
      <br /><br />
      <PostList />  {/* Dinamic Component and SyntheticEvents */}
      <br /><br />
      <CounterReducer />  {/* Reducer Hook */}
      <br /><br />
      <ThemeProvider>   {/* Context Hook */}
        <ThemeButton />
      </ThemeProvider>
      <br /><br />
      <Demo />  {/* Memo Hook */}
    </>
  )
}

export default App
