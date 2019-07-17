import React from 'react';
import './App.css';
import Customer from './components/Customer.js';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080,
    textAlign: "right"
  }
})

const customers = [
{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '홍길동1',
  'birth': '19950319',
  'gender': 'M',
  'job': 'Univ.Student'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '홍길동2',
  'birth': '19950319',
  'gender': 'M',
  'job': 'Univ.Student'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '홍길동3',
  'birth': '19950319',
  'gender': 'M',
  'job': 'Univ.Student'
}
]

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => { // 복잡한 배열을 'map'을 이용하여 매핑시킴 
                return (
                  <Customer
                    key={c.id} // 'map'은 key필요
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birth={c.birth}
                    gender={c.gender}
                    job={c.job}
                  />
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
