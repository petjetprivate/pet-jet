import React from 'react';
import { Container, Grid } from '@mui/material';





function usefulInfo() {

    return (

        <div className='pdf'>
            <Container>
                <h4>Important Documents</h4>
                <Grid className='pdf-Doc'>

                    <a href="../pdf/agreement.pdf" download>
                        Download Charter Agreement📮</a>
                </Grid>

                <Grid className='pdf-Doc'>
                    <a href="../pdf/sample.pdf" download>
                        Download Sample Itinerary📮</a>
                </Grid>
            </Container>
        </div>


    )

}

export default usefulInfo;