const express = require('express');
const router = express.Router();
//List of orders
router.get('/', (req,res,next)=> {
    res.status(200).json({
        message: 'Orders were fetched'        
    });
});

//status code 201 to indicate the post is successful
router.post('/', (req,res,next)=> {
    res.status(201).json({
        message: 'Order was created',
        orderId:req.params.orderId
    });
});

//Get one order
router.get('/:orderId',(req,res,next)=>{
        res.status(200).json({
            message: 'Order details',
            orderId: req.params.orderId
    });
});

//Patch one order
router.patch('/:orderId',(req,res,next)=>{
        res.status(200).json({
            message: 'Order patched',
            orderId:req.params.orderId
    });
});

//Delete one order
router.delete('/:orderId',(req,res,next)=>{
        res.status(200).json({
            message: 'Order deleted',
            orderId:req.params.orderId
    });
});

module.exports = router;