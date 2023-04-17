import PropTypes from 'prop-types';
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow: 'hidden',
    maxWidth: '100%',
    height: '20vh',
    display: 'flex',
    justifyContent: 'center',
}));

export default function ViewPage(props) {
    const listImages = props.images.map( (url, index) => (
        <Grid item xs={4} key={url}>
            <Item onClick={() => props.handleClick(url, props.type, index)}>
                <img src={url} />
            </Item>
        </Grid>
    ));
    return (
        <Box className="view-page" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {listImages}
            </Grid>
        </Box>
    );
}

ViewPage.propTypes = {
    type: PropTypes.string,
    handleClick: PropTypes.func,
    images: PropTypes.array,
};
