import { FC } from 'react';
import { TIconProps } from '../type';
const BinIcon: FC<TIconProps> = ({
    fill = 'currentColor',
    size = 18,
    style,
}) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>bin icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99998 3.50549C9.8619 3.50549 9.74998 3.61742 9.74998 3.75549V4.51006H14.25V3.75549C14.25 3.61742 14.138 3.50549 14 3.50549H9.99998ZM15.75 4.51006V3.75549C15.75 2.78899 14.9665 2.00549 14 2.00549H9.99998C9.03348 2.00549 8.24998 2.78899 8.24998 3.75549V4.51006L4.75011 4.50993C4.3359 4.50991 4.00009 4.84567 4.00006 5.25988C4.00003 5.6741 4.33579 6.00992 4.75002 6.00996L5.24998 6.01V20.2579C5.24998 21.2244 6.03348 22.0079 6.99998 22.0079H17C17.9665 22.0079 18.75 21.2244 18.75 20.2579V6.01006H19.2501C19.6643 6.01006 20.0001 5.67427 20.0001 5.26006C20.0001 4.84585 19.6643 4.51006 19.2501 4.51006H15.75ZM17.25 6.01006H6.74998V20.2579C6.74998 20.396 6.8619 20.5079 6.99998 20.5079H17C17.138 20.5079 17.25 20.396 17.25 20.2579V6.01006ZM10.0001 18.4999C9.58585 18.4999 9.25006 18.1641 9.25006 17.7499V9.24988C9.25006 8.83566 9.58585 8.49988 10.0001 8.49988C10.4143 8.49988 10.7501 8.83566 10.7501 9.24988V17.7499C10.7501 18.1641 10.4143 18.4999 10.0001 18.4999ZM14.0001 18.4999C13.5858 18.4999 13.2501 18.1641 13.2501 17.7499V9.24988C13.2501 8.83566 13.5858 8.49988 14.0001 8.49988C14.4143 8.49988 14.7501 8.83566 14.7501 9.24988V17.7499C14.7501 18.1641 14.4143 18.4999 14.0001 18.4999Z"
            fill={fill}
        />
    </svg>
);
export default BinIcon;
