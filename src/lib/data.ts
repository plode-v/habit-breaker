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


export const features = [
    {
        animation: "lottie",
        feature: "Personalized Habit Tracking",
        description: "Allows you to set personalized goals, track progress, and view insightful statistics on your habit-breaking journey."
    },
    {
        animation: "",
        feature: "Accountability",
        description: "Creates a sense of accountability. When individuals record your progress, you're more likely to stick to your goals and resist the temptation to revert to your old habits."
    },
    {
        animation: "",
        feature: "Enhanced Productivity",
        description: "Overcome procastination and distractions. Achieve more, faster!"
    }
]