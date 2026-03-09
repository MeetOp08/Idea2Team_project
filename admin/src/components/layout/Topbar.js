import React from 'react';

const Topbar = ({ collapsed = false, onToggle }) => {
    return (
        <header className={`topbar ${collapsed ? 'sidebar-collapsed' : ''}`}>
            <div className="topbar-left">
                <button className="topbar-toggle" onClick={onToggle}>
                    ☰
                </button>
          
            </div>

            <div className="topbar-right">
                <button className="topbar-icon-btn">
                    🔔
                    <span className="topbar-badge"></span>
                </button>
                <button className="topbar-icon-btn">
                    💬
                </button>
                <div className="topbar-user">
                    <div className="topbar-avatar">MP</div>
                    <span className="topbar-user-name">Meet Patel</span>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
