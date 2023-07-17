  import React from 'react';
  import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
  import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
  import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

  // import jsonData from './data.json';


  function App() {
    const empData = [

      {

        "name": "John Doe",
        "position": "Software Engineer",
        "Employee ID": "124363",
        "Job ID": "12345",
        "DOB": "01/02/2001",
        "location": "San Francisco",
        "mobile": "123-456-7890",
        "email": "john.doe@example.com",
        "Date of Joining": "01/04/2023",
        "Skill Sets": "HTML, CSS",
        "experience":"1 yr",
        "Employee worked projects": "",
        "Vendor Name": "XYZZ",
        "status": "",

        "image": "https://avatars.githubusercontent.com/u/1?v=4"

      },
    ]

    return (

   <>

        {empData.map((employee, index) => (
          <Card
  sx={{
    width: '38%',
    height: '540px',
    transition: 'transform 0.3s ease',
    position: 'relative',
    // display: 'flex',
    backgroundColor: '#f1f1f1', // Add the desired color here
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px', // Add top margin
  }}
>
<CardContent    sx={{   backgroundColor: '#8BA2C5' , marginTop: '30px' }}>
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px', // Add some space between the box and data
    }}>
<Box
  sx={{
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    border: '2px solid black',
    overflow: 'hidden',
    flexShrink: 0,
    marginTop: '10px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <CardMedia
    component="img"
    image={employee.image}
    alt={employee.name}
    sx={{
      width: '145%',
      height: '145%',
      objectFit: 'cover',
      objectPosition: 'center'
    }}
  />
</Box>


<Box sx={{ marginLeft: '30px' }}>
<Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', color: 'black', fontWeight: 'bold' }}>
    {employee.name}
  </Typography>
  <Typography variant="subtitle1" color="text.secondary">
    {employee.position}
  </Typography>
  <Typography variant="h7" sx={{ display: 'flex', alignItems: 'center', color: 'black', fontWeight: '600' }}>    Employee ID: {employee['Employee ID']}
  </Typography>
    </Box>
    </Box>

</CardContent>
<Grid container spacing={2}sx={{ display: 'flex', marginTop: '30px' }}>
  <Grid item>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '20px'
      }}>
      <Typography variant="body2">
        Contact Details
      </Typography>
      <Typography variant="h7" sx={{ marginTop:2 ,display: 'flex', alignItems: 'center', color: 'black', fontWeight: 'bold' }}>
  <MailOutlineOutlinedIcon sx={{ marginRight: '4px' }} /> : {employee.email}
</Typography>

<Typography variant="h7" sx={{ display: 'flex', alignItems: 'center', color: 'black', fontWeight: 'bold' }}>
      <PhoneOutlinedIcon  sx={{ marginRight: '4px' }}/>: {employee.mobile}
      </Typography>
    </Box>
  </Grid>
  <Grid item sx={{ marginLeft: 'auto' }}>
    <Box
      sx={{
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: '80px',
      }}
    >
      <Typography variant="body2">
        Personal Details
      </Typography>
      <Typography variant="body2" sx={{marginTop:2}}>
      DOB: <span style={{ fontWeight: 'bold' }}>{employee.DOB}</span>
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Status: <span style={{ fontWeight: 'bold' }}>{employee.status}</span>
      </Typography>

    </Box>

    
  </Grid>
  <Grid item>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '20px',
        marginTop:'25px',
      }}
    >
      <Typography variant="body2">
        Other Details
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{marginTop:2}}>
        Date of Joining: <span style={{ fontWeight: 'bold' }}>{employee['Date of Joining']}</span>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Skills: <span style={{ fontWeight: 'bold' }}>{employee['Skill Sets']}</span>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Experience: <span style={{ fontWeight: 'bold' }}>{employee.experience}</span>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Employee worked projects: <span style={{ fontWeight: 'bold' }}>{employee['Employee worked projects']}</span>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Vendor: <span style={{ fontWeight: 'bold' }}>{employee['Vendor Name']}</span>
      </Typography>
    </Box>
  </Grid>
</Grid>




{/* <Box>
  <Typography variant="body2" color="text.secondary">
    Department: {employee.department}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Location: {employee.location}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    DOB: {employee.DOB}
  </Typography>
</Box> */}


            </Card>

    
        ))}

        </>

    );

  }




  export default App;




