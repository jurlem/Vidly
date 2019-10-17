import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faGrinHearts} from '@fortawesome/free-solid-svg-icons';

const Like = props => {
  const styles = {
    cursor: 'pointer',
  };
  return (
    <FontAwesomeIcon
      icon={props.liked ? faGrinHearts : faHeart}
      onClick={props.onLike}
      style={styles}
    />
  );
};

export default Like;
