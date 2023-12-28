module.exports = {
    pages: {
        Home: {
            entry: 'src/Views/Home/main.js',
            title: 'Home Page',
            filename: 'home.html'
        },
        Categories: {
            entry: 'src/Views/CatStats/main.js',
            title: 'Categories',
            filename: 'category.html'
        },
        Questionnaire: {
            entry: 'src/Views/Questionnaire/main.js',
            title: 'Questionnaire',
            filename: 'questionnaire.html'
        },
        WIP: {
            entry: 'src/Views/WIP/main.js',
            title: 'WIP',
            filename: 'wip.html'
        }
    },
    devServer:  {
        historyApiFallback: {
            rewrites: [
                { from: /\mymenu/, to: '/home.html' },
                { from: /\/category/, to: '/category.html' },
                { from: /\/category/, to: '/questionnaire.html' },
                { from: /\/wip/, to: '/wip.html' }

            ]
        }
    }
}

