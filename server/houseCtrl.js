module.exports={
	getHouses: (req, res, next)=>{
		let db = req.app.get('db');
		db.getHouses().then(resp=>{
			res.status(200).send(resp)
		})
	},
	addHouse: (req, res, next)=>{
		let {name, address, city, state, zip } = req.body
		let db = req.app.get('db');
		db.addHouse([name, address, city, state, zip]).then(resp=>{
			res.status(200).send(resp)
		})
	},
	deleteHouse: (req, res, next)=>{
		let { id } = req.params;
		let db = req.app.get('db');
		db.deleteHouse([id]).then(resp=>{
			res.status(200).send(resp)
		})
	}
}