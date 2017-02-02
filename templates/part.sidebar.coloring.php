    <script type="text/javascript">
        window.onload = function()
        {
            // The plain javascript api is very similar to the jquery version with some exceptions.
            // There is no chaining like in the jquery api. So when you create a instance it
            // will return all methods and properties.
            //
            var $picker = document.getElementById("colorPicker")
            ,   picker  = tinycolorpicker($picker)
            ;
        }
    </script>

<div id="chart_coloring" class="">

this is a test
    <div id="colorPicker">
        <a class="color"><div class="colorInner"></div></a>
        <div class="track"></div>
        <ul class="dropdown"><li></li></ul>
        <input type="hidden" class="colorInput"/>
    </div>

a second test
    <div id="colorPicker">
        <a class="color"><div class="colorInner"></div></a>
        <div class="track"></div>
        <ul class="dropdown"><li></li></ul>
        <input type="hidden" class="colorInput"/>
    </div>


</div>
