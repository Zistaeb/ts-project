import _ from 'lodash';

const data = [
  {
    username: 'nina',
    role: 'admin',
  },
  {
    username: 'bia',
    role: 'seller',
  },
  {
    username: 'tita',
    role: 'seller',
  },
  {
    username: 'pinki',
    role: 'customer',
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
