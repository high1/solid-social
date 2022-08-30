import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utilities';
import type { Component } from 'solid-js';

export type PinterestBoardProps = {
  /** Pinterest link */
  pinterestLink: string;
  /** Width for the board */
  width?: number;
  /** Height for the board */
  height?: number;
  /** Size of the thumbnails */
  imageWidth?: number;
  /** The type of board */
  variant?: 'board' | 'user';
};

export const PinterestBoard: Component<PinterestBoardProps> = (props) => {
  const props_ = mergeProps(
    {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: 'board',
    },
    props
  );
  return (
    <GeneralObserver onEnter={handlePinterestBuild}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        class="pinterest-board"
        data-pin-do={`embed${props_.variant.charAt(0).toUpperCase()}${props_.variant.slice(1)}`}
        data-pin-board-width={props_.width}
        data-pin-scale-height={props_.height}
        data-pin-scale-width={props_.imageWidth}
        href={`//www.pinterest.com/${props_.pinterestLink}`}
      />
    </GeneralObserver>
  );
};
