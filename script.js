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
        movie: React.PropTypes.object.isRequired
    },
    render() {
        return (
            React.createElement('li', {}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDesc, {desc: this.props.movie.title}),
                React.createElement(MovieImage, {src: this.props.movie.src})
                    )
                );
            }
    });

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render() {
        return
            React.createElement('h2', {}, this.props.title);
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render() {
        return
            React.createElement('p', {}, this.prop.desc)
    }
});

var MovieImage = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired
    },
    render() {
        return
            React.createElement('img', {src: this.prop.src});
    }
});


var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render() {
        return
        this.props.movies.map(function(movie){
            return 
                React.createElement(Movie, {movie, key: movie.id});
        });
    }
});

var element = React.createElement(MovieList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));