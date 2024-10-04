import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            siebar
            <div className="dashboard-content">
                topbar
                <div className="dashboard-page">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
