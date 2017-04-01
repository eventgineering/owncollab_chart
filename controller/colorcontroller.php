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
     * @param string $user
     */
    public function show($user) {
        return $this->handleNotFound(function () use ($user) {
            return $this->service->find($user);
        });
    }

    /**
     * @NoAdminRequired
     *
     * @param string $user
     * @param string $colorcode
     */
    public function create($user, $colorcode) {
        return $this->service->create($user, $colorcode);
    }

    /**
     * @NoAdminRequired
     *
     * @param string $user
     * @param string $colorcode
     */
    public function update($user, $colorcode) {
        return $this->handleNotFound(function () use ($user, $colorcode) {
            return $this->service->update($user, $colorcode);
        });
    }

    /**
     * @NoAdminRequired
     *
     * @param string $user
     */
    public function destroy($user) {
        return $this->handleNotFound(function () use ($user) {
            return $this->service->delete($user);
        });
    }

}
