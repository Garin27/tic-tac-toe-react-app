import React from 'react';
import { PlayerWrapper } from './Player.styled';
import Avatar from 'react-nice-avatar';
import { Text } from '../../styles/General.styled';

function Player({ player, isPlayerActive }) {
  const updatedAvatarConfig = {
    ...player.avatarConfig,
    style: {
      ...player.avatarConfig.style,
      width: '8rem',
      height: '8rem',
    },
    bgColor: player.color,
  };

  return (
    <PlayerWrapper isPlayerActive={isPlayerActive ?? false}>
      <Avatar {...updatedAvatarConfig} />
      <Text>
        {player.name} ({player.choice})
      </Text>
      <Text>{player.score}</Text>
    </PlayerWrapper>
  );
}

export default Player;