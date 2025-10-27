import React from 'react'
import LogoMarquee from './LogoMarquee'
import './styles/Home.css'
function Home() {
  return (
    <>
      <div className="hero-section">
  <div className="lft">
    <div className="announcement-badge">
      <span className="emoji">🎉</span>
      <div className="badge-content">
        <span className="badge-title">We just hit 5M users!</span>
        <span className="badge-subtitle">Read the announcement post.</span>
      </div>
      <span className="arrow">→</span>
    </div>

    <h1 className="Home-heading">
      Meet Turb
      <span className="turbo-o">
        o
        <img 
          src="https://assets.api-turbo.ai/website/turboHero.webp" 
          alt="Turbo AI mascot" 
          className="mascot-img"
        />
      </span>
    </h1>

    <h2 className="subheading1">
      Turn anything into notes, flashcards, quizzes, and more.
    </h2>

    <div className="cta-wrapper">
      <button className="cta-button">
        <h4>Get Started - It's Free</h4>
      </button>
    </div>
  </div>

  <div className="right">
    <div className="notes-card">
      <div className="notes-content">
        <div className="note-title">📚 Lecture 5: Cellular Biology</div>
        
        <p className="note-text">The cell theory is one of the fundamental principles of biology. It states that:</p>
        
        <div className="bullet-point">
          <span className="bullet">•</span>
          <span>All living organisms are composed of one or more cells</span>
        </div>
        <div className="bullet-point">
          <span className="bullet">•</span>
          <span>The cell is the basic unit of life</span>
        </div>
        <div className="bullet-point">
          <span className="bullet">•</span>
          <span>All cells arise from pre-existing cells</span>
        </div>

        <div className="section-title">🧬 Types of Cells</div>
        
        <p className="note-text">There are two major types of cells, distinguished by their structural organization:</p>

        <div className="cell-images">
          <div className="cell-item">
            <img src="https://assets.api-turbo.ai/website/prokaryote_cell.svg" alt="Prokaryotic Cell" />
            <span>Prokaryotic Cell</span>
          </div>
          <div className="cell-item">
            <img src="https://assets.api-turbo.ai/website/eukaryote.png" alt="Eukaryotic Cell" />
            <span>Eukaryotic Cell</span>
          </div>
        </div>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Prokaryotic</th>
              <th>Eukaryotic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nucleus</td>
              <td>No membrane-bound nucleus</td>
              <td>Membrane-bound nucleus</td>
            </tr>
            <tr>
              <td>DNA</td>
              <td>Freely in cytoplasm</td>
              <td>Enclosed in nucleus</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>1-10 μm</td>
              <td>10-100 μm</td>
            </tr>
            <tr>
              <td>Examples</td>
              <td>Bacteria, archaea</td>
              <td>Plants, animals, fungi</td>
            </tr>
          </tbody>
        </table>

        <div className="divider"></div>

        <div className="section-title">🏗️ Cell Structure & Organelles</div>
        
        <p className="note-text">Eukaryotic cells contain specialized structures called organelles, each with specific functions:</p>

        <div className="subsection-title">Key Organelles</div>

        <div className="bullet-point">
          <span className="bullet">•</span>
          <span>Nucleus - Controls cell activities and contains genetic material</span>
        </div>
        <div className="bullet-point">
          <span className="bullet">•</span>
          <span>Mitochondria - Powerhouse of the cell, produces ATP through cellular respiration</span>
        </div>

        <div className="formula-box">
          <div className="formula-label">Cellular Respiration</div>
          <div className="formula">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP</div>
        </div>

        <div className="bullet-point">
          <span className="bullet">•</span>
          <span>Endoplasmic Reticulum - Protein and lipid synthesis</span>
        </div>
        <div className="bullet-point">
          <span className="bullet">•</span>
          <span>Golgi Apparatus - Modifies, packages, and ships proteins</span>
        </div>

        <div className="divider"></div>

        <div className="section-title">💡 Key Concepts to Remember</div>
        
        <div className="highlight-box">
          Important: All organelles work together to maintain cellular homeostasis
        </div>
      </div>
    </div>
  </div>

</div>

    </>
    
  )
  
}

export default Home;
