import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videoList: [
        {id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}},
        {id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}},
        {id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}},
        {id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}},
        {id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}}],
      currentVideo: {id: {videoId: ''}, snippet: {title: '', description: '', thumbnails: {default: {url: ''}}}}
    };
  }

  handleClick(event) {
    var clickedVideoTitle = event.currentTarget.innerHTML;
    for (var i = 0; i < this.state.videoList.length; i++) {
      var currentVideo = this.state.videoList[i];
      if (currentVideo.snippet.title === clickedVideoTitle) {
        this.setState({currentVideo: currentVideo});
        break;
      }
    }
  }

  componentDidMount () {
    var options = {
      key: YOUTUBE_API_KEY,
      q: 'react tutorial',
      part: 'snippet',
      maxResults: 5,
      videoEmbeddable: true,
      type: 'video'
    };

    var callback = (data) => {
      var videos = data.items === undefined ? data : data.items;
      this.setState({videoList: videos, currentVideo: videos[0]});
    };
    this.props.searchYouTube(options, callback);
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} click={(event) => this.handleClick(event)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
