import * as React from 'react';
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = ({ expand, onClick }) => (
  <IconButton
    onClick={onClick}
    className={`ml-auto transition-transform duration-300 transform ${expand ? 'rotate-180' : 'rotate-0'} hover:text-black`}
  >
    <ExpandMoreIcon />
  </IconButton>
);

const RecipeReviewCard = ({ avatarLetter, title, subheader, image, altText, description, methodImage }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-4">
      <Card className="max-w-sm bg-black text-white rounded-lg shadow-xl transition-all ease-in-out duration-300 transform hover:scale-102 scale-90 hover:ring-1 hover:ring-purple-500 hover:border-2 hover:border-purple-500 hover:shadow-[0_4px_20px_0_rgba(128,0,128,0.6)]">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" className="transition-all hover:scale-110">
              {avatarLetter}
            </Avatar>
          }
          title={<span className="text-black text-2xl">{title}</span>}
          subheader={<span className="text-sm font-light text-black">{subheader}</span>}
          className="text-white"
          sx={{ height: '80px' }}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={altText}
          className="rounded-t-lg transition-transform transform hover:scale-110 duration-300"
          sx={{ height: '200px' }}
        />
        <CardContent
          className="text-gray-300"
          style={{
            maxHeight: '150px',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <Typography variant="body2" className="text-black">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="text-white" sx={{ height: '60px' }}>
          <IconButton
            aria-label="share"
            className="transition-colors duration-300 hover:bf p-2 rounded-full text-black"
          >
            <ShareIcon className="text-black" />
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick} />
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          className="absolute top-0 w-full bg-slate-200 z-10 rounded-b-lg"
        >
          <CardContent>
            <Typography className="text-black">Scan The Qr</Typography>
            <img
              src={methodImage}
              alt="Scan The Qr"
              className="mt-2 rounded-lg transition-all transform hover:scale-105"
            />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default RecipeReviewCard;
