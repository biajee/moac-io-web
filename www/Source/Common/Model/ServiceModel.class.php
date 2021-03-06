<?php
namespace Common\Model;
use Think\Model;

/**
 * Class BlockModel
 * @package Common\Model
 * @author 33hl.cn
 */
class ServiceModel extends Model {
    protected $tableName = 'Service';
    public function deleteOne($id) {
        $this->delete($id);
        $key = 'Service/'.$id;
        D('Attachment')->deleteByKey($key);
    }
    public function deleteBatch($idArr) {
        foreach($idArr as $id) {
            $this->deleteOne($id);
        }
    }
}