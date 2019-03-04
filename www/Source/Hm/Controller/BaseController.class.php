<?php
namespace Hm\Controller;
use Think\Controller;
class BaseController extends Controller {
    
    public function _initialize() {
        //语言包功能
        $this->lang = cookie('think_language');
    	if(empty($this->lang)){
    		$lang=substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,5);
		    if(preg_match("/zh-c/i",$lang)){
		        $this->lang = 'zh-cn';
		    }else if(preg_match("/zh/i",$lang)){
		        $this->lang = 'zh-cn';
		    }else if(preg_match("/en/i",$lang)){
		        $this->lang = 'en-us';
		    }else if(preg_match("/fr/i",$lang)){
		        $this->lang = 'en-us';
		    }else if(preg_match("/de/i",$lang)){
		        $this->lang = 'en-us';
		    }else if(preg_match("/jp/i",$lang)){
		        $this->lang = 'en-us';
		    }else if(preg_match("/ko/i",$lang)){
		        $this->lang = 'en-us';
		    }else if(preg_match("/es/i",$lang)){
		        $this->lang = 'en-us';
		    }else if(preg_match("/sv/i",$lang)){
		        $this->lang = 'en-us';
		    }else{
		        $this->lang = 'en-us';
		    }
    	}
    	$this->assign('langset', $this->lang);

    public function _empty() {
        $this->show('栏目建设中...');
    }
}