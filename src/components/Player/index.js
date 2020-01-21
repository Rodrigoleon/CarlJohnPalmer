import React from 'react';

// Styles
import PlayerWrap from './styles';

const Player = () => (
  <PlayerWrap>
    <audio src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-4-31/16246283-44100-2-010c909c46fa5.m4a">
      <track default kind="captions" srclang="en" src="/podcast.vtt" />
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  </PlayerWrap>
);

export default Player;
