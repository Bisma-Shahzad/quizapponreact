import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

function Option(props) {
    const { data, optionClick } = props
    return (
        <Grid container>
            {data && Array.isArray(data) && data.length > 0 ? data.map((x, i) => {
                return (<Grid item md={6}>
                    <Button variant='contained' style={{ margin: '10px' }} onClick={() => optionClick(x)}>
                        {x}
                    </Button>
                </Grid>
                )
            })
                : console.log('jsaja')}
        </Grid>
    )
}

export default Option;