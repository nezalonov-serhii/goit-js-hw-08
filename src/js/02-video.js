import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoVidio = document.getElementById('vimeo-player');

const player = new Player(vimeoVidio);
const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

if (localStorage.getItem(VIDEO_CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(VIDEO_CURRENT_TIME));
}

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(event) {
  localStorage.setItem(VIDEO_CURRENT_TIME, event.seconds);
}
