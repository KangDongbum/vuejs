const router = require('express').Router();
const kanban = require("../models/kanban"); 

router.use(async (req, res) => {
	const data = req.body;
	const mode = data.mode;
	let success = false;
	let returnData = {};
	let message = "";
	try{
		switch (mode) {
			/** 작업 추가 */
			case "add": 
				const idx = await kanban.addWork(data);
				if(!idx){
					throw new Error("작업등록 실패하였습니다.");
				}
				
				success = true;
				return Data={idx};
				break;
			/** 작업 수정 */
			case "edit" : 
				kanban.editWork(data);
				break;
			/** 작업 삭제 */
			case "delete" :
				break;
			/** 작업 목록 */
			case "getList" : 
				break;
		}
	} catch (err){
		success = false;
		message = err.message;
	}
	const _result = {
		success, 
		data : returnData,
		message,
	};
	return res.json(_result);
});

module.exports = router;