module.exports = {
    pages: {
        index: {
            entry: 'src/Views/Home/main.js',
            title: 'Index Page',
            filename: 'home.html'
        },
        mystats: {
            entry: 'src/Views/MyStats/main.js',
            title: 'MyStats',
            filename: 'MyStats.html'
        },
        mymenu: {
            entry: 'src/Views/MyCollegues/main.js',
            title: 'MyCollegues',
            filename: 'MyCollegues.html'
        }
    },
    devServer:  {
        historyApiFallback: {
            rewrites: [
                { from: /\home/, to: '/home.html' },
                { from: /\/mystats/, to: '/MyStats.html' },
                { from: /\/mymenu/, to: '/MyCollegues.html' }

            ]
        }
    }
}

