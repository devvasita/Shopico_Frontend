
import { useScrollTrigger, Slide } from '@mui/material';

function HideOnScroll({ children, window }) {
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: false

    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default HideOnScroll;
