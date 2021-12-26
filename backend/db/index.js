const { Pool } = require('pg');
const pool = new Pool();

module.exports={
    async query(text, params){
        // invocation timestamp for the query method
        const start = Date.now();
        try {
            const res=await pool.query(text, params)
            // time elapsed since the invocation of the query method
            const duration = Date.now() - start;
            console.log('executed query', { text, duration, rows: res.rowCount });
            // console.log(res,'res')
            return res;
            
        } catch (error) {
            console.log('error in query',{text})
            throw error;
        }
    }
}

