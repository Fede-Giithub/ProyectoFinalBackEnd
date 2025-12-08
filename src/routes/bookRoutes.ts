// EL ROUTER VALIDA METODOS Y RUTAS PROPIAS DE LA ENTIDAD

// GET http://localhost:3000/product

import { Router } from "express"
import ProductController from "../controllers/bookController"
import authMiddleware from "../middleware/authMiddleware"
import upload from "../middleware/uploadMiddleware"

const productRouter = Router()

// TODAS LAS PETICIONES QUE LLEGAN AL PRODUCTROUTER EMPIEZAN CON
// POST http://localhost:3000/products/

productRouter.get("/", ProductController.getAllBooks)
productRouter.get("/:id", ProductController.getBook)
productRouter.post("/", authMiddleware, upload.single("image"), ProductController.addBook)
productRouter.patch("/:id", authMiddleware, ProductController.updateBook)
productRouter.delete("/:id", authMiddleware, ProductController.deleteBook)

export default productRouter