import * as React from "react"
import "./styles.sass"
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import firstmateygif from "../images/firstmatey.gif"
import academicgif from "../images/academicauditor.gif"
import pokeog from "../images/pokeog.gif"
import sac from "../images/saccounty.png"
import DHCS from "../images/DHCSlogo.svg"
import CDTFA from "../images/CDTFA-logo.png"
import Container from "@material-ui/core/Container"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#222831',
    color: '#dddddd'
  },
  header: {
    backgroundColor: '#222831',
    height: 'auto',
    maxWidth: '100%'
  },
  work: {
    height: '100%',
    width: 350,
    textAlign: 'center',
    backgroundColor: '#222831',
    color: '#eeeeee'
  },
  media: {
    height: 260,
    maxWidth: 'auto',
    padding: '0 2rem 0 2rem',
    backgroundColor: '#222831',
    color: '#eeeeee',
  },
  contentLinks: {
    justifyContent: 'center',
  },
  web: {
    paddingBottom: '4px'
  },
  bkwork: {
    height: '100%',
    width: 350,
    textAlign: 'center',
    backgroundColor: '#eeeeee',
  },
  buttonAdjust: {
    color: '#fbd46d',
  },
  popoverButton: {
    textAlign: 'center',
    alignItems: 'center'
  }
});

const IndexPage = () => {
  const [open, setOpen] = React.useState(false);
  const [openJob2, setOpenJob2] = React.useState(false);
  const [openJob3, setOpenJob3] = React.useState(false);
  const [openProject1, setOpenProject1] = React.useState(false);
  const [openProject2, setOpenProject2] = React.useState(false);
  const [openProject3, setOpenProject3] = React.useState(false);
  const [openEmail, setOpenEmail] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  const handleClickOpenEmail = () => {
    setOpenEmail(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenJob2 = () => {
    setOpenJob2(true);
  };

  const handleClickOpenJob3 = () => {
    setOpenJob3(true);
  };

  const handleClickProject1 = () => {
    setOpenProject1(true);
  };

  const handleClickProject2 = () => {
    setOpenProject2(true);
  };

  const handleClickProject3 = () => {
    setOpenProject3(true);
  };
  
  const handleClose = () => {
    setOpenEmail(false);
    setOpen(false);
    setOpenJob2(false);
    setOpenJob3(false);
    setOpenProject1(false);
    setOpenProject2(false);
    setOpenProject3(false);
  };


  const classes = useStyles();
  return (
    <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
    <main>
      <Container className={classes.header}><div>
      <title>Manuel Herrera - Software Developer</title>
      <Box 
      display="flex"
      justifyContent="center"
      >
        <Box>
        <div>
          <h1 id="name">Manuel Herrera</h1>
          <p id="intro">First-generation college graduate who is interested in Software Development.</p>
        </div>
        </Box>
      </Box>
      
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="row"
        flexWrap=""
        margin="0 0 2rem 0"
        container spacing={5}
      >
        <div id="icons">
          <Box p={2} component="span">
          <a href='https://www.linkedin.com/in/herrera-manuel/' alt="linkedin"><i className="fab fa-linkedin"></i></a>
          </Box>
          <Box p={2} component="span">
          <a href='https://github.com/HerreraManuel' alt="github"><i className="fab fa-github"></i></a>
          </Box>
          <Box p={2} component="span">
          <a href='https://twitter.com/man__whale' alt="twitter"><i className="fab fa-twitter"></i></a>
          </Box>
          <Box p={2} component="span">
          <a href='mailto:mherrera.jm@gmail.com' onClick={handleClickOpenEmail} alt="email"><i className="fas fa-envelope"></i></a>
          <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openEmail}
        onClose={handleClose}
        aria-labelledby="test"
      >
        <DialogTitle id="test">Send me an email!</DialogTitle>
        <DialogContent>
          <DialogContentText color="222831">
mherrera.jm@gmail.com
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}  variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog> 
          </Box>
        </div>
      </Box>
      </div>
      </Container>
      <Grid 
      container spacing={5}
      justify="center"
      padding="10px">
      <Grid item>
      <Card className={classes.work}  variant="outlined">
      <CardActionArea>
        <CardMedia >
        <img src={sac} alt="DHCS logo" className={classes.bkwork}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Database Administrator Intern
          </Typography>
          <Typography variant="body2" color="#dddddd" component="p">
            Oct. 2019 - Oct. 2020
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contentLinks}>
        <Button size="small" className={classes.buttonAdjust} variant="outlined"
        onClick={handleClickOpen}>
        More Info
        </Button>

        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="test"
      >
        <DialogTitle id="test">Sacramento County Department of Technology</DialogTitle>
        <DialogContent>
          <DialogContentText color="222831">
          • Improved an existing Shared SQL billing application in C# and wrote its documentation. Improved
security practices when accessing Microsoft SQL Server.
<br />
• Refactored an email parsing Java application to Kotlin that generated daily reports of servers that
required maintenance using Logi Analytics.
<br />
• Enabled point-in-time recovery and wrote backup scripts for multiple PostgreSQL production
databases.
<br />
• Assigned and followed-up on tasks I assigned out to the team for an Oracle Cloud testing project.
Attended monthly meetings with shareholders to report the status of the project.
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}  variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog> 

      </CardActions>
    </Card>
    </Grid>
      <Grid item>
      <Card className={classes.work}  variant="outlined">
      <CardActionArea>
        <CardMedia
        >
        <img src={DHCS} alt="DHCS logo" className={classes.bkwork}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Web Accessibility Intern
          </Typography>
          <Typography variant="body2" color="dddddd" component="p">
            June 2019 - Aug. 2019
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contentLinks}>
        <Button size="small" className={classes.buttonAdjust} variant="outlined" onClick={handleClickOpenJob2}>
        More Info
        </Button>
        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openJob2}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">California Department of Health Care Services</DialogTitle>
        <DialogContent>
          <DialogContentText color="222831">
          • Remediated DHCS’ website for accessibility following Web Content Accessibility (WCAG) 2.0 Level AA
