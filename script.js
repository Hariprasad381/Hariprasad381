document.getElementById('genreForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // List of movies categorized by genres
    const movies = {
        action: ['Mad Max: Fury Road', 'John Wick', 'The Dark Knight'],
        comedy: ['The Grand Budapest Hotel', 'Superbad', 'Groundhog Day'],
        drama: ['The Shawshank Redemption', 'Forrest Gump', 'Parasite'],
        horror: ['Get Out', 'The Conjuring', 'Hereditary'],
        sciFi: ['Inception', 'Blade Runner 2049', 'Interstellar']
    };

    // Get user input
    const genreInput = document.getElementById('genre').value.toLowerCase();

    // Get a random movie from the specified genre
    const genreMovies = movies[genreInput];
    const recommendationDiv = document.getElementById('recommendation');

    if (genreMovies) {
        const randomMovie = genreMovies[Math.floor(Math.random() * genreMovies.length)];
        recommendationDiv.textContent = `We recommend you watch: ${randomMovie}`;
    } else {
        recommendationDiv.textContent = 'Sorry, we don\'t have recommendations for that genre.';
    }
});

