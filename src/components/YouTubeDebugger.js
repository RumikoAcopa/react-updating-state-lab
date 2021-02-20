import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  settingBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings, 
        bitrate: 12
      }
    })
  }

  settingResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings, 
        video: {
          ...this.state.settings.video, 
          resolution: "720p"
        }
      }
    })
  }  

  render() {
    return(
      <div>
        <button onClick= {this.settingBitrate}
        className="bitrate">Change bitrate</button>

        <button onClick= {this.settingResolution}
        className="resolution">Change resolution</button>
      </div>
    )
  }

}


export default YouTubeDebugger
