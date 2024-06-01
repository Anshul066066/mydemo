import React from 'react';

const TaskManager = () => {
    return (
        <div className="task-manager">
            <div className="left-bar">
                <div className="upper-part">
                    <div className="actions">
                        <div className="circle"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div className="left-content">
                    <ul className="action-list">
                        <li className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-inbox"
                                viewBox="0 0 24 24">
                                <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                                <path
                                    d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                            </svg>
                            <span>Inbox</span>
                        </li>
                        {/* Other list items */}
                    </ul>
                    <ul className="category-list">
                        <li className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-users">
                                {/* SVG path */}
                            </svg>
                            <span>Family</span>
                        </li>
                        {/* Other list items */}
                    </ul>
                </div>
            </div>
            <div className="page-content">
                <div className="header">Today Tasks</div>
                <div className="content-categories">
                    {/* Radio buttons */}
                </div>
                <div className="tasks-wrapper">
                    {/* Tasks */}
                </div>
            </div>
            <div className="right-bar">
                <div className="top-part">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-users">
                        {/* SVG path */}
                    </svg>
                    <div className="count">6</div>
                </div>
                <div className="header">Schedule</div>
                <div className="right-content">
                    {/* Task boxes */}
                </div>
            </div>
        </div>
    );
}

export default TaskManager;
