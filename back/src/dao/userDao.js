const {pool} = require("../../database");

exports.selectUserByEmail = async function(email){
    try{
        //DB 연결 검사
        const connection = await pool.getConnection(async (conn) => conn);
        
        try{
            //쿼리
            const selectUserByEmailQuery = "select * from Users where email = ?";
            const selectUserByEmailParams = [email];

            const [row] = await connection.query(selectUserByEmailQuery,selectUserByEmailParams);
            return row;

        }catch(err){
            console.error(`###### insertUser Query error ###### \n ${err}`);
            return false;
        }
        finally{
            connection.release();
        }
   
    }catch(err){
        console.error(`##### MyTodoDB error #####`);
        return false;
    }
}

exports.insertUser = async function(email,password,nickname){
    try{
        //DB 연결 검사
        const connection = await pool.getConnection(async (conn) => conn);
        
        try{
            //쿼리
            const insertUserQuery = "insert into Users (email,password,nickname) values (?,?,?);";
            const insertUserParams = [email,password,nickname];

            const [row] = await connection.query(insertUserQuery,insertUserParams);
            return row;

        }catch(err){
            console.error(`###### insertUser Query error ###### \n ${err}`);
            return false;
        }
        finally{
            connection.release();
        }
   
    }catch(err){
        console.error(`##### MyTodoDB error #####`);
        return false;
    }
}

exports.selectUser = async function(email,password){
    try{
        //DB 연결 검사
        const connection = await pool.getConnection(async (conn) => conn);
        
        try{
            //쿼리
            const selectUserQuery = "select * from Users where email = ? and password = ?";
            const selectUserParams = [email,password];

            const [row] = await connection.query(selectUserQuery,selectUserParams);
            return row;

        }catch(err){
            console.error(`###### selectUser Query error ###### \n ${err}`);
            return false;
        }
        finally{
            connection.release();
        }
   
    }catch(err){
        console.error(`##### MyTodoDB error #####`);
        return false;
    }
}

exports.selectNicknameByTokenByuserIdx = async function(userIdx){
    try{
        //DB 연결 검사
        const connection = await pool.getConnection(async (conn) => conn);
        
        try{
            //쿼리
            const selectNicknameByTokenByuserIdxQuery = "select * from Users where userIdx = ?;";
            const selectNicknameByTokenByuserIdxParams = [userIdx];

            const [row] = await connection.query(selectNicknameByTokenByuserIdxQuery,selectNicknameByTokenByuserIdxParams);
            return row;

        }catch(err){
            console.error(`###### selectNicknameByTokenByuserIdx Query error ###### \n ${err}`);
            return false;
        }
        finally{
            connection.release();
        }
   
    }catch(err){
        console.error(`##### MyTodoDB error #####`);
        return false;
    }
}