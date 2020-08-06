const { Router } = require("express");
const router = Router();
const ctrl = require("./movie.ctrl");

// 목록 조회
router.get("/", ctrl.list);

// 상세 조회
router.get("/:id", ctrl.detail);

// 등록
router.post("/", ctrl.create);

// 수정
router.put("/:id", ctrl.update);

// 삭제 (앞에는 http 메소드 명이라 delete이고, 뒤에는 remove)
router.delete("/:id", ctrl.remove);

module.exports = router;
