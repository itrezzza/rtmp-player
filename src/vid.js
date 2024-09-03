import React, { Component } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-flash";

export default class VideoJs extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { videoUrl } = this.props;

        const videoJsOptions = {
            aspectRatio: "16:9",
            autoplay: true,
            controls: true,
            techOrder: ["flash"],
            flash: {
                swf:
                    "https://unpkg.com/@brightcove/videojs-flashls-source-handler/dist/video-js.swf"
            },
            sources: [
                {
                    src: videoUrl
                }
            ]
        };
        console.log("videoJsOptions", videoJsOptions);
        // instantiate Video.js
        this.player = videojs(
            this.videoNode,
            videoJsOptions,
            function onPlayerReady() {
                console.log("onPlayerReady", this);
            }
        );
        console.log(this.player);
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video
                        ref={node => (this.videoNode = node)}
                        className="video-js"
                    />
                </div>
            </div>
        );
    }
}
