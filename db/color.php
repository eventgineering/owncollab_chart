<?php
namespace OCA\Owncollab_Chart\Db;

use JsonSerializable;

use OCP\AppFramework\Db\Entity;

class Color extends Entity implements JsonSerializable {

    protected $user;
    protected $colorcode;

    public function jsonSerialize() {
        return [
            'user' => $this->user,
            'colorcode' => $this->colorcode,
        ];
    }
}