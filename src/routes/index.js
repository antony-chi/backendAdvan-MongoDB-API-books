import { Router} from "express";
//intaciamos la classe Router()
const router = Router()

router.get('/main',(req,res) =>{
    //Request es la peticion al servidor
    
    //Response es la respuesta del servidor que mando al back
    res.send('Welcome Anthoy')
});

export default router