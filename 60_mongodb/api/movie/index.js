const { Router } = require("express");
const router = Router();
const ctrl = require("./movie.ctrl");

router.get("/", ctrl.list); // 목록 조회
router.get("/new", ctrl.showCreatePage); // 등록페이지 보여주기
router.get("/:id", ctrl.checkId, ctrl.detail); // 상세 조회
router.get("/:id/edit", ctrl.checkId, ctrl.showUpdatePage); // 수정페이지 보여주기

router.post("/", ctrl.create); // 등록
router.put("/:id", ctrl.checkId, ctrl.update); // 수정
router.delete("/:id", ctrl.checkId, ctrl.remove); // 삭제 (앞에는 http 메소드 명이라 delete이고, 뒤에는 remove)

module.exports = router;
