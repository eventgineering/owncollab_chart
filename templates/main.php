<?php
/**
 * @var OCP\Template $this
 * @var array $_
 */

script('owncollab_chart', 'libs/colorpicker/spectrum');
script('owncollab_chart', 'application/action/changecolor');
style('owncollab_chart', 'spectrum');

?>

<div id="app-lbox">
	<?php print_unescaped($this->inc('part.lbox')); ?>
</div>

<div id="app">
	<div id="app-content">
        <div id="app-content-error"></div>
		<div id="app-content-wrapper">
			<?php print_unescaped($this->inc('part.topbar')); ?>
			<?php print_unescaped($this->inc('part.content')); ?>
		</div>
	</div>
    <div id="app-sidebar" class="disappear">
		<?php print_unescaped($this->inc('part.sidebar')); ?>
	</div>
</div>

