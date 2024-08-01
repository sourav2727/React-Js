
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './cards.jsx'


function App() {
  let mySourav={
    name:"sourav",
    age:25,
    profession:"Nothing"
}


  return (
    <>
        <h1 className='bg-red-900 text-black-900 rounded-xl p-4'>REACT PROPS WITH TAILWIND CSS</h1>
        <Card TodayLearning="ChaiAurReact"  myobj={mySourav}/>
        <Card TodayLearning="Sourav"/>
        <Card TodayLearning="From Cards WE Learned Props"/>
    </>
  )
}

export default App
