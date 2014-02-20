var assert =chai.assert;

suite('Test para las expresiones regulares', function() {

   test('Comprobacion para comentarios', function () {
     var tokens = lexer(';comentario acerca del fichero ini');
     assert.equal(tokens[0].type,'comments');
    });
   
    test('Comprobacion para Header', function () {
      var tokens = lexer('[Encabezado]');
      assert.equal(tokens[0].type,'header');
    });
      
    test('Comprobacion para blancos', function () {
     var tokens = lexer(' ');
     assert.equal(tokens[0].type,'blanks');
    });
    
    test('Comprobacion para name = value', function () {
      var tokens = lexer('esto = test');
      assert.equal(tokens[0].type,'nameEqualValue');
    });
    
    test('Comprobacion para errores', function () {
     var tokens = lexer('algo que dara un error');
     assert.equal(tokens[0].type,'error');
    });
   
});