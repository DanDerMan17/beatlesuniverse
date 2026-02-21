import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Story from './pages/Story'
import Members from './pages/Members'
import Philosophy from './pages/Philosophy'
import Discography from './pages/Discography'
import Interviews from './pages/Interviews'

function App() {
    const [currentPage, setCurrentPage] = useState('story')

    const renderPage = () => {
        switch (currentPage) {
            case 'story':
                return <Story />
            case 'members':
                return <Members />
            case 'philosophy':
                return <Philosophy />
            case 'discography':
                return <Discography />
            case 'interviews':
                return <Interviews />
            default:
                return <Story />
        }
    }

    return (
        <div className="beatles-site">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="content">
                {renderPage()}
            </main>
        </div>
    )
}

export default App