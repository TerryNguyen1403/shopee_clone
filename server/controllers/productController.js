import Product from '../models/Product.js';

// Thêm sản phẩm
export const addProduct = async (req, res) => {
    try {
        const { name, platform, image, new_price, old_price, description, isFeatured } = req.body;

        const newProduct = new Product({
            name: name,
            platform: platform,
            image: image,
            new_price: new_price,
            old_price: old_price,
            description: description,
            isFeatured: isFeatured
        });

        await newProduct.save();
        res.status(200).json({ message: 'Thêm sản phẩm thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
}


// Upload ảnh
export const uploadImages = (req, res) => {
    if(!req.file) {
        return res.status(400).json({ error: "Không có ảnh "});
    }

    const imgUrl = `http://localhost:4000/uploads/${req.file.filename}`;
    res.json({ img_url: imgUrl });
};