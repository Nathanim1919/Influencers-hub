import {NotifcationContanier} from '../assets/styledComponents/notificationStyle';
import { IoMdNotificationsOutline } from "react-icons/io";


export const Notification: React.FC = () => {
    const notifications = [
        {
            id: 1,
            title: "New Collaboration Opportunity",
            message: "Congratulations! You have a new collaboration opportunity with Brand X. Check it out now!",
            timestamp: "2 hours ago"
        },
        {
            id: 2,
            title: "Brand X Campaign Update",
            message: "Brand X campaign has been extended. Make sure to submit your content by the new deadline.",
            timestamp: "1 day ago"
        },
        {
            id: 3,
            title: "New Message from Brand Y",
            message: "Brand Y has sent you a new message. Log in to your account to read and respond.",
            timestamp: "3 days ago"
        },
        {
            id: 4,
            title: "Upcoming Webinar",
            message: "Join our upcoming webinar on 'Effective Influencer Marketing Strategies'. Register now!",
            timestamp: "1 week ago"
        },
        {
            id: 5,
            title: "New Brand Partnership",
            message: "Congratulations! You have been selected for a brand partnership with Brand Z. Get started now!",
            timestamp: "2 weeks ago"
        },
        {
            id: 6,
            title: "Campaign Performance Report",
            message: "Your recent campaign with Brand A has generated impressive results. Check out the performance report.",
            timestamp: "3 weeks ago"
        },
        {
            id: 7,
            title: "New Collaboration Opportunity",
            message: "Brand B is looking for influencers to collaborate on their upcoming product launch. Apply now!",
            timestamp: "1 month ago"
        },
        {
            id: 8,
            title: "Important Account Update",
            message: "Please update your payment information to ensure uninterrupted service.",
            timestamp: "2 months ago"
        },
        {
            id: 9,
            title: "New Brand Partnership",
            message: "You have been selected as a brand ambassador for Brand C. Start promoting their products now!",
            timestamp: "3 months ago"
        },
        {
            id: 10,
            title: "Campaign Feedback",
            message: "Brand D has provided feedback on your recent campaign. Log in to view the feedback and make improvements.",
            timestamp: "4 months ago"
        }
    ];

    return (
        <NotifcationContanier className="notifcationContanier">
            <div className="header">
                <h1>Notifications</h1>
                <p>Your Notifications</p>
            </div>
            <div className="notifications">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification">
                        <h2><IoMdNotificationsOutline/>{notification.title}</h2>
                        <p>{notification.message}</p>
                        <span>{notification.timestamp}</span>
                    </div>
                ))}
            </div>
        </NotifcationContanier>
    )
};