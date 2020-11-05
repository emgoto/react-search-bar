import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Search from './search';
import Announcer from './announcer';

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

const App = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <Router>
            <div className="App">
                <Announcer
                    message={`${filteredPosts.length} posts`}
                />
                <img src={logo} className="App-logo" alt="logo" />
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <ul role="region" aria-live="polite">
                    {filteredPosts.map((post) => (
                        <li key={post.id}>{post.name}</li>
                    ))}
                </ul>
            </div>
        </Router>
    );
};

export default App;
