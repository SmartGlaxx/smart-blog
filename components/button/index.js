import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'


const MyButton = styled(Button)({
  // background : 'linear-gradient(to right, #3289a8, #466f7d)',
  background : '#3289a8',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  float: 'right',
  height: 48,
  padding: '0 1rem',
});

export default MyButton