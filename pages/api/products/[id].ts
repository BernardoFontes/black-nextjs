import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../database.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query // pode extrair o que tiver entre [] no nome do arquivo

    const product = products.find(prod => prod.id === Number(id))
    res.status(200).json(product)
}

// igual um findByID