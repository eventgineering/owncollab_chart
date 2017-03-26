<?php
namespace OCA\Owncollab_Chart\Db;

use JsonSerializable;

use OCP\AppFramework\Db\Entity;

class Color extends Entity implements JsonSerializable {

    protected $userId;
    protected $colorcode;

    public function jsonSerialize() {
        return [
            'uid' => $this->userId,
            'colorcode' => $this->colorcode,
        ];
    }
}