import { Router } from "express";
const router = Router();

//importar la BD conection
import { connect } from "../database.js";
//import { ObjectId } from "mongodb";


//CRUD Create Read Update Delete
//get books
router.get('/books', async (req, res) => {
    //accedidiendo a la baseD
  const db = await connect();
  //accediendo al collection books y consulta todos los documentos que se encuentran

  //se convierte en array para facilitar el mapeo del lado del cliente
  const result = await db.collection('books').find().toArray();
  console.log(result)
  res.json({code: '200', result: result});
});


//Create Books
router.post('/create-book', async (req,res) =>{
    //acceso a la DataBase
    const db = await connect();
    //obtener el request body para insertar en la DB
    console.log(req.body)
    //#1 manera de crear el objeto tradiccional
    const book = {
        title: req.body.title,
        descripcion: req.body.description
    }
    //modo #2 desestructurar
    //const {title, descripcion} = req.body
    //const book = {title, descripcion}

    //Create book en la BD
    const result = await db.collection('books').insertOne(book);
    console.log(result)
    res.json({
        code: "201",
        result: result.insertedId
    })
})
/*
//Upadate books
router.put('/update-book/:bookid', async (req, res) =>{
    const bookid = req.params.bookid;
    const bookUpdate = {
        title: req.body.title,
        descripcion: req.body.description
    }
    const db = await connect();

    //cfind the book by id update
    const result = await db.collection('books').updateOne({_id: ObjectId(bookid)}, {$set: bookUpdate});
    
    console.log(result);
    if(result.matcheCount > 0){
        res.json({code: 201, message:`Book ${bookid} se ha actualizado!!`})
    }else{
        res.json({code: 404, message: `No se pudo actualizar el libro ${bookid}`})
    }
});

//Delete books
router.delete('/delete-book/:bookid', async (req,res) =>{
    const bookid = req.params.bookid;
    const db = await connect();
    //
    const result = await db.collection('books').deleteOne({_id:ObjectId(bookid)});
    console.log(result);
    //return true
    if(result.deleteCount > 0){
        res.json({ code: 201, message: `Book ${bookid} se ha eliminado`})
        return 
    }else{
        return res.json({message: `no se pudo eliminar el libro ${bookid}`})
    }
})

//find by title
router.get('/find-book-by-title', async (req, res) =>{
    var title = req.query.booktitle;
    console.log(title);
    return true
})
*/
export default router