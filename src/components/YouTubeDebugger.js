// Code YouTubeDebugger Component Here
import React, { Component } from 'react';
class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    setBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    setResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: `720p`
                }
            }
        })
    }




    render() {
        return (
            <div>
                <button onClick={this.setBitrate} className="bitrate">Bitrate = {this.state.settings.bitrate}</button>
                <button onClick={this.setResolution} className="resolution">Resolution = {this.state.settings.video.resolution}</button>
            </div>
        );
    }
}

export default YouTubeDebugger;