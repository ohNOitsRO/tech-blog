const { User } = require('../models');

const dummyUsers = [{
        username: 'Istanbully',
        password: 'constantinopl3'

    },
    {
        username: 'MythManLegend',
        password: 'th3l3g3ndhims3lf'
    },
    {
        username: 'MilesPrower',
        password: '2fast2furious'
    },
    {
        username: 'lakitusCloud',
        password: 'cameraman3000'
    }
];

const user_seeds = () => User.bulkCreate(dummyUsers);

module.exports = user_seeds;