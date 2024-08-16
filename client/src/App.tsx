import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import { Home } from "./pages/Home";
import { routes } from "./config/routeConfig.ts";
import Register from "./pages/register";
import { BrandProfile } from "./pages/brandProfile.tsx";
import { InfluencerProfile } from "./pages/influencerProfile.tsx";
import { Sidebar } from "./components/influencerProfiles/sidebar.tsx";
import React from "react";
import styled from "styled-components";
import {Message} from "./pages/message.tsx";
import {Notification} from "./pages/notification.tsx";
import {PrivateRoute} from "./routes/privateRoute.tsx";
import CampaignList from "./pages/campaign.tsx";
import {InfluencerList} from "./pages/influencerList.tsx";
import {Influencers} from "./pages/influencers.tsx";

// Layout component for routes that require the Sidebar
const LayoutWithSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <RouteContainer>
        <Sidebar />
        {children}
    </RouteContainer>
);

function App() {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.auth.login} element={<Login />} />
            <Route path={routes.auth.register} element={<Register />} />

            {/* Brand Routes */}
            <Route
                path={routes.brand.home}
                element={
                <PrivateRoute>
                    <LayoutWithSidebar>
                        <BrandProfile />
                    </LayoutWithSidebar>
                </PrivateRoute>

                }
            />

            {/* Influencer Routes */}
            <Route
                path={routes.influencer.home}
                element={
                <PrivateRoute>
                    <LayoutWithSidebar>
                        <InfluencerProfile />
                    </LayoutWithSidebar>
                </PrivateRoute>
                }
            />



            {/* Common Routes */}
            <Route
                path={routes.commonRoutes.messages}
                element={
                <PrivateRoute>
                    <LayoutWithSidebar>
                        <Message />
                    </LayoutWithSidebar>
                </PrivateRoute>
                }
            />
            <Route
                path={routes.commonRoutes.notifications}
                element={
                <PrivateRoute>
                    <LayoutWithSidebar>
                        <Notification />
                    </LayoutWithSidebar>
                </PrivateRoute>
                }
            />

            <Route
                path={routes.commonRoutes.campaigns}
                element={
                    <PrivateRoute>
                        <LayoutWithSidebar>
                            <CampaignList />
                        </LayoutWithSidebar>
                    </PrivateRoute>
                }
            />

            <Route
                path={routes.commonRoutes.influencers}
                element={
                    <PrivateRoute>
                        <LayoutWithSidebar>
                            <Influencers />
                        </LayoutWithSidebar>
                    </PrivateRoute>
                }
            />
            <Route
                path={routes.commonRoutes.filterInfluencers}
                element={
                    <PrivateRoute>
                        <LayoutWithSidebar>
                            <InfluencerList />
                        </LayoutWithSidebar>
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default App;

export const RouteContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, max-content) 1fr;
    transition: all 1s ease-in-out;

    .sidebar {
        width: 70px; /* Initial width */
        transition: width .3s ease-in-out; /* Apply transition to width */
        a {
            span {
                /* display: none; */
                position: absolute;
                opacity: 0;
                transform: translateX(-100px);
                transition: all .3s ease-in-out;
            }
        }
    }

    .sidebar:hover {
        width: 200px;
        cursor: pointer;

        a {
            span {
                display: grid;
                position: relative;
                opacity: 1;
                transform: translateX(0px);
            }
        }
    }
`;
