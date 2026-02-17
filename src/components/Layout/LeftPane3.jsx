import { useState, useEffect, useRef } from 'react';
import { FaBars, FaHome, FaGraduationCap, FaBriefcase, FaCode, FaAward, FaFileAlt, FaMicrophone, FaImages, FaEnvelope } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import profile from '../../assets/profile.jpg';
import './LeftPane.css';

const LeftPane = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 768);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const leftPaneRef = useRef(null);

  const menuItems = [
    { id: 'about', label: 'About Me', icon: <FaHome />, color: '#bd5d38' },
    { id: 'education', label: 'Education', icon: <FaGraduationCap />, color: '#8b4513' },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase />, color: '#a54f2e' },
    { id: 'skills', label: 'Technical Skills', icon: <FaCode />, color: '#c9754e' },
    { id: 'awards', label: 'Awards & Honors', icon: <FaAward />, color: '#d88c6a' },
    { id: 'publications', label: 'Publications', icon: <FaFileAlt />, color: '#bd5d38' },
    { id: 'talks', label: 'Talks', icon: <FaMicrophone />, color: '#8b4513' },
    { id: 'pictures', label: 'Photo Gallery', icon: <FaImages />, color: '#a54f2e' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, color: '#c9754e' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          navRef.current && 
          !navRef.current.contains(event.target) && 
          toggleRef.current && 
          !toggleRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div 
      ref={leftPaneRef}
      className={`left-pane ${isExpanded ? 'expanded' : 'collapsed'}`}
    >
      {/* Expand/Collapse Toggle */}
      <button 
        className="expand-toggle"
        onClick={toggleExpand}
        aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        <div className="toggle-icon">
          {isExpanded ? '‹' : '›'}
        </div>
      </button>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src={profile} 
            alt="Ravi Kumar Bandapelli" 
            className="profile-pic" 
            loading="lazy"
          />
          {isExpanded && (
            <div className="profile-status">
              <div className="status-dot online"></div>
              <span className="status-text">Available</span>
            </div>
          )}
        </div>

        <div className={`profile-info ${isExpanded ? 'visible' : 'hidden'}`}>
          <h2 className="profile-name">Ravi Kumar Bandapelli</h2>
          <p className="profile-title">Experimental Physicist</p>
          <div className="profile-tags">
            <span className="profile-tag">Spintronics</span>
            <span className="profile-tag">2D Materials</span>
            <span className="profile-tag">Thin Films</span>
          </div>
        </div>

        {/* Mobile Initials */}
        {!isExpanded && (
          <div className="profile-initials">
            {getInitials("Ravi Kumar Bandapelli")}
          </div>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <button 
        ref={toggleRef}
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <IoMdClose /> : <FaBars />}
      </button>

      {/* Navigation Menu */}
      <nav 
        ref={navRef}
        className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''} ${isExpanded ? 'expanded-nav' : 'collapsed-nav'}`}
      >
        <div className="nav-header">
          {isExpanded && <h3 className="nav-title">Navigation</h3>}
          {!isExpanded && !isMobileMenuOpen && (
            <div className="nav-mini-title">Menu</div>
          )}
        </div>

        <div className="nav-items">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''} ${activeHover === item.id ? 'hover' : ''}`}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => setActiveHover(item.id)}
              onMouseLeave={() => setActiveHover(null)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <div 
                className="nav-icon"
                style={{ 
                  backgroundColor: activeSection === item.id ? item.color : 'transparent',
                  borderColor: item.color
                }}
              >
                {item.icon}
              </div>
              
              {isExpanded && (
                <span className="nav-label">{item.label}</span>
              )}

              {activeSection === item.id && isExpanded && (
                <div 
                  className="active-indicator"
                  style={{ backgroundColor: item.color }}
                ></div>
              )}

              {/* Tooltip for collapsed state */}
              {!isExpanded && !isMobileMenuOpen && (
                <div className="nav-tooltip">
                  {item.label}
                  <div className="tooltip-arrow"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        {isExpanded && (
          <div className="nav-progress">
            <div className="progress-label">
              <span>Profile Completion</span>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: '85%', backgroundColor: '#bd5d38' }}
              ></div>
            </div>
          </div>
        )}

        {/* Contact Info */}
        {isExpanded && (
          <div className="contact-info">
            <h4 className="contact-title">Quick Contact</h4>
            <div className="contact-links">
              <a href="mailto:ravi@example.com" className="contact-link">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">ravi@example.com</span>
              </a>
              <a href="tel:+1234567890" className="contact-link">
                <span className="contact-icon">📱</span>
                <span className="contact-text">+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Social Links */}
      {isExpanded && (
        <div className="social-links">
          <a href="#" className="social-link" aria-label="LinkedIn">
            <div className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </a>
          <a href="https://www.facebook.com/ravisri.phy" className="social-link" aria-label="Facebook">
            <div className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="social-link" aria-label="GitHub">
            <div className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="social-link" aria-label="Google Scholar">
            <div className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C22.592 11.592 24 10.169 24 8.5c0-3.59-3.582-6.5-8-6.5s-8 2.91-8 6.5c0 1.669 1.408 3.092 3.242 5.269L12 19.5l-6.758-5.731z"/>
              </svg>
            </div>
          </a>
        </div>
      )}

      {/* Copyright */}
      {isExpanded && (
        <div className="copyright">
          <p>© {new Date().getFullYear()} Ravi Kumar Bandapelli</p>
          <p className="copyright-sub">All rights reserved</p>
        </div>
      )}
    </div>
  );
};

export default LeftPane;