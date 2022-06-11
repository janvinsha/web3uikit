import { FC } from 'react';
import { TIconProps } from '../type';
const FileIcon: FC<TIconProps> = ({
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
        <title>file icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.75905 2.77432C5.24506 2.27853 5.90423 2 6.59155 2H12.9014C13.1106 2 13.3112 2.08477 13.4591 2.23566L19.769 8.67244C19.9169 8.82333 20 9.02799 20 9.24138V19.3563C20 20.0575 19.727 20.7299 19.241 21.2257C18.7549 21.7215 18.0958 22 17.4085 22H6.59155C5.90423 22 5.24506 21.7215 4.75905 21.2257C4.27304 20.7299 4 20.0575 4 19.3563V4.64368C4 3.94253 4.27304 3.2701 4.75905 2.77432ZM6.59155 3.6092C6.3226 3.6092 6.06466 3.71819 5.87448 3.91219C5.68431 4.10619 5.57746 4.36932 5.57746 4.64368V19.3563C5.57746 19.6307 5.68431 19.8938 5.87448 20.0878C6.06466 20.2818 6.3226 20.3908 6.59155 20.3908H17.4085C17.6774 20.3908 17.9353 20.2818 18.1255 20.0878C18.3157 19.8938 18.4225 19.6307 18.4225 19.3563V9.57465L12.5747 3.6092H6.59155Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9014 2C13.337 2 13.6901 2.36023 13.6901 2.8046V8.43678H19.2113C19.6469 8.43678 20 8.79701 20 9.24138C20 9.68575 19.6469 10.046 19.2113 10.046H12.9014C12.4658 10.046 12.1127 9.68575 12.1127 9.24138V2.8046C12.1127 2.36023 12.4658 2 12.9014 2Z"
            fill={fill}
        />
    </svg>
);
export default FileIcon;
