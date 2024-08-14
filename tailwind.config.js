tailwind.config={
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit, minmax(200px, 1fr))'
            },
            colors:{
                darkTheme: '#1a012e',
            },
            backgroundImage: {
                'hero': "url('./images/work-1.png')",
            }
        }
    },
    darkMode: 'selector'
}