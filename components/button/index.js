import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'


const MyButton = styled(Button)({
  background : 'linear-gradient(to right, #2d134d, #5c324e, #032403)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  float: 'right',
  height: 48,
  padding: '0 30px'
});

export default MyButton