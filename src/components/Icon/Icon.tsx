import { FC } from 'react';
import sprite from '../../assets/sprite.svg';
import { IIconProps } from '../../interfaces';

const Icon: FC<IIconProps> = ({
  className = '',
  iconName = '',
  width = '20px',
  height = '20px',
  fill = '#000000',
  stroke = 'inherit',
}) => {
  return (
    <svg
      className={`icon icon-${iconName} ${className}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
