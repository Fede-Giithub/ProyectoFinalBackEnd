// EL ROUTER VALIDA METODOS Y RUTAS PROPIAS DE LA ENTIDAD

// GET http://localhost:3000/product

import { Router } from "express"
import BookController from "../controllers/bookController"
import authMiddleware from "../middleware/authMiddleware"
import upload from "../middleware/uploadMiddleware"
import limiter from "../middleware/rateLimitMiddleware"
const bookRouter = Router()

// TODAS LAS PETICIONES QUE LLEGAN AL PRODUCTROUTER EMPIEZAN CON
// POST http://localhost:3000/products/

bookRouter.get("/",limiter,BookController.getAllBooks)
bookRouter.get("/:id",limiter,BookController.getBook)
bookRouter.post("/", authMiddleware, upload.single("image"), BookController.addBook)
bookRouter.patch("/:id", authMiddleware, BookController.updateBook)
bookRouter.delete("/:id", authMiddleware, BookController.deleteBook)

export default bookRouter