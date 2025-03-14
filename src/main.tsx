import ReactDOM from 'react-dom/client'
import { App } from 'App'
import { ThemeProvider } from "theme"
import { SelectedPageProvider } from 'hooks/useSelectedPage'
import { HeightProvider } from 'hooks/useHeightContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SelectedPageProvider defaultSelectedPage="home">
    <ThemeProvider>
      <HeightProvider>
        <App />
      </HeightProvider>
    </ThemeProvider>
  </SelectedPageProvider >
)