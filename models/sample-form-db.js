cnx = require('./cnx-mariaDB');

module.exports = {
  async read(id) {
    try {
      conn = await pool.getConnection();
      sql = "select * from sampleDB_sampleTable where n_id = ?";
      const rows = await conn.query(sql, id);
      conn.end();
      if (rows.length == 1) {
        return rows[0];
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  },
  
  async list(o_body) {
    console.log('Dates: ', o_body.inputDateFrom, 'and ', o_body.inputDateTo);
    s_sqlSentence = "select * from view_sampleTable where SessionDate between '" + o_body.inputDateFrom + 
      "' and '" + o_body.inputDateTo + "' and s_parameter1 = upper('" + o_body.inputTrainingCenter + "')";
    console.log("Select SQL sentence: ", s_sqlSentence);
    let rowsQty = 0;
    try {
      const rows = await cnx.pool.query(s_sqlSentence, [o_body.inputDateFrom, o_body.inputDateTo]);
      rowsQty = rows.length;
      console.log('Select rows qty: ', rowsQty);
      return new Promise((resolve, reject)=>{
      if(rowsQty > 0){
        console.log('Select rows result rows[0].n_id: ', rows[0].n_id);
        resolve(rows);
      } else {
        console.log('Select rows result is Zero ');
        reject(rows={b_result: false});
      }        
    });
      //return rows;
    } catch (err) {
      throw err;
    }
  },
  
  async insert(o_body) {

    const s_sqlLine1 = "insert into sampleDB_sampleTable "
    const s_sqlLine2 = "(d_date, s_name_surname, s_role, s_citizenship, s_session, s_customer, s_parameter1, s_parameter2, s_notes) ";
    const s_sqlLine3 = "values (?, ucase(?), ucase(?), ucase(?), ?, ?, ?, ?, ?)";
    const s_sqlSentence = s_sqlLine1 + s_sqlLine2 + s_sqlLine3;

    console.log("Insert SQL sentence: ", s_sqlSentence);
    let rowsQty = 0;
    try{
      const rows = await cnx.pool.query(s_sqlSentence, [o_body.inputDate, o_body.inputName + ' ' + o_body.inputSurname, o_body.selectRole,
      o_body.inputCitizen, o_body.trainingSession, o_body.inputCustomer, o_body.inputTrainingCenter, o_body.selectSim, 'N/A']);
      rowsQty = rows.affectedRows;

      return new Promise((resolve, reject)=>{
        if(rowsQty > 0){
          console.log('Select rows result rows[0].n_id: ', rows);
          resolve(rows);  
        } else {
          console.log('Select rows result is Zero ');
          reject(rows={b_result: false});  
        }
      });

    } catch (err) {
      throw err;
    }
  },

}; 