standards using Equidox to review PDF content. <br />
• Identified accessibility web issues with Siteimprove.<br />
• Remediated web related issues in SharePoint.<br />
• Collaborated in website management meetings and user experience design sessions.<br />
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}  variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
    </Grid>
    <Grid item>
      <Card className={classes.work}  variant="outlined">
      <CardActionArea>
        <CardMedia
                className={classes.web}
        >
        <img src={CDTFA} alt="CDTFA logo" className={classes.bkwork}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Staff Services Analyst Intern
          </Typography>
          <Typography variant="body2" color="dddddd" component="p">
            Feb. 2019 - June 2019
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contentLinks}>
        <Button size="med" className={classes.buttonAdjust} variant="outlined" onClick={handleClickOpenJob3}>
        More Info
        </Button>

        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openJob3}
        onClose={handleClose}
        aria-labelledby="test"
      >
        <DialogTitle id="test">California Department of Tax and Fee Administration</DialogTitle>
        <DialogContent>
          <DialogContentText color="222831">
          • Managed the Unworkable Cases Inventory and generate monthly reports on updated cases to be assigned to
Settlement Officers for settlement negotiations.<br />
• Developed procedures and workflows to optimize time processing incoming proposals and conducting
research within the newly acquired Centralized Revenue Opportunity System (CROS).<br />
• Efficiently processed 120+ backlogged cases that resulted from a legacy computer systems transition.<br />
• Prepare cases accepted into the Settlement Program by drafting correspondence and organizing
taxpayer/power of attorney documentation for negotiations.<br />
• Facilitated and implemented department programs, policies and procedures, and state statutes governing the
sales and use tax laws.<br />
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}  variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog> 

      </CardActions>
    </Card>
    </Grid>
      </Grid>

      <Grid 
      container spacing={5}
      justify="center"
      padding="10px">
      <Grid item>

      <Card className={classes.root}  variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={firstmateygif}
          title="Home Server Demonstration"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            FirstMatey | Home Server
          </Typography>
          <Typography variant="body2" color="#dddddd" component="p">
            Made a home server from a repuprosed XPS 8700 to host various docker containers, media, bots, and personal documents.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contentLinks}>
        <Button size="med" className={classes.buttonAdjust} variant="outlined" onClick={handleClickProject1}>
        More Info
        </Button>

        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProject1}
        onClose={handleClose}
        aria-labelledby="test"
      >
        <DialogTitle id="test">FirstMatey</DialogTitle>
        <DialogContent>
          <DialogContentText color="222831">
          • Repurposed an old pc to a home server to host docker containers, media, bots, and personal files. <br />
• Created Docker Compose file to run multiple containers and Portainer for management.<br />
• Organizr as a landing page and to manage multiple users.<br />
• Backup scripts to send backups to off-site locations.
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}  variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog> 

        <Button size="med" className={classes.buttonAdjust} variant="outlined"
        href="https://github.com/HerreraManuel/FirstMatey">
          GitHub
        </Button>
      </CardActions>
    </Card>

    </Grid>

    <Grid item>
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pokeog}
          title="PokéOG Demonstration"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            PokéOG
          </Typography>
          <Typography variant="body2" color="###dddddd" component="p">
          An interactive Discord bot written in python that allows users to catch and trade the original 151
          Pokémon using the Discord API.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contentLinks}>
        <Button size="med" className={classes.buttonAdjust} variant="outlined" onClick={handleClickProject2}>
          More Info
        </Button>

        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProject2}
        onClose={handleClose}
        aria-labelledby="test"
      >
        <DialogTitle id="test">PokéOG</DialogTitle>
        <DialogContent>
          <DialogContentText color="222831">
          • An interactive Discord bot written in python that allows users to catch and trade the original 151
Pokémon using the Discord API. <br />
• Built the random encounter, catch, and help commands.<br />
• Designed and built the databases for Pokémon information, users, and guilds using SQLite3 and<br />
aiosqlite for async capabilities.
• GitHub Actions for CI/CD to test and deploy to Heroku.<br />
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}  variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog> 

        <Button size="med" className={classes.buttonAdjust} variant="outlined"
        href="https://github.com/HerreraManuel/PokeOG">
          GitHub
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item>
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={academicgif}
          title="Academic Auditor Demonstration"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Academic Auditor
          </Typography>
          <Typography variant="body2" color="#dddddd" component="p">
          Helped develop a web application for the Department of Computer Science at the California State University, Sacramento.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contentLinks}>
      <Button size="med" className={classes.buttonAdjust} variant="outlined" onClick={handleClickProject3}>
          More Info
        </Button>

        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProject3}
        onClose={handleClose}
        aria-labelledby="test"
      >
        <DialogTitle id="test">Academic Auditor</DialogTitle>
        <DialogContent>
          <DialogContentText color="222831">
          • Developed a web application, using the MERN stack, that streamlined the process of collecting and
recording confidential curriculum assessment data about student performance in upper division
courses for the Department of Computer Science at the California State University, Sacramento. <br />
• Built the front-end layout and the administrator view using React.<br />
• Created the database for ad hoc accounts and student outcomes using MongoDB<br />
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose}  variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog> 
      </CardActions>
    </Card>
    </Grid>
    
    </Grid>
    </main>
    </div>
  )
}


export default IndexPage
