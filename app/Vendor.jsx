// Modernizr
import './modernizr.js';
// jQuery
window.$ = require('jquery');
// Local storage
window.$.localStorage = require('js-storage').localStorage;
// jQuery easing
import '../node_modules/jquery.easing/jquery.easing.min.js';
// Whirl
import '../node_modules/whirl/dist/whirl.css';
// Animo
import '../node_modules/animo/animo.js';
// Font Awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';
// Animate.CSS
import '../node_modules/animate.css/animate.min.css';
// Simple line icons
import '../node_modules/simple-line-icons/css/simple-line-icons.css';
// Localization
import '../node_modules/jquery-localize/dist/jquery.localize.min.js';
// Fullscreen
window.screenfull = require('screenfull');
// Weather Icons
import '../node_modules/weather-icons/css/weather-icons.min.css';
import '../node_modules/weather-icons/css/weather-icons-wind.min.css';
// fastclick
import '../node_modules/fastclick/lib/fastclick.js';
// Slimscroll
import '../node_modules/jquery-slimscroll/jquery.slimscroll.min.js';
// Google Maps
import '../node_modules/jquery.gmap/jquery.gmap.min.js';
// Vector Maps
import '../node_modules/ika.jvectormap/jquery-jvectormap-1.2.2.min.js';
import '../node_modules/ika.jvectormap/jquery-jvectormap-world-mill-en.js';
import '../node_modules/ika.jvectormap/jquery-jvectormap-us-mill-en.js';
import '../node_modules/ika.jvectormap/jquery-jvectormap-1.2.2.css';
// Datatables
$.fn.dataTable = require('datatables.net-bs')(window, $);
require('datatables.net-buttons')(window, $);
require('datatables.net-buttons-bs')(window, $);
require('datatables.net-responsive')(window, $);
require('datatables.net-responsive-bs')(window, $);
require('datatables.net-buttons/js/buttons.colVis.js')(window, $); // Column visibility
require('datatables.net-buttons/js/buttons.html5.js')(window, $); // HTML 5 file export
require('datatables.net-buttons/js/buttons.flash.js')(window, $); // Flash file export
require('datatables.net-buttons/js/buttons.print.js')(window, $); // Print view button
import '../node_modules/dataTables.fontAwesome/dataTables.fontAwesome.css';
// JQ Grid
import '../node_modules/jqGrid/css/ui.jqgrid.css';
import '../node_modules/jqGrid/js/jquery.jqGrid.js';
import '../node_modules/jqGrid/js/i18n/grid.locale-en.js';
import '../node_modules/components-jqueryui/themes/smoothness/jquery-ui.css';
// Fileupload
import '../node_modules/blueimp-file-upload/css/jquery.fileupload.css';
import '../node_modules/blueimp-file-upload/js/jquery.fileupload.js';
// Wizard (jquery.steps)
import '../node_modules/jquery-steps/build/jquery.steps.min.js';
// Validation
import '../node_modules/jquery-validation/dist/jquery.validate.js';
import '../node_modules/bootstrap/js/tooltip.js';
import '../node_modules/bootstrap/js/popover.js';
// Parsley
import '../node_modules/parsleyjs/dist/parsley.min.js';
// Datetime picker
import '../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js';
import '../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
// Colorpicker
import '../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css';
import '../node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js';
// Image Cropper
import '../node_modules/cropper/dist/cropper.css';
import '../node_modules/cropper/dist/cropper.js';
// Select 2
import '../node_modules/select2/dist/css/select2.css';
import '../node_modules/select2/dist/js/select2.js';
import '../node_modules/select2-bootstrap-theme/dist/select2-bootstrap.css';
// Input Mask
import '../node_modules/inputmask/dist/jquery.inputmask.bundle.js';
// Chosen
import '../node_modules/chosen-js/chosen.css';
import '../node_modules/chosen-js/chosen.jquery.js';
// Bootstrap Range slider
import '../node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css';
import '../node_modules/bootstrap-slider/dist/bootstrap-slider.min.js';
// Wysiwig
import '../node_modules/bootstrap-wysiwyg/css/style.css';
import '../node_modules/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min.js';
// Filestyle
import '../node_modules/bootstrap-filestyle/src/bootstrap-filestyle.js';
// Tags Input
import '../node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css';
import '../node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js';
// X-Editable
import '../node_modules/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js';
import '../node_modules/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css';
// Sweet Alert (global access for other scripts)
import '../node_modules/sweetalert/dist/sweetalert.css';
window.swal = require('../node_modules/sweetalert/lib/sweetalert.js');
// CSS Loaders
import '../node_modules/loaders.css/loaders.css';
import '../node_modules/spinkit/css/spinkit.css';
// Bootstrap Tour
import '../node_modules/bootstrap-tour/build/css/bootstrap-tour-standalone.css';
// import '../node_modules/bootstrap-tour/build/js/bootstrap-tour-standalone.js';
// Sortable
window.sortable = require('html5sortable');
// Nestable
import '../node_modules/nestable/jquery.nestable.js';
// Flot Charts
import '../node_modules/flot/jquery.flot.js';
import '../node_modules/flot/jquery.flot.categories.js';
import '../node_modules/flot/jquery.flot.pie.js';
import '../node_modules/flot/jquery.flot.resize.js';
import '../node_modules/flot/jquery.flot.time.js';
import '../node_modules/jquery.flot.spline/jquery.flot.spline.js';
import '../node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js';
// ChartJS
window.Chart = require('../node_modules/chart.js/dist/Chart.js');
// Rickshaw
import '../node_modules/rickshaw/rickshaw.min.css';
window.Rickshaw = require('../node_modules/rickshaw/rickshaw.js');
// Morris.js
window.Raphael = require('raphael');
import '../node_modules/morris.js.so/morris.css';
import '../node_modules/morris.js.so/morris.js';
// Chartist
import '../node_modules/matchmedia/index.js';
import '../node_modules/chartist/dist/chartist.min.css';
window.Chartist = require('../node_modules/chartist/dist/chartist.js');
// Knob charts
import '../node_modules/jquery-knob/js/jquery.knob.js';
// Easy pie charts
import '../node_modules/easy-pie-chart/dist/jquery.easypiechart.min.js';
// Sparklines
import '../node_modules/jquery-sparkline/jquery.sparkline.min.js';
// Blueimp
import '../node_modules/blueimp-load-image/js/load-image.all.min.js';
import '../node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.js';
import '../node_modules/blueimp-tmpl/js/tmpl.js';
// JQ Cloud
import '../node_modules/jqcloud2/dist/jqcloud.css';
import '../node_modules/jqcloud2/dist/jqcloud.js';
// Flatdocs
import '../node_modules/flatdoc/flatdoc.js';
