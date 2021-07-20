const dotenv = require('dotenv');
const path = require('path');
const should = require('chai').should();

//const assert = require('assert').strict;

dotenv.config({path: path.join(path.resolve(__dirname, '..'), 'config/db.env')})

describe('Model Board', function(){
    let models = null;
    let user = null;

    before(async function(){
        models = require('../models');
        user = await models.User.create({
            name: 'testUser',
            email: 'testUser@mysite.com',
            password: '1234',
            gender: 'male'
        });
    });


    it('Create 3 Boards', async function(){
        let board;
        board = await models.Board.create({
            title: 'test',
            contents: 'test',
            hit: 0,
            groupNo: 0,
            orderNo:0,
            depth:0,
            userNo: user.no

        });
        board.no.should.not.equals(undefined);

        board = await models.Board.create({
            title: 'test',
            contents: 'test',
            hit: 0,
            groupNo: 0,
            orderNo:0,
            depth:0,
            userNo: user.no

        });
        board.no.should.not.equals(undefined);

        board = await models.Board.create({
            title: 'test',
            contents: 'test',
            hit: 0,
            groupNo: 0,
            orderNo:0,
            depth:0,
            userNo: user.no

        });
        board.no.should.not.equals(undefined);
    });

    After(async function(){
        await models.Board.destroy({
            where:{
                userNo: user.no
            }
        })
        await models.User.destroy({
            where:{
                no: user.no
            }
        })
    });
})