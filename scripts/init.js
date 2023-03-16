tinymce.init({
  selector: 'textarea#default',
  language: 'es',
  width: '100%',
  height: '97vh',
  plugins: [
    'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
    'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
    'media', 'table', 'emoticons', 'template', 'help'
  ],
  toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor | help',
  menubar: 'favs file edit view insert format tools table help',
  content_css: '/modelo.css',
  setup: function(ed) {
    ed.on("init", function(ed) {
      const request = new XMLHttpRequest();
      request.open('GET', 'modelo.html', false);
      request.send(null); 
  if (request.status == 200) { tinymce.activeEditor.setContent(request.responseText) }
  } ) 
  }
});