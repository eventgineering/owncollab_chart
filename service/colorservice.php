<?php
namespace OCA\Owncollab_Chart\Service;

use Exception;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;

use OCA\OwnCollab_TimeTracker\Db\Color;
use OCA\OwnCollab_TimeTracker\Db\ColorMapper;


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

    public function find($userId) {
        try {
            return $this->mapper->find($userId);

        // in order to be able to plug in different storage backends like files
        // for instance it is a good idea to turn storage related exceptions
        // into service related exceptions so controllers and service users
        // have to deal with only one type of exception
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

    public function create($userId, $colorcode) {
        $color = new Color();
        $color->setUserId($userId);
        $color->setColorcode($colorcode);
        return $this->mapper->insert($color);
    }

    public function update($userId, $colorcode) {
        try {
            $color = $this->mapper->find($userId);
            $color->setColorcode($colorcode);
            return $this->mapper->update($color);
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

    public function delete($userId) {
        try {
            $color = $this->mapper->find($userId);
            $this->mapper->delete($color);
            return $color;
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

}
