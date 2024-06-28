import classNames from 'classnames/bind';
import styles from './VideoContent.module.scss';
import videoKay from '~/assets/videos/kay.mp4';
import { MuteIcon, PauseIcon, PlayIcon, UnmuteIcon } from '../Icons';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function VideoContent({ src = videoKay, size = '' }) {
    const videoRef = useRef();
    const [isPlaying, setPlaying] = useState(true);
    const [isMute, setMute] = useState(true);

    const handlePlayVideo = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const handleMuteVideo = () => {
        if (isMute) {
            videoRef.current.muted = false;
            setMute(false);
        } else {
            videoRef.current.muted = true;
            setMute(true);
        }
    };

    return (
        <div
            className={cx('group-video', {
                [size]: size,
            })}
        >
            <video className={cx('video-item')} src={src} autoPlay ref={videoRef} muted={isMute} loop />
            <div className={cx('controls-video')}>
                <div className={cx('playing')} onClick={handlePlayVideo}>
                    {isPlaying && <PlayIcon />}
                    {!isPlaying && <PauseIcon />}
                </div>
                <div className={cx('muting')} onClick={handleMuteVideo}>
                    {isMute && <MuteIcon />}
                    {!isMute && <UnmuteIcon />}
                </div>
            </div>
        </div>
    );
}

VideoContent.propTypes = {
    size: PropTypes.string,
};

export default VideoContent;
