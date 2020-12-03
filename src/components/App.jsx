import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
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
