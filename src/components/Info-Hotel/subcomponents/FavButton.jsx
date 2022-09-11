import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { toogleFavorite } from '../../../api';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes({ isFavorite, user_id, location_id }) {
  const [favoriteState, setFavoriteState] = useState(isFavorite ?? false);
  const [isDisabled, setIsDisabled] = useState(!user_id);

  const changeFavorite = () => {
    setIsDisabled(true);
    setFavoriteState(!favoriteState);
    toogleFavorite(user_id, location_id).then((res) => {
      setFavoriteState(res.data.isFavorite);
    }).catch(() => {
      setFavoriteState(!favoriteState);
    }).finally(() => {
      setIsDisabled(false);
    });
  }

  return (
    <div>
      <Checkbox
        {...label}
        checked={favoriteState}
        onClick={() => changeFavorite()}
        disabled={isDisabled}
        icon={<FavoriteBorder sx={{ width: '50px', height: '50px' }} />}
        checkedIcon={<Favorite sx={{ width: '50px', height: '50px' }} />} />
    </div>
  );
}
