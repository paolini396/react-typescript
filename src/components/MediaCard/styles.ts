import styled from 'styled-components';

import CardStyled from '@material-ui/core/Card';
import CardMediaStyled from '@material-ui/core/CardMedia';

export { default as Typography } from '@material-ui/core/Typography';
export { default as CardActions } from '@material-ui/core/CardActions';
export { default as CardContent } from '@material-ui/core/CardContent';
export { default as CardActionArea } from '@material-ui/core/CardActionArea';

export const Card = styled(CardStyled).attrs({})`
  &.MuiCard-root {
    max-width: 100%;
  }
`;

export const CardMedia = styled(CardMediaStyled).attrs({})`
  &.MuiCardMedia-root {
    height: 140px;
  }
`;

interface FavoriteButtonProps {
  isFavorite: boolean;
}

// color: #f4cd09

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  border: 0;
  padding: 10px;
  background: ${props => (props.isFavorite ? '#f4cd09' : '#c4c4c4')};
  border-radius: 8px;
  font-weight: 500;
`;
