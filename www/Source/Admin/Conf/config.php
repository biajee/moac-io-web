<?php
return array(
    'SESSION_PREFIX'=>'easy_admin',
    'COOKIE_PREFIX'=>'easy_admin_',
    'VAR_SESSION_ID' => 'session_id',	//修复uploadify插件无法传递session_id的bug
    'LANG_SWITCH_ON'    => true,        //开启多语言支持开关
    'DEFAULT_LANG' => 'zh-cn',    // 默认语言
    'LANG_LIST' => 'zh_cn',
    //模板变量
    'TMPL_PARSE_STRING' => array(
        '__LIB__' => __ROOT__ . '/assets/lib',
        '__IMG__'    => __ROOT__ . '/assets/admin/images',
        '__CSS__'    => __ROOT__ . '/assets/admin',
        '__JS__'     => __ROOT__ . '/assets/admin/js',
    ),
	/* 后台错误页面模板 */
    'TMPL_ACTION_ERROR'     =>  MODULE_PATH.'View/Public/error.html', // 默认错误跳转对应的模板文件
    'TMPL_ACTION_SUCCESS'   =>  MODULE_PATH.'View/Public/success.html', // 默认成功跳转对应的模板文件
    'TMPL_EXCEPTION_FILE'   =>  MODULE_PATH.'View/Public/exception.html',// 异常页面的模板文件
);