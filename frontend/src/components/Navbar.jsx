import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <GraduationCap size={28} color="#00ff88" />
        EduGuide
      </Link>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
          Chat
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Courses
        </NavLink>
        <NavLink to="/fee-structure" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Fee Structure
        </NavLink>
        <NavLink to="/colleges" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Colleges
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
