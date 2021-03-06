import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  WelcomeScreen: {
    "& > div":{
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.9)",
      "& div":{
        animation: "all 1000ms ease-in-out forwards"
      },
      "& > div":{
        backgroundColor: "white",
        height: "max-content",
        padding: "30px 20px"
      }
    }
  },
  CreateRoomMenu:{
    
  },
});
