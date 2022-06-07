const router = require('express').Router()
const AddressBook = require('../model/AddressBook')

router.post('/add', async (req, res) => {
    try{
        const newAddressBook = AddressBook({
            name: req.body.name,
            phone: req.body.phone,
        })
        const addressbook = await newAddressBook.save()
        res.status(200).json(addressbook)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/update/:id', async(req, res)=>{
    try{
        const addressbook = await AddressBook.findByIdAndUpdate(req.params.id, {$set: req.body,})
        res.status(200).json('Updated')
    }catch(err){
        return res.status(500).json(err)
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try{
        await AddressBook.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    }catch(err){
        return res.status(500).json(err)
    }
})

router.get('/data/:id', async(req,res)=>{
    try{
        const data = await AddressBook.findById(req.params.id)
        res.status(200).json(data)
    }catch(err){
        return res.status(500).json(err)
    }
})

router.get('/data', async(req,res)=>{
    try{
        const data = await AddressBook.find()
        res.status(200).json(data)
    }catch(err){
        return res.status(500).json(err)
    }
})


module.exports = router