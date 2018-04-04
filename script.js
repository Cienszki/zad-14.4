/*var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h2', {}, this.props.image.name),
                React.createElement('img', {src: this.props.image.src})
            )
        );
    }
});

var image = {
    name: 'Obrazek',
    src: 'bambo.jpg'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));


-------------------------------------------------------------*/

var movies = [
    {
        id: 1,
        title: 'Film o pszczołach',
        desc: 'Taki film że są pszczoły',
        img: 'bee.jpg'
    },
    {
        id: 2,
        title: 'Bambo',
        desc: 'Obywatel Kamerunu ratuje wioske przed zdziczałym jeleniem',
        img: 'bambo.jpg'
    },
    {
        id: 3,
        title: 'Zemsta faraona',
        desc: 'Kapitan Bomba musi ocalić ludzkość przed starożytnymi wojownikami.',
        img: 'zemsta.jpg'
    }
];
var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            movies.map(function(movie) {
                return React.createElement('li', {}, 
                    React.createElement('h2', {}, movie.title),
                    React.createElement('p', {}, movie.desc),
                    React.createElement('img', {src:movie.img})
                    );
                }
            ) 
        );
    }
});
    


var element = React.createElement(Movie, {key: movies.id, movies: movies});
ReactDOM.render(element, document.getElementById('app'));





/*
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src:movie.img})
        );
});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)    
);

ReactDOM.render(element, document.getElementById('app'));*/
