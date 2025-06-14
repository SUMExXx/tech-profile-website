import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
// import SDLogo from '/icons/sd.svg';

const Logo = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} viewBox="0 0 100 100">
            {/* <SDLogo/> */}
            <svg width="1574" height="822" viewBox="0 0 1574 822" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1160.84 12.9261L1157.91 10H1153.77H48.9131H24.8054L41.8349 27.0639L424.995 411L41.8349 794.936L24.8054 812H48.9131H1153.77H1157.91L1160.84 809.074L1552.15 418.074L1559.23 411L1552.15 403.926L1160.84 12.9261Z" fill="#00C2FF" stroke="white" strokeWidth="20" />
                <path d="M1138.41 58H138.913L491.913 411.5L138.913 765H1138.41L1492.41 411.5L1138.41 58Z" fill="#FF007A" stroke="black" strokeOpacity="0.5" strokeWidth="5" />
                <path d="M734.913 88.5H212.413L566.986 442.5H785.413V674.5H357.413L542.413 489.5L499.913 447L212.413 734.5H1125.41L1448.41 411.5L1124.91 88.5H785.413V382.5H591.913L357.913 148.5H734.913V88.5Z" fill="#05FF00" stroke="black" strokeOpacity="0.5" strokeWidth="5" />
                <path d="M1099.91 148.5H845.413V674.5H1099.41L1362.41 411L1099.91 148.5Z" fill="#FF007A" stroke="black" strokeOpacity="0.5" strokeWidth="5" />
            </svg>
        </SvgIcon>
    );
}

export default Logo;