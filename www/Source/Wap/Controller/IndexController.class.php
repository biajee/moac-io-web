<?php
namespace Wap\Controller;
class IndexController extends BaseController {
    public function _initialize()
    {
        parent::_initialize();
    }

    public function index() {
    	var_dump('为什么');exit;
    	//模板输出
        $this->display();
    }
}