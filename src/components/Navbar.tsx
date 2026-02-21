interface NavbarProps {
    currentPage: string
    setCurrentPage: (page: string) => void
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
    const navItems = [
        { id: 'story', label: 'Story' },
        { id: 'members', label: 'Members' },
        { id: 'philosophy', label: 'Philosophy' },
        { id: 'discography', label: 'Discography' },
        { id: 'interviews', label: 'Interviews' },
    ]

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <h1>The Beatles</h1>
            </div>
            <ul className="nav-links">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                            onClick={() => setCurrentPage(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}