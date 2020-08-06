const { Router } = require("express");
const router = Router();
const ctrl = require("./music.ctrl");

router.get("/", ctrl.list); // 목록 조회
router.get("/:id", ctrl.detail); // 상세 조회
router.post("/", ctrl.create); // 등록
router.put("/:id", ctrl.update); // 수정
router.delete("/:id", ctrl.remove); // 삭제 (앞에는 http 메소드 명이라 delete이고, 뒤에는 remove)

module.exports = router;
