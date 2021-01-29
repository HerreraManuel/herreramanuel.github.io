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


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%'
  },
  media: {
    height: 200,
  },
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <main>
      <title>Manuel Herrera</title>
      <Box 
      display="flex"
      justifyContent="center"
      margin="10rem 0 0 0"
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
        bgcolor="background.paper"
        margin="0 0 2rem 0"
        container spacing={5}
      >
        <Box p={1} bgcolor="grey.300">
          LinkedIn
        </Box>
        <Box p={1} bgcolor="grey.300">
          Github
        </Box>
        <Box p={1} bgcolor="grey.300">
          Twitter
        </Box>
        <Box p={1} bgcolor="grey.300">
          Email
        </Box>
      </Box>
      
      <Grid 
      container spacing={5}
      justify="center"
      padding="10px">
      <Grid item>

      <Card className={classes.root}     >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    </Grid>

    <Grid item>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>

    </Grid>
    </main>
  )
}

export default IndexPage
