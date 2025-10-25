import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App , {Content1, Content2, name} from './App.jsx'
import { Images } from './Component/Images.jsx'
import { Video } from './Component/Video.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Content1 />
    <Content2 />
    <p>{name}</p>
    <Images />
    <Video />


   
  </StrictMode>,
)
