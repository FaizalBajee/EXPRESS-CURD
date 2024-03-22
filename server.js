import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    port: 8111,
    user: "root",
    password: "",
    database: "project"
})

//To Get Data
app.get('/', (req, res) => {
    const sql = "SELECT * FROM addcontact"
    db.query(sql, (err, result) => {
        if (err) {
            return res.json(err);
        }
        else {
            return res.json(result);
        }
    })
})
//To Insert data
app.post('/', (req, res) => {
    const { Name, Phone, Location } = req.body;
    const sql = ("INSERT INTO `addcontact`( `Name`, `Phone`, `Location`) VALUES (?,?,?)");
    db.query(sql, [Name, Phone, Location], (error, result) => {
        if (error) {
            return res.json(error)
        }
        else {
            return res.json(result)
        }
    })
})

//To update data(change)
app.put("/", (req, res) => {
    const { Name, Phone, Location, id } = req.body;
    const sql = ("UPDATE `addcontact` SET `Name`=?,`Phone`=?,`Location`=? WHERE id=?");
    db.query(sql, [Name, Phone, Location, id], (error, result) => {
        if (error) {
            return res.json(error)
        }
        else {
            return res.json(result)
        }
    })
})
 app.delete("/",(req,res)=>{
    const {id}=req.body;
    const sql=("DELETE FROM `addcontact` WHERE id=?");
    db.query(sql,[id],(error,result)=>{
        if(error)
        return res.json(error);
        return res.json(result);
    })
 })

app.listen(8113, () => {
    console.log("Running...")
})