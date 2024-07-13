import classNames from 'classnames/bind';
import styles from './VideoContent.module.scss';
import { MuteIcon, PauseIcon, PlayIcon, UnmuteIcon } from '../Icons';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useElementVisibleOnScreen } from '~/hooks';

const cx = classNames.bind(styles);

const VideoContent = forwardRef(({ src, size, isSingleVideo, singleControl }, ref) => {
    const videoRef = useRef();
    const [isPlaying, setPlaying] = useState(true);
    const [isMute, setMute] = useState(true);

    const optionRoot = {
        root: null,
        margin: '0px',
        threshold: 0.7,
    };

    const isVisible = useElementVisibleOnScreen(optionRoot, videoRef);

    useEffect(() => {
        if (isVisible) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(() => {});
                setPlaying(true);
            }
        } else {
            if (!videoRef.current.paused) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisible]);

    useImperativeHandle(ref, () => {
        return {
            playVideo: handlePlayVideo,
        };
    });

    const handlePlayVideo = (e) => {
        e.preventDefault();
        if (isPlaying) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const handleMuteVideo = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
            <video
                className={cx('video-item', {
                    [isSingleVideo]: isSingleVideo,
                })}
                src={src}
                autoPlay
                ref={videoRef}
                muted={isMute}
                loop
            />
            <div
                className={cx('controls-video', {
                    singleControl: singleControl,
                })}
            >
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
});

VideoContent.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    isSingleVideo: PropTypes.string,
    singleControl: PropTypes.bool,
};

export default VideoContent;
