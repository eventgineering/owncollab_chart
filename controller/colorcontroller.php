<?php
namespace OCA\Owncollab_Chart\Controller;

use OCP\IRequest;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Controller;

use OCA\Owncollab_Chart\Service\ColorService;

class ColorController extends Controller {

    private $service;
    private $userId;

    use Errors;

    public function __construct($AppName, IRequest $request,
                                ColorService $service, $UserId){
        parent::__construct($AppName, $request);
        $this->service = $service;
        $this->userId = $UserId;
    }

    /**
     * @NoAdminRequired
     */
    public function json() {
	return new JSONResponse($this->service->findAll());
    }

    /**
     * @NoAdminRequired
     */
    public function index() {
	return new DataResponse($this->service->findAll());
    }

    /**
     * @NoAdminRequired
     *
     * @param int $userId
     */
    public function show($userId) {
        return $this->handleNotFound(function () use ($userId) {
            return $this->service->find($userId);
        });
    }

    /**
     * @NoAdminRequired
     *
     * @param string $userId
     * @param string $colorcode
     */
    public function create($userId, $colorcode) {
        return $this->service->create($userId, $colorcode);
    }

    /**
     * @NoAdminRequired
     *
     * @param int $id
     * @param string $color
     */
    public function update($userId, $colorcode) {
        return $this->handleNotFound(function () use ($userId, $colorcode) {
            return $this->service->update($userId, $colorcode);
        });
    }

    /**
     * @NoAdminRequired
     *
     * @param int $userId
     */
    public function destroy($userId) {
        return $this->handleNotFound(function () use ($userId) {
            return $this->service->delete($userId);
        });
    }

}
