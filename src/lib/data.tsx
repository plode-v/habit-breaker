export const sampleData = {
    labels: ['habit 1', 'habit 2', 'habit 3'],
    datasets: [
        {
            label: "Days Resisted",
            bgColor: "blue-500",
            borderColor: 'blue-700',
            borderWidth: '1px',
            data: [15, 10, 20, 5]
        }
    ]
};

export const sidebarMenu = [
    {
        id: 1,
        name: "home",
        link: '/dashboard',
        icon: null
    },
    {
        id: 2,
        name: "Habits",
        link: '/habits',
        icon: null
    },
    {
        id: 3,
        name: "Profile",
        link: '/profile',
        icon: null
    },
    {
        id: 4,
        name: "settings",
        link: '/settings',
        icon: null
    },
    {
        id: 5,
        name: "logout",
        link: '/sign-out',
        icon: null
    }
]

import { PiNotePencilBold } from 'react-icons/pi'
import { RiMentalHealthFill } from "react-icons/ri"
import { HiMiniRocketLaunch } from "react-icons/hi2"

export const features = [
    {
        animation: <PiNotePencilBold />,
        feature: "Personalized Habit Tracking",
        description: "Enables personalized goal-setting, progress tracking, and insightful habit-breaking stats."
    },
    {
        animation: <RiMentalHealthFill />,
        feature: "Accountability",
        description: "Encourages accountability, making it easier to stay committed to your goals and resist old habits."
    },
    {
        animation: <HiMiniRocketLaunch />,
        feature: "Enhanced Productivity",
        description: "Overcome procastination and distractions. Achieve more, faster!"
    }
]