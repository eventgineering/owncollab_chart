<?php
namespace OCA\Owncollab_Chart\Db;

use OCP\IDb;
use OCP\AppFramework\Db\Mapper;

class ColorMapper extends Mapper {

    public function __construct(IDb $db) {
        parent::__construct($db, 'collab_usercolors', '\OCA\Owncollab_Chart\Db\Color');
    }

    public function findAll() {
        $sql = 'SELECT * FROM *PREFIX*collab_usercolors';
        return $this->findEntities($sql);
    }
    
    public function find($user) {
        $sql = 'SELECT * FROM *PREFIX*collab_usercolors WHERE user = ?';
        return $this->findEntity($sql, [$user]);
    }

}
