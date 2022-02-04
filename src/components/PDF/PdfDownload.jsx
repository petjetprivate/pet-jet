import React from 'react';
import { Container, Grid } from '@mui/material';





function usefulInfo() {

    return (

        <div>
            <Container>
                <Grid>

                    <a href="../pdf/agreement.pdf" download>
                        Download Charter Agreement📮</a>
                </Grid>

                <Grid>
                    <a href="../pdf/sample.pdf" download>
                        Download Sample Itinerary📮</a>
                </Grid>
            </Container>
        </div>


    )

}

export default usefulInfo;