import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/new_wensu',{useMongoClient:true});


const db = mongoose.connection;

db.on('error',()=>console.log('err on db'))
.once('open',()=>console.log('db connect'));




export default  mongoose.model('Cat', { name: String });

