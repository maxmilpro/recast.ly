// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App videos={exampleVideoData} searchYouTube={searchYouTube}/>, document.getElementById('app'));