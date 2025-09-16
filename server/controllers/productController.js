import Product from '../models/Product.js';

// Thêm sản phẩm
const addProduct = async (req, res) => {
    try {
        const { name, platform, image, new_price, old_price, description } = req.body;

        const newProduct = new Product({
            name: name,
            platform: platform,
            image: image,
            new_price: new_price,
            old_price: old_price,
            description: description
        });

        await newProduct.save();
        res.status(200).json({ message: 'Thêm sản phẩm thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
}

export { addProduct };