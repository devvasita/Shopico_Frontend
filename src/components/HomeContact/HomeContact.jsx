import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material';


const HomeContact = () => {
    return (
        <>
            <Container sx={{ my: 8 }} >

                <Box >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3670.4474697518954!2d72.56322107350975!3d23.080709914159613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA0JzUwLjUiTiA3MsKwMzMnNTYuOSJF!5e0!3m2!1sen!2sin!4v1755069155852!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Box>


                <Paper sx={{ p: 3, mt: 4 }}>

                    <Grid container spacing={4}  >
                        <Grid item size={6} >

                            <Typography variant='h3' color='primary' gutterBottom>
                                Contact Us
                            </Typography>


                            <Typography variant='subtitle1' component='p' gutterBottom>
                                We’d love to hear from you! For any queries, support, or feedback, just reach out and our team will respond quickly.
                            </Typography>



                            <Typography variant='h5' color='text.secondary' gutterBottom>
                                USA
                            </Typography>

                            <Typography variant='subtitle1' component='p' gutterBottom>
                                195 E Parker Square Dr, Parker, CO 801<br></br>
                                +43 982-314-0958
                            </Typography>


                            <Typography variant='h5' color='text.secondary' gutterBottom>
                                India
                            </Typography>

                            <Typography variant='subtitle1' component='p' gutterBottom>
                                HW95+C9C, Pune, MH 411014 <br></br>
                                +91 98765 43210
                            </Typography>



                        </Grid>
                        <Grid item size={6} display="flex" flexDirection="column" gap={6} alignItems='start'>

                            {/* text field for name and email */}
                            <Stack direction="row" justifyContent='space-between' gap={3} alignSelf={'stretch'}>
                                <TextField label="Name" placeholder='Enter your Name' fullWidth />

                                <TextField label="Email" placeholder='Enter your Email' fullWidth />
                            </Stack>


                            {/*text field for message  */}
                            <TextField
                                label="Your Message"
                                placeholder='Enter Your Messge'
                                multiline
                                rows={4}
                                maxRows={8}
                                variant="outlined"
                                fullWidth
                            />


                            <Button fullWidth={false} variant='contained'>
                                Send Message
                            </Button>




                        </Grid>



                    </Grid>

                </Paper>

            </Container >
        </>
    );
};

export default HomeContact;