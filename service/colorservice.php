<?php
namespace OCA\Owncollab_Chart\Service;

use Exception;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;

use OCA\Owncollab_Chart\Db\Color;
use OCA\OwnCollab_Chart\Db\ColorMapper;


class ColorService {

    private $mapper;

    public function __construct(ColorMapper $mapper){
        $this->mapper = $mapper;
    }

    public function findAll() {
        return $this->mapper->findAll();
    }

    private function handleException ($e) {
        if ($e instanceof DoesNotExistException ||
            $e instanceof MultipleObjectsReturnedException) {
            throw new NotFoundException($e->getMessage());
        } else {
            throw $e;
        }
    }

    public function find($user) {
        try {
            return $this->mapper->find($user);

        // in order to be able to plug in different storage backends like files
        // for instance it is a good idea to turn storage related exceptions
        // into service related exceptions so controllers and service users
        // have to deal with only one type of exception
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

    public function create($user, $colorcode) {
        $color = new Color();
        $color->setUser($user);
        $color->setColorcode($colorcode);
        return $this->mapper->insert($color);
    }

    public function update($user, $colorcode) {
        try {
	    $query = \OC_DB::prepare('UPDATE `*PREFIX*collab_usercolors` SET colorcode="'.$colorcode.'" WHERE user="'.$user.'"');
	    $result = $query->execute();
	    return $result;
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

    public function delete($user) {
        try {
            $color = $this->mapper->find($user);
            $this->mapper->delete($color);
            return $color;
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

}
