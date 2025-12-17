"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"

export default function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [direction, setDirection] = useState("forward")

  const pages = [
    {
      id: "cover",
      title: "Cover",
      content: (
        <div className="cover-page">
          <h1 className="cover-title">How To Win Friends</h1>
          <p className="cover-author">by Mohammed Yassin and Wijden</p>
          <p className="coming-soon-badge">Coming Soon</p>
        </div>
      ),
    },
    {
      id: "introduction-wijden",
      title: "Introduction - Wijden",
      content: (
        <div className="text-page">
          <h2 className="page-title">Introduction - Wijden</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "introduction-mohammed",
      title: "Introduction - Mohammed Yassin",
      content: (
        <div className="text-page">
          <h2 className="page-title">Introduction - Mohammed Yassin</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "part1",
      title: "Part 1: friend",
      content: (
        <div className="text-page">
          <h2 className="page-title">Part 1: friend</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "part2",
      title: "Part 2: memories",
      content: (
        <div className="text-page">
          <h2 className="page-title">Part 2: memories</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "part3",
      title: "Part 3: life",
      content: (
        <div className="text-page">
          <h2 className="page-title">Part 3: life</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "part4",
      title: "Part 4: the journey",
      content: (
        <div className="text-page">
          <h2 className="page-title">Part 4: the journey</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "part5",
      title: "Part 5: 6 ways to connect with a friend",
      content: (
        <div className="text-page">
          <h2 className="page-title">Part 5: 12 ways to connect with a friend</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "part6",
      title: "Part 6: how to win friends",
      content: (
        <div className="text-page">
          <h2 className="page-title">Part 6: how to win friends</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "part7",
      title: "Part 7: the influence",
      content: (
        <div className="text-page">
          <h2 className="page-title">Part 7: the influence</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: (
        <div className="text-page">
          <h2 className="page-title">Conclusion</h2>
          <div className="page-text">
            <p className="coming-soon-text">Coming Soon</p>
          </div>
        </div>
      ),
    },
  ]

  const goToPage = (index) => {
    if (index >= 0 && index < pages.length) {
      setDirection(index > currentPage ? "forward" : "backward")
      setCurrentPage(index)
      setIsMenuOpen(false)
    }
  }

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection("forward")
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection("backward")
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextPage()
      if (e.key === "ArrowLeft") prevPage()
      if (e.key === "Escape") setIsMenuOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          from { transform: translateX(2rem); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromLeft {
          from { transform: translateX(-2rem); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .page-forward {
          animation: fadeIn 0.5s ease-out, slideInFromRight 0.5s ease-out;
        }
        
        .page-backward {
          animation: fadeIn 0.5s ease-out, slideInFromLeft 0.5s ease-out;
        }

        .container {
          position: relative;
          min-height: 100vh;
          background-color: white;
        }

        .menu-button {
          position: fixed;
          right: 1.5rem;
          top: 1.5rem;
          z-index: 40;
          border-radius: 0.75rem;
          padding: 0.875rem;
          color: oklch(0.2 0.01 85);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
        }

        .menu-button:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8));
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
          transform: translateY(-2px);
        }

        .sidebar {
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 50;
          width: 20rem;
          background-color: white;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s;
          transform: translateX(100%);
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid oklch(0.88 0.01 85);
          padding: 1.5rem;
        }

        .sidebar-title {
          font-family: Georgia, serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: oklch(0.2 0.01 85);
        }

        .close-button {
          border-radius: 9999px;
          padding: 0.5rem;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          background-color: transparent;
          color: oklch(0.5 0.01 85);
        }

        .close-button:hover {
          background-color: oklch(0.96 0.01 85);
          color: oklch(0.2 0.01 85);
        }

        .sidebar-nav {
          overflow-y: auto;
          padding: 1.5rem;
          height: calc(100vh - 88px);
        }

        .chapter-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          list-style: none;
        }

        .chapter-button {
          width: 100%;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          text-align: left;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          background-color: transparent;
          color: oklch(0.5 0.01 85);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .chapter-button.active {
          background-color: oklch(0.96 0.01 85);
          color: oklch(0.2 0.01 85);
        }

        .chapter-button:not(.active):hover {
          background-color: oklch(0.98 0.005 85);
          color: oklch(0.2 0.01 85);
        }

        .overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          background-color: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
        }

        .page-content {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .cover-page {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
          text-align: center;
          width: 100%;
        }

        .cover-title {
          font-family: Georgia, serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: oklch(0.2 0.01 85);
        }

        .cover-author {
          margin-top: 2rem;
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          color: oklch(0.5 0.01 85);
        }

        .coming-soon-badge {
          margin-top: 3rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, oklch(0.96 0.01 85), oklch(0.94 0.01 85));
          border-radius: 2rem;
          font-size: 1.25rem;
          font-weight: 500;
          color: oklch(0.3 0.01 85);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .text-page {
          max-width: 42rem;
          margin: 0 auto;
          padding: 4rem 2rem 8rem 2rem;
          width: 100%;
        }

        .page-title {
          font-family: Georgia, serif;
          font-size: clamp(2.25rem, 5vw, 3rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: oklch(0.2 0.01 85);
        }

        .page-text {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.75;
          color: oklch(0.25 0.01 85);
        }

        .coming-soon-text {
          text-align: center;
          font-family: Georgia, serif;
          font-size: 2rem;
          color: oklch(0.5 0.01 85);
          font-style: italic;
          padding: 4rem 0;
        }

        .navigation {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          z-index: 30;
          display: flex;
          align-items: center;
          gap: 1rem;
          transform: translateX(-50%);
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          padding: 0.75rem 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-button {
          border-radius: 0.5rem;
          padding: 0.5rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          background-color: transparent;
        }

        .nav-button:disabled {
          cursor: not-allowed;
          opacity: 0.3;
        }

        .nav-button:not(:disabled):hover {
          background-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.1);
        }

        .page-counter {
          min-width: 5rem;
          text-align: center;
          font-size: 0.875rem;
          color: oklch(0.5 0.01 85);
        }
      `}</style>

      <div className="container">
        {/* Menu Button */}
        <button className="menu-button" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Menu style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>

        {/* Sidebar Menu */}
        <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h3 className="sidebar-title">Chapters</h3>
            <button className="close-button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X style={{ width: "1.5rem", height: "1.5rem" }} />
            </button>
          </div>

          <nav className="sidebar-nav">
            <ul className="chapter-list">
              {pages.map((page, index) => (
                <li key={page.id}>
                  <button
                    className={`chapter-button ${currentPage === index ? "active" : ""}`}
                    onClick={() => goToPage(index)}
                  >
                    {page.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}

        {/* Page Content */}
        <div className="page-content">
          <div key={currentPage} className={direction === "forward" ? "page-forward" : "page-backward"}>
            {pages[currentPage].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation">
          <button
            className="nav-button"
            onClick={prevPage}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            <ChevronLeft style={{ width: "1.25rem", height: "1.25rem" }} />
          </button>

          <span className="page-counter">
            {currentPage + 1} / {pages.length}
          </span>

          <button
            className="nav-button"
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            aria-label="Next page"
          >
            <ChevronRight style={{ width: "1.25rem", height: "1.25rem" }} />
          </button>
        </div>
      </div>
    </>
  )
}
