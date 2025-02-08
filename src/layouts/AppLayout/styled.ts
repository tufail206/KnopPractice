import {styled ,Box} from '@mui/material'

export const LayoutContainer = styled(Box)(({theme}) => ({
  maxWidth: '100%',
  width: '100%',
  minHeight:"100vh",
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },

}))
export const LayoutWrapper=styled(Box)({
    
    margin: '0 auto',
    display: 'flex',
    gap:"10px",
  
})
